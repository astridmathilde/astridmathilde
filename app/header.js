"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import styles from "./assets/scss/layout.module.scss";
import icon from "./apple-icon.png";

export default function Header() {
  const pathname = usePathname();

  return (
    <header id={styles.header} className={"text-medium"}>

    <h1 className={styles.title}><Link href="/"><Image className={styles.icon} src={icon} width="20" height="20" alt="" /> astrid</Link></h1>


    <nav id="primaryNav" className={styles.nav}>
    <ul>
    <li key="intro"><Link href="/" className={pathname === "/" ? styles.active : ""}>intro</Link></li>
    <li key="work"><Link href="/work" className={pathname === "/work" ? styles.active : ""}>Work</Link></li>
    <li key="now"><Link href="/now" className={pathname === "/now" ? styles.active : ""}>Now</Link></li>
    <li key="bio"><Link href="/about" className={pathname === "/about" ? styles.active : ""}>Bio</Link></li>
    </ul>
    </nav>
    </header>
  )
}