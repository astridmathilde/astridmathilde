import {Providers} from "./providers.js";
import { useRouter } from "next/router.js";
import localFont from 'next/font/local';
import './assets/scss/global.scss';
import styles from './assets/scss/layout.module.scss';
import Wrapper from './wrapper.js';
import './assets/scss/brightness.scss';

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

export const viewport = {
  colorScheme: 'dark light',
}

const isHomePage = () => {
  const router = useRouter();
  return router.pathname === '/' && router.isExact;
};

export default function Layout({ children }) {
  return (
    <>
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <body>
    <Providers>
    <Wrapper>
    <header id={styles.header} className={"text-medium"}>
    <h1 className={styles.site_title}><a href="/">{siteTitle}</a></h1>
    </header>
    <main id={styles.content} className={styles.entry}>
    {children}
    </main>
    </Wrapper>
    </Providers>
    </body>
    </html>
    </>
  );
}