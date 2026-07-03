import {Providers} from "./providers";
import Link from "next/link";
import localFont from 'next/font/local';
import Image from "next/image";
import '../assets/scss/global.scss';
import '../assets/scss/brightness.scss';
import styles from '../assets/scss/layout.module.scss';
import icon from "./apple-icon.png";
import Wrapper from './wrapper';

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
});

export const siteTitle = 'Astrid Mathilde Boberg';

export default function Layout({ children }) {
  return (
    <>
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <Wrapper>
    <Providers>
    <header id={styles.header} className={"text-medium"}>
    
    <h1 className={styles.site_title}><Link href="/"><Image className={styles.icon} src={icon} width="24" height="24" alt="" />Astrid Mathilde</Link></h1>

    <nav className={styles.navigation}>
    <ul>
    <li key="work"><Link href="/work">Work</Link></li>
    <li key="resumee"><Link href="/about">About</Link></li>
    </ul>
    </nav>
    </header>
    <main id={styles.content} className={styles.entry}>
    {children}
    </main>
    <footer id={styles.footer} className={"text-medium"}>
    <address rel="author">© Astrid Mathilde Boberg</address>
    <nav className={styles.navigation}>
    <ul>
    <li key="colophon"><Link href="/colophon">Colophon</Link></li>
    <li key="now"><Link href="/now">Now</Link></li>
    </ul>
    </nav>
    </footer>
    </Providers>
    </Wrapper>
    </html>
    </>
  );
}