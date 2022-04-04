import type { AppProps } from 'next/app';
import { darkTheme, globalStyles } from '../styles/stiches.config';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme=""
      value={{
        dark: darkTheme.className,
        light: 'light',
      }}
    >
      {globalStyles()}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
