// import { v2 as cloudinary } from "cloudinary";
// import Image from "../models/imageModule.js";

// const uploadImage = async (req, res, next) => {
//   try {
//     const file = req.file;

//     // Upload image to Cloudinary
//     const result = await cloudinary.uploader.upload(file.path);

//     // Save image metadata to database
//     const image = new Image({
//       name: result.original_filename,
//       url: result.secure_url,
//     });
//     await image.save();

//     // Return the uploaded image metadata
//     res.status(201).json(image);
//   } catch (error) {
//     next(error);
//   }
// };

// export default { uploadImage };
