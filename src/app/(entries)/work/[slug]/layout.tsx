import type { Metadata } from 'next';
import { sanityFetch } from '../../../../sanity/client';
import { ENTRY_TITLE_QUERY } from '../../../../sanity/lib/queries';
import Link from 'next/link.js';

import '../../../../assets/scss/global.scss';
import styles from '../../../../assets/scss/layout.module.scss';

import HeaderEntry from './header';

export const metadata: Metadata = {
  title: "Hei",
  metadataBase: new URL('https://astridmathilde.no/work'),
}

export default async function EntryLayout({ children, params }) {
  const entry = await sanityFetch({
    query: ENTRY_TITLE_QUERY,
    params: await params,
    revalidate: 60
  });

  return (
    <>
    <HeaderEntry pageTitle={entry.short_title} />
    
    {children}
    
    <footer id={styles.footerEntry}>
    <Link href="/work"><span aria-hidden="true">{"<-"} </span>Back to all work</Link>
    <p className={"color-subtle"}>© Astrid Mathilde Boberg</p>
    </footer>
    </>
  );
}