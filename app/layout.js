import { ThemeProvider } from 'next-themes';
import Link from 'next/link.js';
import localFont from 'next/font/local';

import './assets/scss/global.scss';
import './assets/scss/brightness.scss';

import styles from './assets/scss/layout.module.scss';
import utils from "./assets/scss/utils.module.scss"

import Wrapper from './wrapper.js';
import PrimaryNav from './components/navigation/index.js';

const inter = localFont({
  src: [
    {
      path: './assets/fonts/InterVariable.woff2',
      weight: '100 500',
      style: 'normal',
    },
    {
      path: './assets/fonts/InterVariable-Italic.woff2',
      weight: '100 500',
      style: 'italic',
    }
  ]
})

export const siteTitle = 'Astrid Mathilde Boberg';


export default function Layout({ children }) {
  return (
    <>
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <body>

    <ThemeProvider>
    <Wrapper>

    <header id={styles.header} className={"text-medium"}>
    <h1 className={utils.screen_reader_text}>{siteTitle}</h1>
    <PrimaryNav />
    </header>

    <main id={styles.content} className={styles.entry}>
    {children}
    </main>

    <footer id={styles.footer}>
    <p>© Astrid Mathilde Boberg</p>
    <nav id={styles.secondaryNav}>
    <ul>
    <li key="resumee"><Link href="/resumee">Resumee</Link></li>
    <li key="colophon"><Link href="/colophon">Colophon</Link></li>
    <li key="contact"><Link href="/colophon">Contact</Link></li>
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