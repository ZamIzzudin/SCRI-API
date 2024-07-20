/** @format */

import express from "express";
import config from "./config.js";
import user from "./user.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to SCRI Rest API",
    createdBy: "Ayam Iyudin",
    version: "0.1",
  });
});

router.use("/config", config);
router.use("/auth", user);

router.get("*", (req, res) => {
  res.send({
    status: 404,
    message: "inappropriate command, please read the contact administrator",
  });
});

export default router;
