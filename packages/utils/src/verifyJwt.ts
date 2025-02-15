import jwt from "jsonwebtoken";

const getPublicKey = async () => {
  try {
    const response = await fetch(
      "http://localhost:8083/api/authentication/getPublicKey"
    );
    const data = await response.json();
    return data.publicKey;
  } catch (error) {
    console.error("error fetching public key");
    throw new Error("Public key fetch failed");
  }
};

const verifyJwt = async (accessToken: string) => {
  try {
    const publicKey = await getPublicKey();
    var decoded = jwt.verify(
      accessToken,
      publicKey as string
    ) as jwt.JwtPayload;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
  return decoded;
};

export default verifyJwt;
