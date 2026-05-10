import { siteTitle } from "../../layout";
import { projects } from "../../data/projects";
import style from "../../assets/scss/work.module.scss";
import utils from "../../assets/scss/utils.module.scss";
import BlockProjects from "../../components/projects";

const pageTitle = 'My work';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/work'),
  title: pageTitle + ' – ' + siteTitle,
  description: 'I am a designer and self-taught developer from Northern Norway, passionate about designing digital products with a low carbon footprint. Currently I am living in Oslo doing a masters degree in design. This is some of my projects!'
}

export default function Work() {
  return (
    <>
    <h2 className={utils.screen_reader_text}>My work</h2>
    <div className={style.work}>
    {projects.map((project) => (
      <BlockProjects key={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
    ))}
    </div>
    </>
  )
}