import axios from "axios";

const BACKEND_URL = "http://localhost:8080";

const signupAndLogin = async (email: string, password = "testPassword") => {
  await axios.post(`${BACKEND_URL}/api/authentication/createUser`, {
    email,
    password,
  });
  const loginResponse = await axios.post(
    `${BACKEND_URL}/api/authentication/loginUser`,
    {
      email,
      password,
    }
  );
  return loginResponse.data.accessToken;
};

const generateShortUrl = async (token: string, longUrl: string) => {
  const shortenUrlResponse = await axios.post(
    `${BACKEND_URL}/api/url/shorten`,
    {
      longUrl,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return shortenUrlResponse.data.shortUrl;
};

describe("Total Clicks", () => {
  // get the total clicks if accesstoken and owner
  // do get the total clicks if no access token
  // do not get the total click is not the owner
  let token = "";
  let shortUrl = "";
  beforeAll(async () => {
    const email = "totalClick@email.com";
    const longUrl = "https://totalClicks.com";
    token = await signupAndLogin(email);
    shortUrl = await generateShortUrl(token, longUrl);
  });

  test("Get total clicks if accessToken and owner", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/totalClicks/${shortUrl}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(response.status).toBe(200);
  });

  test("No total clicks if no access token", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/totalClicks/${shortUrl}`,
      {
        headers: {
          Authorization: `Bearer `,
        },
      }
    );
    expect(response.status).toBe(401);
  });

  test("No total clicks if invalid access token", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/totalClicks/${shortUrl}`,
      {
        headers: {
          Authorization: `Bearer abcd`,
        },
      }
    );
    expect(response.status).toBe(403);
  });

  test("No total clicks if not the owner", async () => {
    const newEmail = "totalClicksNewEmail@email.com";
    const newToken = await signupAndLogin(newEmail);
    const longUrl = "https://longUrlTotalClicks.com";
    const newShortUrl = await generateShortUrl(newToken, longUrl);
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/totalClicks/${newShortUrl}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(response.status).toBe(404);
  });
});

describe("Clicks By Country", () => {
  // get the clicks by country if accesstoken and owner
  // do get the clicks by country if no access token
  // do not get the clicks by country is not the owner
  let token = "";
  let shortUrl = "";
  beforeAll(async () => {
    const email = "clicksByCountry@Email.com";
    const longUrl = "https://clickByCountry.com";
    token = await signupAndLogin(email);
    shortUrl = await generateShortUrl(token, longUrl);
  });

  test("Get click by country if accessToken and owner", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/clickByCountry/${shortUrl}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(response.status).toBe(200);
  });

  test("No clicks by country if no access token", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/clickByCountry/${shortUrl}`,
      {
        headers: {
          Authorization: `Bearer `,
        },
      }
    );
    expect(response.status).toBe(401);
  });

  test("No clicks by country if invalid access token", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/clicksByCountry/${shortUrl}`,
      {
        headers: {
          Authorization: `Bearer abcd`,
        },
      }
    );
    expect(response.status).toBe(403);
  });

  test("No clickByCountry if not the owner", async () => {
    const newEmail = "clickByCountryNewEmail@email.com";
    const newToken = await signupAndLogin(newEmail);
    const longUrl = "https://longUrlclicksByCountry.com";
    const newShortUrl = await generateShortUrl(newToken, longUrl);
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/clicksByCountry/${newShortUrl}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(response.status).toBe(404);
  });
});

describe("Clicks By Referer", () => {
  // get the clicks by referer if accesstoken and owner
  // do get the clicks by referer if no access token
  // do not get the clicks by referer is not the owner
  let token = "";
  let shortUrl = "";
  beforeAll(async () => {
    const email = "clicksByReferer@Email.com";
    const longUrl = "https://clickByReferer.com";
    token = await signupAndLogin(email);
    shortUrl = await generateShortUrl(token, longUrl);
  });

  test("Get click by referer if accessToken and owner", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/clickByReferer/${shortUrl}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(response.status).toBe(200);
  });

  test("No clicks by referer if no access token", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/clickByReferer/${shortUrl}`,
      {
        headers: {
          Authorization: `Bearer `,
        },
      }
    );
    expect(response.status).toBe(401);
  });

  test("No clicks by referer if invalid access token", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/clicksByReferer/${shortUrl}`,
      {
        headers: {
          Authorization: `Bearer abcd`,
        },
      }
    );
    expect(response.status).toBe(403);
  });

  test("No clicks by referer if not the owner", async () => {
    const newEmail = "clickByRefererNewEmail@email.com";
    const newToken = await signupAndLogin(newEmail);
    const longUrl = "https://longUrlclicksByReferer.com";
    const newShortUrl = await generateShortUrl(newToken, longUrl);
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/clicksByReferer/${newShortUrl}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(response.status).toBe(404);
  });
});

describe("Clicks By DeviceType", () => {
  // get the clicks by device type if accesstoken and owner
  // do get the clicks by device type if no access token
  // do not get the clicks by device type is not the owner
  let token = "";
  let shortUrl = "";
  beforeAll(async () => {
    const email = "clicksByDeviceType@Email.com";
    const longUrl = "https://clickByDeviceType.com";
    token = await signupAndLogin(email);
    shortUrl = await generateShortUrl(token, longUrl);
  });

  test("Get click by device type if accessToken and owner", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/clickByDeviceType/${shortUrl}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(response.status).toBe(200);
  });

  test("No clicks by device type if no access token", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/clickByDeviceType/${shortUrl}`,
      {
        headers: {
          Authorization: `Bearer `,
        },
      }
    );
    expect(response.status).toBe(401);
  });

  test("No clicks by device type if invalid access token", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/clicksByDeviceType/${shortUrl}`,
      {
        headers: {
          Authorization: `Bearer abcd`,
        },
      }
    );
    expect(response.status).toBe(403);
  });

  test("No clicks by device type if not the owner", async () => {
    const newEmail = "clickByDeviceTypeNewEmail@email.com";
    const newToken = await signupAndLogin(newEmail);
    const longUrl = "https://longUrlclicksByDeviceType.com";
    const newShortUrl = await generateShortUrl(newToken, longUrl);
    const response = await axios.get(
      `${BACKEND_URL}/api/analytics/clicksByDeviceType/${newShortUrl}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(response.status).toBe(404);
  });
});
