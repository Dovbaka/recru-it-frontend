import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import MaterialUiTheme from '../theme/index';
import { Provider } from 'react-redux';
import store from '../store/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <MaterialUiTheme>
          <Component {...pageProps} />
        </MaterialUiTheme>
      </Provider>
    </>
  );
}
