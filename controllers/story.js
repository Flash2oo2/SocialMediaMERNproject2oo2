import Story from "../models/Story.js";
import User from "../models/User.js";


export const createStory = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newStory = new Story({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath: req.file.path,
        });

        await newStory.save();

        const story = await Story.find();
        res.status(201).json(story);

    }
    catch (err) {
        res.status(409).json({ message: err.message });
    }


}


export const getStories = async (req, res) => {
    try {
        const story = await Story.find().sort({ createdAt: -1 });
        res.status(200).json(story);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const getUserStories = async (req, res) => {

    try {
        const { userId } = req.params;
        const story = await Story.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(story);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }

}