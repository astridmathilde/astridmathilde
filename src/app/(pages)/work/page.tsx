import { client } from "../../../sanity/client";
import { ALL_PROJECTS } from "../../../sanity/lib/queries";
import { categoryLabel, typeLabel } from "../../../sanity/lib/option-title";
import type { Metadata } from "next";
import style from "../../../assets/scss/work.module.scss";
import utils from "../../../assets/scss/utils.module.scss";
import Link from "next/link";
import BlockProjects from "../../../components/projects";

const pageTitle = 'My work';
 
export const metadata: Metadata = {
  title: pageTitle,
}

export default async function Work() {
  const projects = await client.fetch(ALL_PROJECTS, {});

  return (
    <>
    <h2 className={utils.screen_reader_text}>{pageTitle}</h2>
    <div className={style.work}>
    {projects.map((project) => (
      <BlockProjects key={project._id} id={project._id} slug={project.slug} shortTitle={project.short_title} category={categoryLabel[project.category]} type={typeLabel[project.type]} client={project.partner?.value} year={project.time.year} alt={project.short_title} thumbnail={project.thumbnail} width={project.thumbnail.width} height={project.thumbnail.height} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
    ))}
    </div>
    
    <h2 className={utils.sectionTitle}>Further discovery</h2>
    <p>You can <Link href="/about">read my resumee</Link>, see <Link href="/now">what I have been up to lately</Link>, or find out <Link href="/colophon">how I built this website</Link>.</p> 
    </>
  )
}