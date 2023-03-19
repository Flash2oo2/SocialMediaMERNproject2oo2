import mongoose from "mongoose";
const Schema = mongoose.Schema();



const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: [{
      authorId: {
        type: String,
      },
      authorName: {
        type: String
      },
      authorPicturePath: String,
      body: {
        type: String,
      },
    }
    ]
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
