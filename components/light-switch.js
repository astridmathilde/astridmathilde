"use client"

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import BlockIcon from "../components/icon";

export default function LightSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true)
  }, []);
  
  if(!mounted) return null;
  
  
  return (
    <>
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}><BlockIcon>{resolvedTheme === "dark" ? "🌞"  : "🌘"}</BlockIcon></button>
    </>
  )
};