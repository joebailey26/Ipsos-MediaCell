import { Html, Head, Main, NextScript } from 'next/document';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Document() {
  return (
    <Html lang="en-GB">
      <Head />
      <body className={inter.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}