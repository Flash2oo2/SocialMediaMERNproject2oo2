import mongoose from "mongoose";

const storySchema = mongoose.Schema({
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

},
    { timestamps: true }
);

const Story = mongoose.model("Story", storySchema);
export default Story;