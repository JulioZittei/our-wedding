import type { AppProps } from 'next/app';
import { darkTheme, globalStyles } from '../styles/stiches.config';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme.className,
        light: 'light',
      }}
    >
      <Head>
        <link rel="preconnect" href="//polyfill.io" />
        <link rel="dns-prefetch" href="//polyfill.io" />
        <script defer src="https://polyfill.io/v3/polyfill.min.js?features=es5,es6,es7&amp;flags=gated" />
      </Head>
      {globalStyles()}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
