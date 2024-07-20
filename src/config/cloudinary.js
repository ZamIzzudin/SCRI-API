/** @format */

import { v2 as cloudinary } from "cloudinary";
import config from "./config.js";

const { CDN_CLOUD_NAME, CDN_API_KEY, CDN_API_SECRET } = config;

cloudinary.config({
  cloud_name: CDN_CLOUD_NAME,
  api_key: CDN_API_KEY,
  api_secret: CDN_API_SECRET,
});

export default cloudinary;
