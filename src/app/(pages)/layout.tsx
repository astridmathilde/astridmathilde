import { ThemeProvider } from 'next-themes';
import Link from 'next/link.js';
import localFont from 'next/font/local';

import '../../assets/scss/global.scss';
import '../../assets/scss/brightness.scss';

import styles from '../../assets/scss/layout.module.scss';

import Wrapper from '../wrapper';
import Header from './header';

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

//export const siteTitle = 'Astrid Mathilde Boberg';


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
    <p>© Astrid Mathilde Boberg</p>
    <nav id={styles.secondaryNav}>
    <ul>
    <li key="resumee"><Link href="/resumee">Resumee</Link></li>
    <li key="colophon"><Link href="/colophon">Colophon</Link></li>
    <li key="contact"><Link href="/contact">Contact</Link></li>
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