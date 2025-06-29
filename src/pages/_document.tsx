import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Portfolio of Anurag Kumar Verma, a Frontend Developer specializing in Angular, React, Next.js, Flutter, Ionic, JavaScript, TypeScript, and more." />
        <meta name="keywords" content="Anurag Kumar Verma, anurag dev, Frontend Developer, Angular, JavaScript, TypeScript, Portfolio, Anurag spundan" />
        <meta name="author" content="Anurag Kumar Verma" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
// This file is used to customize the HTML document structure in Next.js.