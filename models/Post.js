const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CERTS = require('./certs_types');

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: {type: String, enum: CERTS},
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  imgUrl: { type: String, default: "https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=650&h=250" }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  });

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;