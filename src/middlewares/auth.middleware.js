//Routing middleware (route)
const checkLogIn = () => {
  //respond
  return (req, res, next) => {
    try {
      //TODO: develop
      console.log("I am check Log In");
      throw {
        code: 401,
        message: "Login First",
        status: "UNAUTHORIZED",
      };
    } catch (exception) {
      next(exception);
    }
  };
};

module.exports = checkLogIn;
