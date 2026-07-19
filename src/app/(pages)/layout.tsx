import Link from 'next/link.js';
import '../../assets/scss/global.scss'
import styles from '../../assets/scss/layout.module.scss';

import Header from './header';

export default function PageLayout({ children }) {
  return (
    <>
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
    </>
  );
}