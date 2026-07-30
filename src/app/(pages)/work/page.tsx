import type { Metadata } from "next";
import { getAllEntries } from "../../../sanity/lib/data";
import { categoryLabel, typeLabel } from "../../../sanity/lib/option-title";
import BlockProjects from "../../../components/projects";

import style from "../../../assets/scss/work.module.scss";
import utils from "../../../assets/scss/utils.module.scss";

const pageTitle = 'My work';
 
export const metadata: Metadata = {
  title: pageTitle,
}

export default async function Work() {
  const projects = await getAllEntries();

  return (
    <>
    <h2 className={utils.screen_reader_text}>{pageTitle}</h2>
    <div className={style.work}>
    {projects.map((project) => (
      <BlockProjects key={project._id} id={project._id} slug={project.slug} shortTitle={project.short_title} category={categoryLabel[project.category]} type={project.type === 'other' ? project.other_type : typeLabel[project.type]} client={project.partner?.value} year={project.time.year} alt={project.short_title} thumbnail={project.thumbnail} sizes="(min-width: 670px) 50vw, 100vw" />
    ))}
    </div>

    </>
  )
}