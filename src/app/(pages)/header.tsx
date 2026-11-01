"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import LightSwitch from "../../components/light-switch";
import styles from "../../assets/scss/layout.module.scss";

export default function Header() {
  const pathname = usePathname();

  return (
    <header id={styles.header} className={"text-small"}>

    <h1 className={styles.title}><Link href="/">Astrid Mathilde</Link></h1>

    <nav id="primaryNav" className={styles.nav}>
    <ul>
    <li key="work"><Link href="/work" className={pathname === "/work" ? styles.active : ""}>Work</Link></li>
    <li key="now"><Link href="/now" className={pathname === "/now" ? styles.active : ""}>Now</Link></li>
    <li key="bio"><Link href="/bio" className={pathname === "/bio" ? styles.active : ""}>Bio</Link></li>
    <li key="lightswitch"><LightSwitch /></li>
    </ul>
    </nav>
    </header>
  )
}