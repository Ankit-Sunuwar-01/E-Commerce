const nodemailer = require("nodemailer");
const { SMTPConfig } = require("../config/config");

class EmailService {
  #transport;
  constructor() {
    try {
      this.#transport = nodemailer.createTransport({
        host: SMTPConfig.host,
        port: SMTPConfig.port,
        service: SMTPConfig.provider,
        auth: {
          user: SMTPConfig.user,
          pass: SMTPConfig.password,
        },
      });
      console.log("******* SMTP server connected sucessfully *******");
    } catch (exception) {
      console.error("******* Error Connecting SMTP server *******");
      throw {
        code: 500,
        message: "SMTP server connection Error",
        status: "SMTP_CONNECTION_ERR",
      };
    }
  }

  sendEmail = async ({
    to,
    sub,
    message,
    attachment = null,
    bcc = null,
    cc = null,
  }) => {
    try {
      let emailBody = {
        to: to,
        from: SMTPConfig.from,
        subject: sub,
        html: message,
      };
      if (cc) {
        emailBody["cc"] = cc;
      }
      if (bcc) {
        emailBody["bcc"] = bcc;
      }

      if (attachment) {
        emailBody["attachment"] = attachment;
      }

      return await this.#transport.sendMail(emailBody);
    } catch (exception) {
      throw {};
    }
  };
}

module.exports = EmailService;
