import { getIndex, getCurrentStatus } from "../../sanity/lib/data";
import { categoryLabel, typeLabel } from "../../sanity/lib/option-title";
import { PortableText } from "next-sanity";

import BlockDisplay from "../../components/display";
import BlockProjects from "../../components/projects";
import BlockCurrentStatus from "../../components/current-status";
import utils from "../../assets/scss/utils.module.scss";
import style from "../../assets/scss/index.module.scss";

export default async function Index() {
  const index = await getIndex();
  const now = await getCurrentStatus();

  return (
    <>
    {index.intro ? (
      <>
      <h2 className={utils.screen_reader_text}>Introduction</h2>
      <BlockDisplay><PortableText value={index.intro} /></BlockDisplay>
      </>
    ) : ""}
    
    {index.project_selector ? (
      <>
      <h2 className={utils.screen_reader_text}>Selected work</h2>
      <div className={style.selectedWork}>
      {index.project_selector.map((project) => (
        <BlockProjects key={project._id} id={project._id} title={project.short_title} slug={project.slug} category={categoryLabel[project.category]} type={typeLabel[project.type]} client={project.partner?.value} year={project.time.year} alt={project.short_title} thumbnail={project.thumbnail} width={project.thumbnail.width} height={project.thumbnail.height} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
      ))}
      </div>
      </>
    ) : "" }
    
    {now ? (
      <>
      <h2 className={utils.sectionTitle}>Current status</h2>
      <BlockCurrentStatus content={now.content} date={now._updatedAt} />
      </>
    ) : ""}
    
    {index.contact ? (
      <>
      <h2 className={utils.sectionTitle}>Contact</h2>
      <PortableText value={index.contact} />
      </>
    ) : ""}
    
    {index ? (
      <>
      <h2 className={utils.sectionTitle}>Further discovery</h2>
      <PortableText value={index.further_discovery} />
      </>
    ) : ""}
    
    </>
  );
}

