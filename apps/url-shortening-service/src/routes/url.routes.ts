import { Router } from "express";
import {
  shortenUrl,
  redirect,
  revokeUrl,
} from "../controller/url.controllers.js";
import authenticaterUser from "../middleware/authenticaterUser.middleware.js";

const router: Router = Router();

router.route("/shorten").post(authenticaterUser, shortenUrl);
router.route("/:shortUrl").post(redirect);
router.route("/revoke").delete(authenticaterUser, revokeUrl);

export default router;
