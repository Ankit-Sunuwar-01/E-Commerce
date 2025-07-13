const cloudinary = require("cloudinary").v2;
const { CloudinaryConfig } = require("../config/config");
const { deleteFile } = require("../utilities/helpers");

class CloudinaryService {
  //config
  constructor() {
    // setup your cloudinary
    cloudinary.config({
      cloud_name: CloudinaryConfig.cloudName,
      api_key: CloudinaryConfig.apiKey,
      api_secret: CloudinaryConfig.apiSecret,
    });
  }
  // fileupload
  fileupload = async (filepath, dir = "/") => {
    try {
      // public id is a unique identifier for the uploaded file on Cloudinary.|| secure_url gives the direct HTTPS URL to access the uploaded file on the internet
      const { public_id, secure_url } = await cloudinary.uploader.upload(
        filepath,
        {
          unique_filename: true,
          folder: "/e-commerce" + dir,
        }
      );

      const response = cloudinary.url(public_id, {
        transformation: [
          {
            responsive: true,
            crop: "scale",
          },
        ],
      });

      //
      await deleteFile(filepath);

      // return | display in the postman output.
      return {
        publicId: public_id,
        url: secure_url,
        thumbUrl: response, // A transformed version(like a responsive imgage)
      };
    } catch (exception) {
      console.error("error:", exception);
      throw {
        code: 500,
        message: "File upload error",
        status: "CLOUDINARY_ERR",
      };
    }
  };
}

module.exports = CloudinaryService;
