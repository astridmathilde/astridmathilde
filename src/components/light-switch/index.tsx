"use client"

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import BlockIcon from "../icon";
import style from "./style.module.scss";

export default function LightSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true)
  }, []);
  
  if(!mounted) return null;

  return (
    <>
    <button className={style.button} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Switch theme"><BlockIcon>{theme === "dark" ? "🌞"  : "🌘"}</BlockIcon></button>
    </>
    )
  };