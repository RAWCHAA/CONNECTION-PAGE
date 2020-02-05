const express = require("express");
const router = express.Router();
const User = require("../models/User");
const mailgun = require("mailgun-js");

router.post("/", async (req, res) => {
  const user = req.body;
  const API_KEY = process.env.MAILGUN_API_KEY || "test";
  const DOMAIN = process.env.MAILGUN_DOMAIN || "test";
  const mg = mailgun({ api_key: API_KEY, domain: DOMAIN });
  const data = {
    from: user.email,
    to: "william.butler0423@gmail.com",
    subject: user.subject,
    text: user.message
  };
  mg.messages().send(data, function(error, body) {
    if (error) throw error;
    console.log(body);
    const data = await User.create(user);
    res.json(data);
  });
});

router.get("/", async (req, res) => {
  const data = await User.find().populate("image");
  res.json(data);
});

module.exports = router;
