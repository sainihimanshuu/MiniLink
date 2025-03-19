import { Router } from "express";
import userAuthentication from "../middlewares/userAuthentication.middleware.js";
import {
  totalClicks,
  clicksByCountry,
  clicksByReferer,
  clicksByDeviceType,
} from "../controllers/analytics.controller.js";

const router: Router = Router();

router.use(userAuthentication);
router.route("/totalClicks/:shortUrl").get(totalClicks);
router.route("/clicksByContry/:shortUrl/").get(clicksByCountry);
router.route("/clicksByReferer/:shortUrl").get(clicksByReferer);
router.route("/clicksByDeviceType/:shortUrl").get(clicksByDeviceType);

export default router;
