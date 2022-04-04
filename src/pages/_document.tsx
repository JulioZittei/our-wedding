import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles/stiches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Poppins:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body
          style={{
            position: 'relative',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
