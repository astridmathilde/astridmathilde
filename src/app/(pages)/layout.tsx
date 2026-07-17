import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import Link from 'next/link.js';
import localFont from 'next/font/local';

import '../../assets/scss/global.scss'
import styles from '../../assets/scss/layout.module.scss';

import Wrapper from '../wrapper';
import Header from './header';

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

export default function Layout({ children }) {
  return (
    <>
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <body>
    <ThemeProvider>
    <Wrapper>
    
    <Header />
    
    <main id={styles.content}>
    {children}
    </main>
    
    <footer id={styles.footer}>
    <p className={"color-subtle"}>© Astrid Mathilde Boberg</p>
    <nav id={styles.secondaryNav}>
    <ul>
    <li key="resumee"><Link href="/resumee">Resumee</Link></li>
    <li key="colophon"><Link href="/colophon">Colophon</Link></li>
    </ul>
    </nav>
    </footer>
    
    </Wrapper>
    </ThemeProvider>
    </body>
    </html>
    </>
  );
}