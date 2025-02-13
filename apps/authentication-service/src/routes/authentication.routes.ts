import { Router } from "express";
import {
  createUser,
  loginUser,
  logOut,
  refreshAccessToken,
} from "../controller/authenticatio.controller";
import verifyJwt from "../middleware/verifyJwt.middleware";

const router = Router();

router.route("/createUser").post(createUser);
router.route("/loginUser").post(loginUser);
router.route("/logOut").post(verifyJwt, logOut);
router.route("/refreshAccessTokens").get(refreshAccessToken);

export default router;
