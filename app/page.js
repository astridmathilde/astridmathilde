import { siteTitle } from "./layout";
import Link from "next/link";

import utils from "./assets/scss/utils.module.scss";
import styles from "./assets/scss/work.module.scss";

import { projects } from "./data/projects";
import BlockProjects from "./components/projects";

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no'),
  title: siteTitle + " – Designer & developer",
  description: "Heia! I am a designer and developer from Northern Norway, currently doing a master’s in interaction design in Oslo. With a background in graphic design, web design and development, I now specialise in designing digital products. I also enjoy writing things, and I have an interest for digital minimalism and web sustainability."
  
}

export default function Index() {
  const selectedProjects = projects.filter((e) => [12, 11].includes(e.id))
  
  return (
    <>
    <h2 className={utils.screen_reader_text}>Introduction</h2>
    <p>Heia! I am a designer and developer from Northern Norway, currently doing a master’s in interaction design in Oslo. With a background in graphic design, web design and development, I now specialise in designing digital products. I also enjoy writing things, <a href="https://blikk.directory" rel="external" title="my library of observations" target="_blank">taking photos of stuff</a>, and I have an interest for digital minimalism and <Link href="colophon" title="this site's climate footprint">web sustainability</Link>.</p>
    
    <h3>Selected work</h3>
    <div className={styles.work}>
    {selectedProjects.map((project) => (
      <BlockProjects key={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
    ))}
    </div>
    </>
  );
}

