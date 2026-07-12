import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import Link from 'next/link.js';
import localFont from 'next/font/local';

import '../../assets/scss/global.scss';
import styles from '../../assets/scss/layout.module.scss';

import Wrapper from "../wrapper";

export const metadata: Metadata = {
  metadataBase: new URL('https://astridmathilde.no/work'),
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
})

export default async function Layout({ children }) {
  return (
    <>
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <body>
    <ThemeProvider>
    <Wrapper>
    
    {children}
    
    <footer id={styles.footerEntry}>
    <Link href="/work"><span aria-hidden="true">{"<-"} </span>Back to all work</Link>
    <p>© Astrid Mathilde Boberg</p>
    </footer>
    
    </Wrapper>
    </ThemeProvider>
    </body>
    </html>
    </>
  );
}