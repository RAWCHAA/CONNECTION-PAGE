const express = require("express");
const router = express.Router();
const User = require("./models/User");

router.post("/", async (req, res) => {
  const user = req.body;
  const data = await User.create(user);
  res.json(data);
});

router.get("/", async (req, res) => {
  const data = await User.find().populate("image");
  res.json(data);
});

module.exports = router;
