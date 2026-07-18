import Link from "next/link";
import { client } from "../../sanity/client";
import { defineQuery } from "next-sanity";
import { categoryLabel, typeLabel } from "../../sanity/lib/option-title";
import { PortableText } from "next-sanity";

import BlockDisplay from "../../components/display";
import BlockProjects from "../../components/projects";
import utils from "../../assets/scss/utils.module.scss";
import style from "../../assets/scss/index.module.scss";

export default async function Index() {
  const intro = await client.fetch(defineQuery(`*[_type == "module" && slug.current == "intro"][0]`), {});
  const projects = await client.fetch(defineQuery(`*[_type == "module" && slug.current == "work"][0]{
  project_selector[]->{
    _id,
    short_title,
    slug,
    location,
    time,
    type,
    category,
    partner,
    thumbnail{
      ...,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  }
}`), {});
    const now = await client.fetch(defineQuery(`*[_type == "module" && slug.current == "now"][0]`), {});
    const contact = await client.fetch(defineQuery(`*[_type == "module" && slug.current == "contact"][0]`), {});
    const discovery = await client.fetch(defineQuery(`*[_type == "page" && slug.current == "index"][0]`), {});
    
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
        <p className={utils.small + " color-subtle"}>Last updated on  {new Date(now._updatedAt).toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric'})}. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
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
  
