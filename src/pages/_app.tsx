import type { AppProps } from 'next/app';
import { darkTheme, globalStyles } from '../styles/stiches.config';
import { ThemeProvider } from 'next-themes';
import { Player } from '../components/Player';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        defaultTheme="system"
        value={{
          dark: darkTheme.className,
          light: 'light',
        }}
      >
        {globalStyles()}
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Head>
        <Component {...pageProps} />
        <Footer />
        <Player />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
