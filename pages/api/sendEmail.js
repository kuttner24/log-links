const https = require('https');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  // not needed in NextJS v12+
  const { body } = req;

  fetch('https://email-sender-r8vb.onrender.com/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    agent,
  });

  res.json({ message: 'successful' });
}
