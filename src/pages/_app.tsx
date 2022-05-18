import type { AppProps } from 'next/app';
import { darkTheme, globalStyles } from '../styles/stiches.config';
import { ThemeProvider } from 'next-themes';
import { Player } from '../components/Player';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

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
      {globalStyles()}
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Player />
    </ThemeProvider>
  );
}

export default MyApp;
