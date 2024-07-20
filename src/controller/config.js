/** @format */

import Config from "../model/config.js";
import config from "../config/config.js";
import { upload } from "../libs/fileHandler.js";
import { uid } from "uid";

const { CONFIG_ID } = config;

async function get_config(req, res) {
  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    return res.status(200).json({
      data,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function get_announcements(req, res) {
  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    return res.status(200).json({
      data: data.announcements,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function get_one_announcement(req, res) {
  const { id } = req.params;
  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    const announcement = data.announcements.filter((each) => each.id === id);

    return res.status(200).json({
      data: announcement[0],
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function add_announcement(req, res) {
  const { title, content, keyword } = req.body;

  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    let payload = {
      id: uid(),
      title,
      content,
      keyword,
      date: Date.now(),
      thumbnail: "gambar4.jpg",
    };

    if (req.files) {
      // Upload New Thumbnail
      const { file } = req.files;
      const { url_picture, url_public } = await upload(file);

      payload["thumbnail"] = {
        public_id: url_public,
        url: url_picture,
      };
    }

    const new_announcement = [...data.announcements, payload];

    const new_data = {
      ...data._doc,
      announcements: new_announcement,
    };

    await Config.updateOne({ id: CONFIG_ID }, new_data);

    return res.status(200).json({
      data: new_data,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function edit_announcement(req, res) {
  const { id } = req.params;
  const { title, content, keyword } = req.body;

  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    let payload = {
      id: uid(),
      title,
      content,
      keyword,
      date: Date.now(),
      thumbnail: "gambar4.jpg",
    };

    if (req.files) {
      // Upload New Thumbnail
      const { file } = req.files;
      const { url_picture, url_public } = await upload(file);

      payload["thumbnail"] = {
        public_id: url_public,
        url: url_picture,
      };
    }

    const except_announcement = data.announcements.filter(
      (each) => each.id !== id
    );

    const new_announcement = [...except_announcement, payload];

    const new_data = {
      ...data._doc,
      announcements: new_announcement,
    };

    await Config.updateOne({ id: CONFIG_ID }, new_data);

    return res.status(200).json({
      data: new_data,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function delete_announcement(req, res) {
  const { id } = req.params;

  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    const except_announcement = data.announcements.filter(
      (each) => each.id !== id
    );

    const new_data = {
      ...data._doc,
      announcements: except_announcement,
    };

    await Config.updateOne({ id: CONFIG_ID }, new_data);

    return res.status(200).json({
      data: new_data,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function get_publications(req, res) {
  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    return res.status(200).json({
      data: data.publications,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function get_one_publication(req, res) {
  const { id } = req.params;
  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    const publication = data.publications.filter((each) => each.id === id);

    return res.status(200).json({
      data: publication[0],
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function add_publication(req, res) {
  const { name, location, description } = req.body;

  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    let payload = {
      id: uid(),
      name,
      location,
      description,
      date: Date.now(),
      thumbnail: "gambar2.jpg",
    };

    if (req.files) {
      // Upload New Thumbnail
      const { file } = req.files;
      const { url_picture, url_public } = await upload(file);

      payload["thumbnail"] = {
        public_id: url_public,
        url: url_picture,
      };
    }

    const new_publication = [...data.publications, payload];

    const new_data = {
      ...data._doc,
      publications: new_publication,
    };

    await Config.updateOne({ id: CONFIG_ID }, new_data);

    return res.status(200).json({
      data: new_data,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function edit_publication(req, res) {
  const { id } = req.params;
  const { name, location, description } = req.body;

  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    let payload = {
      id: uid(),
      name,
      location,
      description,
      date: Date.now(),
      thumbnail: "gambar2.jpg",
    };

    if (req.files) {
      // Upload New Thumbnail
      const { file } = req.files;
      const { url_picture, url_public } = await upload(file);

      payload["thumbnail"] = {
        public_id: url_public,
        url: url_picture,
      };
    }

    const except_publication = data.publications.filter(
      (each) => each.id !== id
    );

    const new_publication = [...except_publication, payload];

    const new_data = {
      ...data._doc,
      publications: new_publication,
    };

    await Config.updateOne({ id: CONFIG_ID }, new_data);

    return res.status(200).json({
      data: new_data,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function delete_publication(req, res) {
  const { id } = req.params;

  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    const except_publication = data.publications.filter(
      (each) => each.id !== id
    );

    const new_data = {
      ...data._doc,
      publications: except_publication,
    };

    await Config.updateOne({ id: CONFIG_ID }, new_data);

    return res.status(200).json({
      data: new_data,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function get_journals(req, res) {
  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    return res.status(200).json({
      data: data.journals,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function get_one_journal(req, res) {
  const { id } = req.params;
  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    const journal = data.journals.filter((each) => each.id === id);

    return res.status(200).json({
      data: journal[0],
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function add_journal(req, res) {
  const { name, scope, description, redirect } = req.body;

  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    let payload = {
      id: uid(),
      name,
      scope,
      description,
      redirect,
      thumbnail: "cover.jpg",
    };

    if (req.files) {
      // Upload New Thumbnail
      const { file } = req.files;
      const { url_picture, url_public } = await upload(file);

      payload["thumbnail"] = {
        public_id: url_public,
        url: url_picture,
      };
    }

    const new_journal = [...data.journals, payload];

    const new_data = {
      ...data._doc,
      journals: new_journal,
    };

    await Config.updateOne({ id: CONFIG_ID }, new_data);

    return res.status(200).json({
      data: new_data,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function edit_journal(req, res) {
  const { id } = req.params;
  const { name, scope, description, redirect } = req.body;

  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    let payload = {
      id: uid(),
      name,
      scope,
      description,
      redirect,
      thumbnail: "cover.jpg",
    };

    if (req.files) {
      // Upload New Thumbnail
      const { file } = req.files;
      const { url_picture, url_public } = await upload(file);

      payload["thumbnail"] = {
        public_id: url_public,
        url: url_picture,
      };
    }

    const except_journal = data.journals.filter((each) => each.id !== id);

    const new_journal = [...except_journal, payload];

    const new_data = {
      ...data._doc,
      journals: new_journal,
    };

    await Config.updateOne({ id: CONFIG_ID }, new_data);

    return res.status(200).json({
      data: new_data,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function delete_journal(req, res) {
  const { id } = req.params;

  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    const except_journals = data.journals.filter((each) => each.id !== id);

    const new_data = {
      ...data._doc,
      journals: except_journals,
    };

    await Config.updateOne({ id: CONFIG_ID }, new_data);

    return res.status(200).json({
      data: new_data,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

async function edit_information(req, res) {
  const { address, contact, description } = req.body;

  try {
    const data = await Config.findOne({ id: CONFIG_ID });

    let new_data = {
      ...data._doc,
      address,
      contact,
      description,
      logo: "logo.png",
    };

    if (req.files) {
      // Upload New Thumbnail
      const { file } = req.files;
      const { url_picture, url_public } = await upload(file);

      new_data["logo"] = {
        public_id: url_public,
        url: url_picture,
      };
    }

    await Config.updateOne({ id: CONFIG_ID }, new_data);

    return res.status(200).json({
      data: new_data,
    });
  } catch (ERR) {
    return res.status(404).json({
      status: "failed",
      message: ERR.message,
    });
  }
}

const controller = {
  get_config,
  get_announcements,
  get_one_announcement,
  add_announcement,
  edit_announcement,
  delete_announcement,
  get_publications,
  add_publication,
  edit_publication,
  delete_publication,
  get_one_publication,
  get_journals,
  get_one_journal,
  add_journal,
  edit_journal,
  delete_journal,
  edit_information,
};

export default controller;
