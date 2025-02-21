import { cacheClient, prisma } from "..";
import { Prisma } from "@prisma/client";

const refereshCache = () => {
  const cacheTypes = [
    "totalClicks",
    "clicksByCountry",
    "clicksByReferer",
    "clicksByDeviceType",
  ];
  const groupBy = ["", "country", "referer", "deviceType"];
  const refereshCacheInterval = setInterval(
    async () => {
      try {
        const recentUrls = await cacheClient.sMembers("recent");
        for (let i = 0; i < recentUrls.length; i++) {
          for (let j = 0; j < 4; j++) {
            const currCacheType = cacheTypes[j];
            const currUrl = recentUrls[i];
            const isPresent = await cacheClient.exists(
              `${currUrl}:${currCacheType}`
            );
            if (!isPresent) continue;
            if (currCacheType === "totalClicks") {
              const clicks = await prisma.clickInfo.findMany({
                where: {
                  shortUrl: currUrl,
                },
              });
              const noOfClicks = clicks.length;
              cacheClient.set(`${currUrl}:totalClicks`, noOfClicks, {
                EX: 60 * 60 * 24,
              });
              continue;
            }
            const newValue = await prisma.clickInfo.groupBy({
              by: [`${groupBy[j]}` as Prisma.ClickInfoScalarFieldEnum],
              where: { shortUrl: currUrl },
              _count: {
                country: currCacheType === "clicksByCountry" ? true : undefined,
                referer: currCacheType === "clicksByReferer" ? true : undefined,
                deviceType:
                  currCacheType === "clicksByDeviceType" ? true : undefined,
              },
            });
            cacheClient.set(
              `${currUrl}:${currCacheType}`,
              JSON.stringify(newValue),
              {
                EX: 60 * 60 * 24,
              }
            );
          }
          cacheClient.sRem("recent", recentUrls[i]);
        }
      } catch (error) {
        console.error("error inside refreshCache worker", error);
      }
    },
    1000 * 60 * 60
  );

  return refereshCacheInterval;
};

export default refereshCache;
