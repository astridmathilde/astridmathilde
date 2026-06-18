"use client"

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export default function LightSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true)
  }, []);
  
  if(!mounted) return null;
  
  
  return (
    <>    
    <button 
    onClick={() => setTheme(theme === "system" && resolvedTheme === "dark" ? "light" : theme === "system" && resolvedTheme === "light" ? "dark" : "system")}
    aria-label={theme === "system" && resolvedTheme === "dark" ? "Switch to light mode" : theme === "system" && resolvedTheme === "light" ? "Switch to dark mode" : "Switch to default mode"}>
  {theme === "system" && resolvedTheme === "dark" ? "🌞" : theme === "system" && resolvedTheme === "light" ? "🌘" : "🖥️"}
    </button>
    </>
  )
};