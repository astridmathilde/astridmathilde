"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import HeaderIcon from "../../components/header-icon";
import styles from "../../assets/scss/layout.module.scss";

export default function Header() {
  const pathname = usePathname();

  return (
    <header id={styles.header} className={"text-large"}>

    <h1 className={styles.title}><Link href="/"><HeaderIcon />astrid mathilde</Link></h1>

    <nav id="primaryNav" className={styles.nav}>
    <ul>
    <li key="work"><Link href="/work" className={pathname === "/work" ? styles.active : ""}>Work</Link></li>
    <li key="now"><Link href="/now" className={pathname === "/now" ? styles.active : ""}>Now</Link></li>
    <li key="bio"><Link href="/bio" className={pathname === "/bio" ? styles.active : ""}>Bio</Link></li>
    </ul>
    </nav>
    </header>
  )
}