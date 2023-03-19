import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
    {
        authorId: {
            type: String,
        },
        authorName: {
            type: String
        },
        authorPicturePath: String,
        body: {
            type: String,
            required: true
        }


    }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;