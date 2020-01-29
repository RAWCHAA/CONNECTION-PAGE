const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: { type: String },
  name: String,
  webPage: String,
  number: String,
  subject: String,
  message: String,
  image: { type: mongoose.Schema.Types.ObjectId, ref: "images" }
});

module.exports = mongoose.model("User", UserSchema);
