import axios from "axios";

const BACKEND_URL = "http://localhost:8080";

describe("Shorten Url", () => {
  //able to shorten url with valid url and accesstoken
  //unalbe to shorten url with invalid url
  //unble to shorten url with invalid or no access token
  let token = "";

  beforeAll(async () => {
    const email = "logOut@email.com";
    const password = "testPassword";
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
    token = loginResponse.data.accessToken;
  });

  test("Able to shorten url with valid url and accesstoken", async () => {
    const validLongUrl = "https://validUrl.com";
    const response = await axios.post(
      `${BACKEND_URL}/api/url/shorten`,
      {
        longUrl: validLongUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(response.status).toBe(201);
  });

  test("Unable to shorten url with invalid url", async () => {
    const invalidLongUrl = "invalidUrl";
    const response = await axios.post(
      `${BACKEND_URL}/api/url/shorten`,
      {
        longUrl: invalidLongUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(response.status).toBe(400);
  });

  test("Unable to shorten url with invalid accesstoken", async () => {
    const validLongUrl = "https://validUrl.com";
    const response = await axios.post(
      `${BACKEND_URL}/api/url/shorten`,
      {
        longUrl: validLongUrl,
      },
      {
        headers: {
          Authorization: `Bearer abcd`,
        },
      }
    );
    expect(response.status).toBe(403);
  });

  test("Unable to shorten url with no accesstoken", async () => {
    const validLongUrl = "https://validUrl.com";
    const response = await axios.post(
      `${BACKEND_URL}/api/url/shorten`,
      {
        longUrl: validLongUrl,
      },
      {
        headers: {
          Authorization: `Bearer `,
        },
      }
    );
    expect(response.status).toBe(403);
  });
});

describe("Redirect to shortUrl", () => {
  //redirect when there is a corresponding long url
  //does not redirect when there is not corresponding redirect
  let token = "";
  const signupAndLogin = async () => {
    const email = "loginForRedirect@email.com";
    const password = "testPassword";
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
    token = loginResponse.data.accessToken;
  };

  test("Redirects when there is a corresponding long url", async () => {
    await signupAndLogin();
    const longUrl = "https://longUrl.com";
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
    const shortUrl = shortenUrlResponse.shortUrl;

    const response = await axios.get(`${BACKEND_URL}/api/url/${shortUrl}`, {
      maxRedirects: 0,
    });
    expect(response.status).toBe(302);
    expect(response.headers.location).toBe(longUrl);
  });

  test("Does not redirect if no corresponding long url", async () => {
    const response = await axios.get(`${BACKEND_URL}/api/url/randomShortUrl`, {
      maxRedirects: 0,
    });
    expect(response.status).toBe(404);
  });
});

describe("Revoke short url", () => {
  //revoke short url with valid accesstoken
  //do not revoke short url if it does not exist
  //do not revoke short url if no/invalid accesstoken
  let token = "";
  beforeAll(async () => {
    const email = "loginForRevoke@email.com";
    const password = "testPassword";
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
    token = loginResponse.data.accessToken;
  });

  const generateShortUrl = async () => {
    const longUrl = "https://longUrl.com";
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
    return shortenUrlResponse.shortUrl;
  };

  test("Revoke short url with valid accessToken", async () => {
    const shortUrlToDelete = await generateShortUrl();
    const response = await axios.delete(
      `${BACKEND_URL}/api/url/revoke`,
      {
        shortUrlToDelete,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expects(response.status).toBe(200);
  });

  test("Do not revoke short url if it does not exist", async () => {
    const shortUrlToDelete = await generateShortUrl();
    const response = await axios.delete(
      `${BACKEND_URL}/api/url/revoke`,
      {
        shortUrlToDelete,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expects(response.status).toBe(404);
  });

  test("Do not revoke if no accessToken", async () => {
    const shortUrlToDelete = await generateShortUrl();
    const response = await axios.delete(
      `${BACKEND_URL}/api/url/revoke`,
      {
        shortUrlToDelete,
      },
      {
        headers: {
          Authorization: `Bearer `,
        },
      }
    );
    expects(response.status).toBe(401);
  });

  test("Do not revoke if invalid accessToken", async () => {
    const shortUrlToDelete = await generateShortUrl();
    const response = await axios.delete(
      `${BACKEND_URL}/api/url/revoke`,
      {
        shortUrlToDelete,
      },
      {
        headers: {
          Authorization: `Bearer abcd`,
        },
      }
    );
    expects(response.status).toBe(403);
  });
});
