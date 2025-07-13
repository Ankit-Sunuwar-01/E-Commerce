const CloudinaryService = require("./cloudinary.service");

class FileUploadService {
  uploadSvc; //variable
  //dependency injection
  constructor(cloudinarySvc) {
    this.uploadSvc = cloudinarySvc;
  }
  //cloudinary fileUpload
  async uploadFile(filepath, dir = "/") {
    try {
      return await this.uploadSvc.fileupload(filepath, dir); //This line calls the fileupload method of the CloudinaryService instance stored in uploadSvc, passing the filepath and dir parameters. (line no:16)
    } catch (exception) {
      throw exception;
    }
  }
}

const fileUploadSvc = new FileUploadService(new CloudinaryService());

module.exports = fileUploadSvc;
