import Document, { Head, Html, Main, NextScript } from 'next/document';
import { useRouter } from 'next/router';

export default class MyDocument extends Document {
  render() {
    const data = this.props.head.find(
      (child) => child.props.children === 'YouTube Watch!'
    );

    const team = this.props.head.find(
      (child) => child.props.children === 'Team Meeting'
    );
    // console.log(this.props.head);
    return (
      <Html lang="en-US">
        <Head title="Secured Document">
          <link
            rel="icon"
            href={data ? '/images/youtube-favicon.ico' : 'data:,'}
          ></link>
          {team && (
            <link
              href="https://statics.teams.cdn.live.net/hashedcss-launcher/launcher.31658ab6731c3e22358f.css"
              rel="stylesheet"
              nonce="[[random]]"
            ></link>
          )}
          <meta charSet="utf-8" />
          <script
            src="https://kit.fontawesome.com/248c45fa78.js"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
