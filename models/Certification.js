const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CERTS = require('./certs_types');

const CertificationSchema = new Schema({
  category: {type: String, enum: CERTS},
  imgUrl: {type: String, default: "https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=650&h=250"}
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  });

const Certification = mongoose.model('Certification', CertificationSchema);
module.exports = Certification;