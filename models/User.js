const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const CERTS = require('./certs_types');

const userSchema = new Schema({
  username: String,
  password: String,
  imgUrl: { type: String, default: "https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=250&h=250" },
  twitterID: String,
  facebookID: String,
  certifications: [{type: String, enum: CERTS}]
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

const User = mongoose.model("User", userSchema);
module.exports = User;