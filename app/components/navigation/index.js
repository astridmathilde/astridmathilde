"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./style.module.scss";

export default function PrimaryNav() {
  const pathname = usePathname();styles.active

  return (
    <nav id="primaryNav" className={styles.primaryNav}>
    <ul>
    <li key="intro"><Link href="/" className={pathname === "/" ? styles.active : ""}>Intro</Link></li>
    <li key="work"><Link href="/work" className={pathname === "/work" ? styles.active : ""}>Work</Link></li>
    <li key="now"><Link href="/now" className={pathname === "/now" ? styles.active : ""}>Now</Link></li>
    <li key="bio"><Link href="/about" className={pathname === "/about" ? styles.active : ""}>Bio</Link></li>
    </ul>
    </nav>
  )
}