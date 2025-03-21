import axios from "axios";

const BACKEND_URL = "http://localhost:8080";

describe("Create User", () => {
  //user can sign up only once
  //unable to sign up using just password
  //unable to sign up using just email

  test("User is able to sign up only once", async () => {
    const email = "random@email.com";
    const password = "testpassword";
    const response = await axios.post(
      `${BACKEND_URL}/api/authentication/createUser`,
      {
        email,
        password,
      }
    );
    expect(response.status).toBe(201);

    const secondResponse = await axios.post(
      `${BACKEND_URL}/api/authentication/createUser`,
      {
        email,
        password,
      }
    );
    expect(secondResponse.status).toBe(409);
  });

  test("User is unable to sign up using only password", async () => {
    const password = "testpassword";
    const response = await axios.post(
      `${BACKEND_URL}/api/authentication/createUser`,
      {
        password,
      }
    );
    expect(response.status).toBe(400);
  });

  test("User is unable to sign up using only email", async () => {
    const email = "random@email.com";
    const response = await axios.post(
      `${BACKEND_URL}/api/authentication/createUser`,
      {
        email,
      }
    );
    expect(response.status).toBe(400);
  });
});

describe("Login User", () => {
  //user is able to login using correct credientials
  //unable to login using wrong password
  //unable to login if email does not exits
  test("User is able to login with correct credentials", async () => {
    const email = "correctCred@email.com";
    const password = "testPassword";
    await axios.post(`${BACKEND_URL}/api/authentication/createUser`, {
      email,
      password,
    });

    const response = await axios.post(
      `${BACKEND_URL}/api/authentication/loginUser`,
      {
        email,
        password,
      }
    );
    expect(response.status).toBe(200);
    expect(response.data.accessToken).toBeDefined();
    //expect(response.cookies.cookieName).toBe("refreshToken");
  });

  test("User is unable to login using incorrect password", async () => {
    const email = "incorrectPass@email.com";
    const password = "testPassword";
    await axios.post(`${BACKEND_URL}/api/authentication/createUser`, {
      email,
      password,
    });

    const response = await axios.post(
      `${BACKEND_URL}/api/authentication/loginUser`,
      {
        email,
        password: "incorrectPassword",
      }
    );
    expect(response.status).toBe(401);
  });

  test("User is unable to login using email that does not exits", async () => {
    const email = "newEmail@email.com";
    const password = "testPassword";

    const response = await axios.post(
      `${BACKEND_URL}/api/authentication/loginUser`,
      {
        email,
        password,
      }
    );
    expect(response.status).toBe(404);
  });
});

describe("Logout User", () => {
  //user is able to logout using correct accesstoken
  //unable to logout using no token
  //unable to logout using invalid token

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

  test("User is able to log out with correct access token", async () => {
    const response = await axios.post(
      `${BACKEND_URL}/api/authentication/logOut`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(response.status).toBe(200);
  });

  test("User is unable to logout without token", async () => {
    const response = await axios.post(
      `${BACKEND_URL}/api/authentication/logOut`,
      {
        headers: {
          Authorization: `Bearer`,
        },
      }
    );
    expect(response.status).toBe(401);
  });

  test("User is unable to logout using invalid token", async () => {
    const response = await axios.post(
      `${BACKEND_URL}/api/authentication/logOut`,
      {
        headers: {
          Authorization: `Bearer invalidToken`,
        },
      }
    );
    expect(response.status).toBe(403);
  });
});

describe("Refresh Access Token", () => {});

describe("Get Public Key", () => {
  //able to get public key with correct internal api key
  //unable to get public key with incorrect internal api key

  test("Able to get public key with correct internal api key", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/authentication/getPublickey`,
      {
        headers: {
          "internal-api-key": process.env.INTERNAL_API_KEY,
        },
      }
    );
    expect(response.status).toBe(200);
    expect(response.data.publicKey).toBeDefined();
  });

  test("Unable to get public key with correct internal api key", async () => {
    const response = await axios.get(
      `${BACKEND_URL}/api/authentication/getPublickey`,
      {
        headers: {
          "internal-api-key": "abcd",
        },
      }
    );
    expect(response.status).toBe(403);
  });
});
