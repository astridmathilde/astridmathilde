import Link from "next/link";
import { siteTitle } from "./layout";
import BlockDisplay from "../components/display";
import BlockProjects from "../components/projects";
import BlockIcon from "../components/icon";
import utils from "../assets/scss/utils.module.scss";
import style from "../assets/scss/home.module.scss";
import { projects } from "../data/projects";

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no'),
  title: siteTitle + " – Designer & developer",

}

export default function Index() {
  return (
    <div className={style.content}>
    <BlockDisplay location="home">Heia! I am a designer and developer from Northern Norway, currently living in Oslo as an MA design student. Having previously worked with graphic design, web design and development, I now specialize in designing digital products, while still working with websites as a freelancer. I also enjoy writing things, <a href="https://blikk.directory" rel="external" title="my library of observations" target="_blank">taking photos of stuff</a> and I have a fascination for digital minimalism.</BlockDisplay>
    
    <h2>Selected work <BlockIcon>👇</BlockIcon></h2>
    <div className={style.projects}>
    {projects.toReversed().map((project) => (
      <BlockProjects id={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
    ))}
    </div>
    
    <h2 className={utils.sectionTitle}>What I am doing now <BlockIcon>👀</BlockIcon></h2>
    <p>Just finished the first semester of my fourth year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a>, and I am wrapping up a freelance project I have been working with for the past year. I still have a minimalist phone, my beloved Punkt MP02, and I actually got rid of my iPhone after dreading it for months. I tried deleting social media, but for a while I was back on Instagram. Taking a break now, though. When I went to Northern Norway for Christmas, I found my old iPod Nano and that made me very happy.</p>
    
    <p className={utils.small}>Last updated on December 18th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    <h2 className={utils.sectionTitle}>Contact <BlockIcon>🤝</BlockIcon></h2>
    <p>My email is <a href="mailto:heia@astridmathilde.no?subject=Heia!">heia@astridmathilde.no</a>, but you can also <a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="nofollow noreferrer">add me on LinkedIn</a>!</p>
    
    <h2 className={utils.sectionTitle}>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can <Link href="/about">learn more about me</Link>, see <Link href="/now">what I am currently listening to</Link>, or find out <Link href="/colophon">check out this site's carbon footprint</Link>.</p>
    </div>
  );
}

