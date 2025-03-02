import Link from "next/link";
import localFont from 'next/font/local';
import '../assets/scss/global.scss';
import styles from '../assets/scss/layout.module.scss';
import Wrapper from './wrapper.js';
import LightSwitch from './light-switch.js';

const inter = localFont({
  src: [
    {
      path: '../assets/fonts/InterVariable.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/InterVariable-Italic.woff2',
      weight: '100 900',
      style: 'italic',
    }
  ]
})

export const siteTitle = 'Astrid Mathilde';

export default function Layout({ children }) {
  return (
    <>
    <html lang="en" className={inter.className + " dark"}>
    <Wrapper>
    <header id={styles.header}>
    <h1 className={styles.site_title}><a href="/">{siteTitle}</a></h1>
    <nav className={styles.navigation}>
    <ul>
    <li key="work"><Link href="/work">Work</Link></li>
    <li key="resumee"><Link href="/about">About</Link></li>
    <li key="lightswitch"><LightSwitch /></li>
    </ul>
    </nav>
    </header>
    <main id={styles.content} className={styles.entry}>
    {children}
    </main>
    <footer id={styles.footer}>
    <address rel="author">© Astrid Mathilde Boberg</address>
    <nav className={styles.navigation}>
    <ul>
    <li key="colophon"><Link href="/colophon">Colophon</Link></li>
    </ul>
    </nav>
    </footer>
    </Wrapper>
    </html>
    </>
  );
}