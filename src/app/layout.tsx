import { ThemeProvider } from "next-themes";
import type { Metadata } from 'next';
import Script from "next/script";
import localFont from "next/font/local";
import Wrapper from "./wrapper";

export const metadata: Metadata = {
  metadataBase: new URL('https://astridmathilde.no'),
  title: {
    template: '%s – Astrid Mathilde Boberg',
    default: 'Astrid Mathilde Boberg – Designer & developer'
  },
}

const inter = localFont({
  src: [
    {
      path: '../assets/fonts/InterVariable.woff2',
      weight: '100 500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/InterVariable-Italic.woff2',
      weight: '100 500',
      style: 'italic',
    }
  ]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <Script defer src="https://cloud.umami.is/script.js" data-website-id="20a9b5e4-0833-4041-a73b-b6d93474b420" />
    <body>
    <ThemeProvider>
    <Wrapper>
    {children}
    </Wrapper>
    </ThemeProvider>
    </body>
    </html>
  );
}