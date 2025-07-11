class AuthController {
  registerUser = (req, res, next) => {
    try {
      const data = req.body;
      const file = req.file; // single
      //const files = req.files //array
      console.log("BODY:", req.body);
      console.log("FILE:", req.file);

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
