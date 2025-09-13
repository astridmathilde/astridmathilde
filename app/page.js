import Link from "next/link";
import { siteTitle } from "./layout";
import BlockDisplay from "../components/display";
import BlockIcon from "../components/icon";
import BlockResumee from "../components/resumee";
import BlockProjects from "../components/projects";
import utils from "../assets/scss/utils.module.scss";
import style from "../assets/scss/home.module.scss";
import { projects } from "../data/projects";
import { experience } from "../data/resumee";

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no'),
  title: siteTitle + " – Designer & developer",
  description: "Heia! I'm a digital product designer and self-taught frontend developer from Northern Norway with a background in graphic design. Currently I'm living in Oslo doing a master's degree in design. I'm passionate about reducing the carbon impact of the digital products we create, and I also enjoy writing things, taking photos of stuff and spending time in nature."
}

export default function Index() {
  return (
    <div className={style.content}>
    <BlockDisplay location="home">Heia! I'm a digital product designer and self-taught frontend developer from Northern Norway <BlockIcon>🏔️</BlockIcon> with a background in graphic design. Currently I'm living in Oslo doing a master's degree in design. I'm passionate about reducing the climate impact of the digital products we create, and I also enjoy writing things, <a href="https://blikk.directory" rel="external" title="my library of observations" target="_blank">taking photos of stuff</a>  and spending time in nature.</BlockDisplay>
    
    <h2>Selected projects <BlockIcon>👇</BlockIcon></h2>
    
    <div className={style.projects}>
    {projects.toReversed().map((project) => (
      <BlockProjects id={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
    ))}
    </div>
    
    <h2>What I am doing now <BlockIcon>👀</BlockIcon></h2>
    <p>Currently on my fourth year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a> after spending my summer working as a designer at <a href="https://variant.no" target="_blank" rel="external">Variant</a>. I recently switched to a dumb phone – a Punkt MP01 – and I really enjoy that. I have started spending more time in the stable, which I enjoy even more. Apart from that, I have a few small freelance projects going on!</p>
    
    <p className={utils.small}>Last updated on September 8th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    <h2>Recent work experience <BlockIcon>👩🏻‍💻</BlockIcon></h2>
    {experience.slice(0, 3).map((experience) => (
      <BlockResumee id={experience.id} position={experience.position} locationUrl={experience.location.url} locationName={experience.location.name} description={experience.description} time={experience.time} />
    ))}
    
    <h2 className={style.contactHeader}>Contact <BlockIcon>🤝</BlockIcon></h2>
    <p>My email is <a href="mailto:heia@astridmathilde.no?subject=Heia!">heia@astridmathilde.no</a>, but you can also <a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="nofollow noreferrer">add me on LinkedIn</a>!</p>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can <Link href="/about">learn more about me</Link>, see <Link href="/now">what I am currently reading</Link>, or find out <Link href="/colophon">why I'm not using generative AI</Link>.</p>
    </div>
  );
}

