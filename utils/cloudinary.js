import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "dhojflhbx",
  api_key: "556924398437274",
  api_secret: "KsL8pVFug5wcBN92AqPZF_8SaY8",
});

const cloudinaryUploadImage = async (fileToUploads) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(fileToUploads, (err, result) => {
      resolve(
        {
          url: result.secure_url,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};

export default cloudinaryUploadImage;
