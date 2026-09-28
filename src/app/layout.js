
import localFont from "next/font/local";
import "./globals.css";
import Head from 'next/head';
import Template from "@/component/Template/template";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Spicce Village",
  description: "Spicce Village",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/lenis@1.1.16/dist/lenis.css"
          />
        </Head>
        <Template children={children} />
      </body>
    </html>
  );
}
