const fs = require("fs");

const deleteFile = async (filepath) => {
  if (fs.existsSync(filepath)) {
    return fs.unlinkSync(filepath);
  }
  return false;
};

module.exports = { deleteFile };
