import { ThemeProvider } from 'next-themes';
import Link from 'next/link.js';
import localFont from 'next/font/local';

import '../assets/scss/global.scss';
import '../assets/scss/brightness.scss';

import styles from '../assets/scss/layout.module.scss';
import utils from "../assets/scss/utils.module.scss"

import Wrapper from '../wrapper.js';

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