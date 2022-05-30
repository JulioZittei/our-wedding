import type { AppProps } from 'next/app';
import { darkTheme, globalStyles } from '../styles/stiches.config';
import { ThemeProvider } from 'next-themes';
import { Player } from '../components/Player';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SessionProvider } from 'next-auth/react';
import { Optout } from '../components/Optout';

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
        <Header />
        <Component {...pageProps} />
        <Optout />
        <Footer />
        <Player />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
