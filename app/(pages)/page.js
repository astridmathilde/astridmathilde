import { siteTitle } from "./layout";
import Link from "next/link";

import utils from "../assets/scss/utils.module.scss";
import styles from "../assets/scss/index.module.scss";

import { projects } from "../data/projects";
import BlockProject from "../components/project";
import BlockDisplay from "../components/display";
import Draggable from "../components/draggable";

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no'),
  title: siteTitle + " – Designer & developer",
  description: "Heia! I am a designer and developer from Northern Norway, currently doing a master’s in interaction design in Oslo. With a background in graphic design, web design and development, I now specialise in designing digital products. I also enjoy writing things, and I have an interest for digital minimalism and web sustainability."
  
}

export default function Index() {
  const selectedProjects = projects.filter((e) => [12, 7, 10].includes(e.id));
  
  return (
    <>
    <h2 className={utils.screen_reader_text}>Introduction</h2>
    <BlockDisplay>Heia! I am a designer and developer from Northern Norway, currently doing a master's in design at the <a href="https://www.aho.no/english/" rel="external" target="_blank">Oslo School of Architecture and Design</a>. With a background in graphic design and web development, I now specialize in designing digital products, and particularly enjoy working with complexity. I also enjoy writing things, <a href="https://blikk.directory" rel="external" title="my library of observations" target="_blank">taking photos of stuff</a>, and I have an interest for digital minimalism and <Link href="colophon" title="this site's climate footprint">web sustainability</Link>
    </BlockDisplay>
    
    <h3 className={utils.screen_reader_text}>A selection of my work</h3>
    <div className={styles.selectedWork}>
    {selectedProjects.map((project) => (
      <BlockProject key={project.id} slug={project.slug} year={project.year} title={project.title} category={project.category} thumbnail={project.thumbnail} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
    ))}
    </div>
    </>
  );
}

