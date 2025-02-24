import { siteTitle } from "../layout";
import { projects } from "../../data/projects";
import style from "../../assets/scss/work.module.scss";
import Link from "next/link";
import BlockProjects from "../../components/projects";
import BlockIcon from "../../components/icon";

const pageTitle = 'My work';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/work'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Colophon() {
  return (
    <>
    <h2>This is some of my work <BlockIcon>👇</BlockIcon></h2>
    <div className={style.work}>
    {projects.toReversed().map((project) => (
      <BlockProjects key={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
    ))}
    </div>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can <Link href="/about">read my resumee</Link>, see <Link href="/now">what I have been up to lately</Link>, or find out <Link href="/colophon">how I built this website</Link>.</p> 
    </>
  )
}