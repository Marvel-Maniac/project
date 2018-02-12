const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuperheroeSchema = new Schema({
  marvel_id: String,
  name_hero: String,
  description: String,
  imgUrl: { type: String, default: "https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=650&h=250" }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  });

const Superheroe = mongoose.model('Superhero', SuperheroeSchema);
module.exports = Superheroe;