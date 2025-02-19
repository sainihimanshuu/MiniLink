-- CreateTable
CREATE TABLE "ShortUrl" (
    "id" SERIAL NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "ownerMail" TEXT NOT NULL,

    CONSTRAINT "ShortUrl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClickInfo" (
    "id" SERIAL NOT NULL,
    "deviceType" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "referer" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "clickDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClickInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShortUrl_shortUrl_key" ON "ShortUrl"("shortUrl");

-- AddForeignKey
ALTER TABLE "ClickInfo" ADD CONSTRAINT "ClickInfo_shortUrl_fkey" FOREIGN KEY ("shortUrl") REFERENCES "ShortUrl"("shortUrl") ON DELETE RESTRICT ON UPDATE CASCADE;
