import { Router } from "express";
import userAuthentication from "../middlewares/userAuthentication.middleware";
import { getAnalytics } from "../controllers/analytics.controller";

const router = Router();

router.route("/getAnalytics").get(userAuthentication, getAnalytics);

export default router;
