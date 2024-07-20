/** @format */

import dotenv from "dotenv";
dotenv.config();

//development
const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  MAX_AGE_ACCESS_TOKEN: process.env.MAX_AGE_ACCESS_TOKEN,
  MAX_AGE_REFRESH_TOKEN: process.env.MAX_AGE_REFRESH_TOKEN,
  REFRESH_TOKEN: process.env.REFRESH_TOKEN,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  CONFIG_ID: process.env.CONFIG_ID,
  CDN_CLOUD_NAME: process.env.CDN_CLOUD_NAME,
  CDN_API_KEY: process.env.CDN_API_KEY,
  CDN_API_SECRET: process.env.CDN_API_SECRET,
};

export default config;
