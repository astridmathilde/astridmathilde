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
  description: 'Heia! I am a designer and self-taught developer from Northern Norway, with a passion for sustainability. Currently I am living in Oslo doing a masters degree in design, specializing in designing digital products. I enjoy writing things and taking photos of stuff.'
}

export default function Index() {
  return (
    <div className={style.content}>
    <BlockDisplay location="home">Heia! I am a designer and self-taught developer from Northern Norway <BlockIcon>🏔️</BlockIcon>, with a passion for sustainability. Currently I am living in Oslo doing a master's degree in design, specializing in designing digital products. I enjoy writing things and <a href="https://astrid.observer" rel="external" title="my library of observations" target="_blank">taking photos of stuff</a>.</BlockDisplay>
    
    <h2>Selected projects <BlockIcon>👇</BlockIcon></h2>
    
    <div className={style.projects}>
    {projects.toReversed().map((project) => (
      <BlockProjects id={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
    ))}
    </div>
    
    <h2>What I am doing now <BlockIcon>👀</BlockIcon></h2>
    <p>Continuing on my third year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a> after having a break. My life currently revolves around a project I am doing in collaboration with <a href="https://www.rodekors.no/en/" rel="external" target="_blank">Norwegian Red Cross</a>, which I will be working with until the end of May. I share my everyday observations in <a href="https://astrid.observer" rel="external" target="_blank">my own digital space called <em>blikkjournal</em></a>, and I just joined <a rel="external nofollow noreferrer" href="https://bsky.app/profile/astridmathilde.no" target="_blank">Bluesky</a>. I like music and I read a lot of books, you can <Link href="now">check it out on my Now-page</Link>. </p>
    
    <p className={utils.small}>Last updated on April 12th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    <h2>Recent work experience <BlockIcon>👩🏻‍💻</BlockIcon></h2>
    {experience.slice(0, 3).map((experience) => (
      <BlockResumee id={experience.id} position={experience.position} locationUrl={experience.location.url} locationName={experience.location.name} description={experience.description} time={experience.time} />
    ))}
    
    <h2 className={style.contactHeader}>Contact <BlockIcon>🤝</BlockIcon></h2>
    <p>My email is <a href="mailto:heia@astridmathilde.no?subject=Heia!">heia@astridmathilde.no</a>, but you can also <a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="nofollow noreferrer">add me on LinkedIn</a> or <a rel="external nofollow noreferrer" href="https://bsky.app/profile/astridmathilde.no" target="_blank">follow me on Bluesky</a>!</p>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can <Link href="/about">learn more about me</Link>, see <Link href="/now">what I am currently listening to</Link>, or find out <Link href="/colophon">why I am not using generative AI</Link>.</p>
    </div>
  );
}

