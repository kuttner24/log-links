import Head from 'next/head';
import { useRouter } from 'next/router';

import '@styles/globals.css';
import '@styles/style.css';
import 'antd-notifications-messages/lib/styles/style.css';
import { useMemo } from 'react';

function Application({ Component, pageProps }) {
  const router = useRouter();
  const title = useMemo(() => {
    if (
      router.pathname === '/[agent]/product' ||
      router.pathname === '/[agent]/real-estate'
    ) {
      return 'YouTube Watch!';
    }

    if (router.pathname === '/[agent]/team-meeting') {
      return 'Team Meeting'
    }

    return 'Welcome!';
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="noindex"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
