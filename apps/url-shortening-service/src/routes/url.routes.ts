import { Router } from "express";
import { shortenUrl, redirect, revokeUrl } from "../controller/url.controllers";
const router = Router();

router.route("/shorten").post(shortenUrl);
router.route("/redirect").post(redirect);
router.route("/revoke").delete(revokeUrl);

export default router;
