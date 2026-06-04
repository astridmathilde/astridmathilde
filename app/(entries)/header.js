"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import styles from "../assets/scss/layout.module.scss";
import utils from "../assets/scss/utils.module.scss";
import icon from "../apple-icon.png";

export default function HeaderEntry({pageTitle}) {
  const path = usePathname();
  const splitPath = path.split('/').filter(Boolean);
  const parentPage = splitPath.slice(0, -1);

  return (
    <header id={styles.headerEntry} className={"text-medium"}>
    <h1 className={styles.title}><Link href="/">astrid mathilde</Link></h1>

    <nav id={styles.breadcrumbs}>
      <ul>
        <li key="parent-page"><Link href={"/" + parentPage}>{parentPage}</Link></li>
        <li key="current-page">{pageTitle}</li>
      </ul>
    </nav>
    </header>
  )
}