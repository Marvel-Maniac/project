const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const CERTS = require('./certs_types');

const quizSchema = new Schema({
  question: String,
  options: [{type: String}],
  imgUrl: { type: String, default: "https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=250&h=250" },
  correctOption: Number,
  category: [{type: String, enum: CERTS}]
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;