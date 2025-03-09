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
  description: 'Heia! I am a designer and self-taught developer from Northern Norway with a passion for sustainability. Currently I am doing a masters degree in design at The Oslo School of Architecture and Design, specialising in designing digital products.'
}

export default function Index() {
  return (
    <>
    <BlockDisplay>Heia! <BlockIcon>👋</BlockIcon> I am a designer and self-taught developer from Northern Norway <BlockIcon>🏔️</BlockIcon> with a passion for sustainability. Currently I am doing a master's degree in design at <a href="https://aho.no/en" target="_blank" rel="external">The Oslo School of Architecture and Design</a>, specializing in designing services and digital products <BlockIcon>👩🏻‍💻</BlockIcon>.</BlockDisplay>
    
    
    <h2 className={utils.screen_reader_text}>This is some of my projects 👇</h2>
    
    <div className={style.projects}>
    {projects.toReversed().map((project) => (
      <BlockProjects id={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
    ))}
    </div>
    
    <h2>Recent work experience <BlockIcon>👩🏻‍💻</BlockIcon></h2>
    {experience.slice(0, 3).map((experience) => (
      <BlockResumee id={experience.id} position={experience.position} locationUrl={experience.location.url} locationName={experience.location.name} description={experience.description} time={experience.time} />
    ))}
    
    <h2>Life lately <BlockIcon>✨</BlockIcon></h2>
    <p>Continuing on my third year at <a href="https://aho.no/en" target="_blank" rel="external">The Oslo School of Architecture and Design</a> after having a break. We just finished a pretty intense course in systems oriented design, now returning to the familiarity of interaction design. When I am not working on school projects, I am exploring how to use AI in a more sustainable and resource efficient way, without relying on LLMs, as a part of my role in <a href="https://www.gemz.fashion/" target="_blank" rel="external">Gemz</a>. Also, I have started sharing my everyday observations in my own digital space called <a href="https://astrid.observer" rel="external" target="_blank"><em>blikkjournal</em></a>.</p>
    
    <p className={utils.small}>Last updated on February 25th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    
    <h2>Contact <BlockIcon>🤝</BlockIcon></h2>
    <p>My email is <a href="mailto:heia@astridmathilde.no?subject=Heia!">heia@astridmathilde.no</a>, but you can also write to me on <a href="https://instagram.com/astridmathildeb" target="_blank" rel="nofollow noreferrer">Instagram</a> or <a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="nofollow noreferrer">add me on LinkedIn</a>!</p>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can <Link href="/about">learn more about me</Link> or find out <Link href="/colophon">why I am not using generative AI</Link>.</p>
    </>
  );
}

