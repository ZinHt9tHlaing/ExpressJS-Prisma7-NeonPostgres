import express from "express";
import authRoute from "./auth/authRoute";

const router = express.Router();

router.use("/api/user", authRoute);

export default router;
