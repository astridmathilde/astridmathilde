/**
 * Adding project year navigation to "work"-page
 * Written with help from GLM 5.3 Flash
 */

"use client";

import { useEffect, useState } from "react";
import style from "./style.module.scss";

export default function BlockProjectsNav({years}) {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  useEffect(() => {
    const projects = Array.from(document.querySelectorAll("[data-year"));

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
        .filter((entry) => entry.isIntersecting)
        .sort ((a, b) => {
          const distance = a.boundingClientRect.top - b.boundingClientRect.top;
          return distance !== 0 ? distance : a.boundingClientRect.left - b.boundingClientRect.left;
        });

        const firstProject = intersecting[0];
        if (firstProject) {
          setActiveYear(Number(firstProject.target.getAttribute("data-year")));
        }
      }, 
      { rootMargin: "-40% 0px -40px 0px" }
    );

    projects.forEach((project) => observer.observe(project));
    return () => observer.disconnect();
  }, []);

  const scrollToYear = (year: number) => {
    const target = document.querySelector(`[data-year="${year}"]`);
    if (!target) return;

    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
    });
  };

  return (
    <ul className={style.years}>
      {years.map((year) => (
        <li key={year}>
          <a className={year === activeYear ? style.active : ""} aria-current={year === activeYear ? "true" : undefined} onClick={() => scrollToYear(year)} href="#">{year}</a> 
        </li>
      ))}
    </ul>
  )
  


}