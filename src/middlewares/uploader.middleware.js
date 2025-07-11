const fs = require("fs"); //file system(fs) help to create files, read files, write files, checking if a file or directory exists
const multer = require("multer");

const uploader = (type = "image") => {
  // temp storage in this server
  const mystorage = multer.diskStorage({
    destination: (req, file, cb) => {
      let dirPath = "./public/uploads";
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true }); // recursive helps to create the multi-level folders.
      }
      cb(null, dirPath); // null => pass if no error | dirPath: Create your folder.
    },
    filename: (req, file, cb) => {
      const fileName = Date.now() + "-" + file.originalname;
      cb(null, fileName); // null => pass if no error | filename: save your filename (eg: 179039234.jpg)
    },
  });

  let allowedExts = ["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg", "jfif"];
  let maxfileSize = 3 * 1024 * 1024;

  if (type === "doc") {
    allowedExts = ["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg", "jfif"];
    maxfileSize = 5 * 1024 * 1024;
  }

  const validateFileType = (req, file, cb) => {
    const fileExt = file.originalname.split(".").pop();
    if (allowedExts.includes(fileExt.toLowerCase())) {
      cb(null, true); // null => pass if no error | true: Accept the file (allow the upload).
    } else {
      cb({
        code: 422,
        message: "file format not supported...",
        status: "UNSUPPORTED_FILE_FORMAT_ERR",
      });
    }
  };

  return multer({
    storage: mystorage,
    fileFilter: validateFileType,
    limits: {
      fileSize: maxfileSize,
    },
  });
};

module.exports = uploader;
