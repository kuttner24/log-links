const sendLog = (data) => {
  return fetch('https://green-night-6689.fly.dev/send-zoom-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
export default sendLog;
