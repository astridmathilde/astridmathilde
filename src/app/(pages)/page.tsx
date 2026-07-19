import { sanityFetch } from "../../sanity/client";
import { INDEX_INTRO, INDEX_DISCOVERY, INDEX_ENTRIES, NOW, CONTACT} from "../../sanity/lib/queries";
import { categoryLabel, typeLabel } from "../../sanity/lib/option-title";
import { PortableText } from "next-sanity";

import BlockDisplay from "../../components/display";
import BlockProjects from "../../components/projects";
import utils from "../../assets/scss/utils.module.scss";
import style from "../../assets/scss/index.module.scss";

export default async function Index() {
  const projects = await sanityFetch({
    query: INDEX_ENTRIES,
    tags: ['selected_entries']
  });

   const intro = await sanityFetch({
    query: INDEX_INTRO,
    tags: ['intro']
  });

   const now = await sanityFetch({
    query: NOW,
    tags: ['selected_entries']
  });

   const discovery = await sanityFetch({
    query: INDEX_DISCOVERY,
    tags: ['selected_entries']
  });

   const contact = await sanityFetch({
    query: CONTACT,
    tags: ['selected_entries']
  });
  
  return (
    <>
    {intro ? (
      <>
      <h2 className={utils.screen_reader_text}>{intro.title}</h2>
      <BlockDisplay><PortableText value={intro.content} /></BlockDisplay>
      </>
    ) : ""}
    
    {projects ? (
      <>
      <h2 className={utils.sectionTitle}>{projects.title}</h2>
      <div className={style.selectedWork}>
      {projects.project_selector.map((project) => (
        <BlockProjects key={project._id} id={project._id} title={project.short_title} slug={project.slug} category={categoryLabel[project.category]} type={typeLabel[project.type]} client={project.partner?.value} year={project.time.year} alt={project.short_title} thumbnail={project.thumbnail} width={project.thumbnail.width} height={project.thumbnail.height} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
      ))}
      </div>
      </>
    ) : "" }
    
    {now ? (
      <>
      <h2 className={utils.sectionTitle}>{now.title}</h2>
      <PortableText value={now.content} />
      <p className={utils.small + " color-subtle"}>Last updated on {new Date(now._updatedAt).toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric', timeZone: 'Europe/Oslo'})}. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
      </>
    ) : ""}
    
    {contact ? (
      <>
      <h2 className={utils.sectionTitle}>{contact.title}</h2>
      <PortableText value={contact.content} />
      </>
    ) : ""}
    
    {discovery ? (
      <>
      <h2 className={utils.sectionTitle}>Further discovery</h2>
      <PortableText value={discovery.further_discovery} />
      </>
    ) : ""}
    
    </>
  );
}

