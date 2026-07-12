import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '../../assets/scss/global.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://astridmathilde.no/studio'),
  title: {
    template: '%s – Studio',
    default: 'Studio'
  },
}

const inter = localFont({
  src: [
    {
      path: '../../assets/fonts/InterVariable.woff2',
      weight: '100 500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/InterVariable-Italic.woff2',
      weight: '100 500',
      style: 'italic',
    }
  ]
});

export default async function Layout({ children }) {
  return (
    <>
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <ThemeProvider>

    <body>
    {children}
    </body>
    
    </ThemeProvider>
    </html>
    </>
  );
}