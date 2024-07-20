/** @format */

import mongoose from "mongoose";

const config_scheme = new mongoose.Schema({
  journals: {
    type: Array,
    default: [],
  },
  publications: {
    type: Array,
    default: [],
  },
  announcements: {
    type: Array,
    default: [],
  },
  description: String,
  address: String,
  contact: String,
  logo: Object,
});

const Config = mongoose.model("configs", config_scheme);

export default Config;
