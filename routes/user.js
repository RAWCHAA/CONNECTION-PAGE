const express = require("express");
const router = express.Router();
const User = require("../models/User");
const mailgun = require("mailgun-js");

router.post("/", (req, res) => {
  const user = req.body;
  const API_KEY = process.env.MAILGUN_API_KEY || "test";
  const DOMAIN = process.env.MAILGUN_DOMAIN || "test";

  const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });
  const data = {
    from: user.email,
    to: "william.butler0423@gmail.com",
    subject: user.subject,
    text: user.message
  };
  mg.messages().send(data, async function(error, body) {
    if (error) throw error;
    const data = await User.create(user);
    res.json(data);
  });
});

router.get("/", async (req, res) => {
  const data = await User.find().populate("image");
  res.json(data);
});

module.exports = router;
