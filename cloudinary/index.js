// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    cloud_name: 'dljzfnas0',
    api_key: 845354828433186,
    api_secret: 'AjPAA3pmkB6xSAD-UIGM3h8kuq0'
});

export const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'SocioHub',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

export { cloudinary }

// module.exports = {
//     cloudinary,
//     storage
// }