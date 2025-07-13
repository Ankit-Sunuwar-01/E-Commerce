const EmailService = require("../../service/mail.service");
// Dependency Inversion
class AuthMail {
  svc;
  constructor() {
    this.svc = new EmailService();
  }

  notifyUserRegistration = async (user) => {
    try {
      const activationLink = `http://localhost:5173/activate/token`;
      const htmlMessage = `
        <div style="background:linear-gradient(135deg,#50C878 0%,#064420 100%);padding:32px;border-radius:12px;font-family:'Segoe UI',Arial,sans-serif;color:#fff;box-shadow:0 4px 16px rgba(80,200,120,0.15);">
          <h1 style="color:#fff;font-size:2em;margin-bottom:8px;text-shadow:1px 2px 8px #064420;">Welcome to E-Commerce, ${user.name}!</h1>
          <p style="font-size:1.1em;color:#F7F7F7;">
        Thank you for registering with us. To complete your account setup and start exploring our platform, please activate your account using the link below.
          </p>
          <div style="margin:24px 0;">
        <a href="${activationLink}" style="display:inline-block;background:linear-gradient(90deg,#FFD700,#50C878);color:#064420;padding:14px 32px;border-radius:6px;text-decoration:none;font-size:1.1em;font-weight:bold;box-shadow:0 2px 8px #50C878;">
          Activate Your Account
        </a>
          </div>
          <p style="font-size:1em;color:#F7F7F7;">
        If you did not sign up for this account, please disregard this email.
          </p>
          <hr style="border:1px solid #FFD700;margin:32px 0 16px 0;">
          <small style="color:#F7F7F7;">
        For assistance or questions, contact our support team.<br>
        We appreciate your trust in E-Commerce.
          </small>
        </div>
      `;
      return await this.svc.sendEmail({
        to: user.email,
        sub: "Activate your account - Welcome to E-Commerce!",
        message: htmlMessage,
      });
    } catch (exception) {
      throw exception;
    }
  };
}
const authMailSvc = new AuthMail();
module.exports = authMailSvc;
