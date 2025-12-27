import Link from "next/link";
import {Providers} from "./providers.js";
import localFont from 'next/font/local';
import LightSwitch from '../components/light-switch.js';
import '../assets/scss/global.scss';
import styles from '../assets/scss/layout.module.scss';
import Wrapper from './wrapper.js';
import '../assets/scss/brightness.scss';

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

export const siteTitle = 'Astrid Mathilde Boberg';

export const viewport = {
  colorScheme: 'dark light',
}

export default function Layout({ children }) {
  return (
    <>
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <body>
    <Providers>
    <Wrapper>
    <header id={styles.header} className={"text-medium"}>
    <h1 className={styles.site_title}><a href="/">Astrid Mathilde</a></h1>
    </header>
    <main id={styles.content} className={styles.entry}>
    {children}
    </main>
    <footer id={styles.footer} className={"text-medium"}>
    <address rel="author">© Astrid Mathilde Boberg</address>
    <nav className={styles.navigation}>
    <ul>
    <li key="resumee"><Link href="/resumee">Resumee</Link></li>
    </ul>
    </nav>
    </footer>
    </Wrapper>
    </Providers>
    </body>
    </html>
    </>
  );
}