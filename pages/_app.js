import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import MaterialUiTheme from '../theme/index';
import { Provider } from 'react-redux';
import store from '../store/store';
import { SnackbarProvider } from 'notistack';
import { actions } from '../store/auth/actions';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  React.useEffect(() => {
    //Get token form localStorage and initialize app
    const localData = localStorage.getItem('userInfo');
    if (localData) {
      store.dispatch(actions.setAuth(JSON.parse(localData)));
    }
    store.dispatch(actions.initializeApp());
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <SnackbarProvider maxSnack={1}>
          <MaterialUiTheme>
            <Component {...pageProps} />
          </MaterialUiTheme>
        </SnackbarProvider>
      </Provider>
    </CacheProvider>
  );
}
