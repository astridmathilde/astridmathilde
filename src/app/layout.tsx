import { ThemeProvider } from "next-themes";
import type { Metadata } from 'next';
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