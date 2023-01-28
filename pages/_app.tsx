import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react';
import { FontContextWrapper } from 'lib/api/context/FontContext';
import { ThemeContextWrapper } from 'lib/api/context/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeContextWrapper>
            <FontContextWrapper>
                <Component {...pageProps} />
            </FontContextWrapper>
        </ThemeContextWrapper>
    );
}

export default MyApp
