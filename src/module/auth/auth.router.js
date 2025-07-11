const authCtrl = require("./auth.controller");
const authRouter = require("express").Router();
const checkLogIn = require("../../middlewares/auth.middleware");
const uploader = require("../../middlewares/uploader.middleware");

//   uploader().none(), // if content type is mulipart/form-data but does not have a file upload.
//   uploader().single("image"), // if your data has a image as a file type is able to select only 1 image at a time.
//   uploader().array("image"), // if your data has a image as a file type is able to select any numbers of image at a time.
// uploader().fields([
//   { name: "image", maxCount: 1 },
//   { name: "gallery", maxCount: 10 },
// ]), // if your data has a multiple file upload fileds with multiple no of file to be uploaded.

authRouter.post(
  "/register",
  uploader().single("image"), // if your data has a image as a file type is able to select only 1 image at a time.
  authCtrl.registerUser
);

authRouter.get("/me", checkLogIn(), authCtrl.getLoggedInUserProfile);
authRouter.put("/:userId", checkLogIn(), authCtrl.updateUserById);

module.exports = authRouter;
