"use client";

import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "../../../../assets/scss/layout.module.scss";

export default function HeaderEntry({pageTitle}) {
  const params = useParams();
  const path = usePathname();
  const splitPath = path.split('/').filter(Boolean);
  const parentPage = splitPath.slice(0, -1);
  
  console.log(params);
  
  return (
    <header id={styles.headerEntry} className={"text-medium"}>
    <h1 className={styles.title}><Link href="/">astrid mathilde</Link></h1>
    
    <nav id={styles.breadcrumbs}>
    <ul>
    <li key="parent-page" className={styles.parentPage}><Link href={"/" + parentPage}>{parentPage}</Link></li>
    <li key="current-page" className={styles.currentPage}>{pageTitle}</li>
    </ul>
    </nav>
    </header>
  )
}