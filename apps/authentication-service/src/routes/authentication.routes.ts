import { Router } from "express";
import {
  createUser,
  loginUser,
  logOut,
  refreshAccessToken,
  getPublicKey,
} from "../controller/authenticatio.controller";
import verifyJwt from "../middleware/verifyJwt.middleware";

const router = Router();

router.route("/createUser").post(createUser);
router.route("/loginUser").post(loginUser);
router.route("/logOut").post(verifyJwt, logOut);
router.route("/refreshAccessTokens").get(refreshAccessToken);
router.route("/getPublickey").get(getPublicKey);

export default router;
