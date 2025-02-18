import { Router } from "express";
import { shortenUrl, redirect, revokeUrl } from "../controller/url.controllers";
import authenticaterUser from "../middleware/authenticaterUser.middleware";

const router = Router();

router.route("/shorten").post(authenticaterUser, shortenUrl);
router.route("/:shortUrl").post(redirect);
router.route("/revoke").delete(authenticaterUser, revokeUrl);

export default router;
