/** @format */

import controller from "../controller/config.js";
import express from "express";

const config = express.Router();

//GET
config.get("/", controller.get_config);
config.get("/announcement", controller.get_announcements);
config.get("/announcement/:id", controller.get_one_announcement);
config.get("/publication", controller.get_publications);
config.get("/publication/:id", controller.get_one_publication);
config.get("/journal", controller.get_journals);
config.get("/journal/:id", controller.get_one_journal);

//POST
config.post("/announcement", controller.add_announcement);
config.post("/publication", controller.add_publication);
config.post("/journal", controller.add_journal);

//PUT
config.put("/announcement/:id", controller.edit_announcement);
config.put("/publication/:id", controller.edit_publication);
config.put("/journal/:id", controller.edit_journal);
config.put("/info", controller.edit_information);

//DELETE
config.delete("/announcement/:id", controller.delete_announcement);
config.delete("/publication/:id", controller.delete_publication);
config.delete("/journal/:id", controller.delete_journal);

export default config;
