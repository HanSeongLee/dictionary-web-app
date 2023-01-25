import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react';
import { AppContextWrapper } from 'lib/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AppContextWrapper>
        <Component {...pageProps} />
      </AppContextWrapper>
  );
}

export default MyApp
