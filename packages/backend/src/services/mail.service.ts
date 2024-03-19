import nodemailer from 'nodemailer';

class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASSWORD as string,
        method: 'LOGIN'
      }
    });
  }

  async sendActivateMail(to: string, link: string): Promise<void> {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Please activate your account on ${process.env.API_URL}!`,
      text: '',
      html: `
          <div>
            <h1>For activation please click on this link</h1>
            <a href="${link}">${link}</a>
          </div>
        `
    });
  }

  async sendRestorePassword(to: string, link: string): Promise<void> {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Please restore your password on ${process.env.CLIENT_URL}!`,
      text: '',
      html: `
          <div>
            <h1>For restoring your password please click on this link</h1>
            <a href="${link}">${link}</a>
          </div>
        `
    });
  }
}

export default new MailService();
