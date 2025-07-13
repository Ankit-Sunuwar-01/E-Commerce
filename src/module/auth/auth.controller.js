const fileUploadSvc = require("../../service/fileupload.service");

class AuthController {
  registerUser = async (req, res, next) => {
    try {
      const data = req.body;
      const file = await fileUploadSvc.uploadFile(req.file.path, "/users");
      //const files = req.files //array

      //db storge
      res.json({
        data: { file, data },
        message: "Regiser Success",
        status: "OK",
        options: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  getLoggedInUserProfile = (req, res, next) => {
    // check Login
    try {
      res.json({
        data: {},
        message: "Your profile",
        status: "OK",
        options: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  updateUserById = (req, res, next) => {
    //check Login
    // permission
    try {
    } catch (exception) {
      next(exception);
    }
  };
}

const authCtrl = new AuthController();
module.exports = authCtrl;
