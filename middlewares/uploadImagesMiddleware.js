import multer from "multer";
import sharp from "sharp";
import path from "path";

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cd(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * le9);
    cd(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
  },
});

const multerFilter = function (req, file, cd) {
  if (file.mimeType.startsWith("image")) {
    cd(null, true);
  } else {
    cd(
      {
        message: "unsupported image formate",
      },
      false
    );
  }
};

const uploadImage = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fieldSize: 2000000 },
});

const profileImageResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jped")
        .jpeg({ quality: 90 })
        .toFile(`public/images/profile/${file.filename}`);
    })
  );
  next();
};

export { uploadImage, profileImageResize };
