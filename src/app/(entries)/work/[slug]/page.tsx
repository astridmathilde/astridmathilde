import type { Metadata } from "next";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { getFileAsset } from "@sanity/asset-utils";

import { getEntry, getMoreEntries } from "../../../../sanity/lib/data";
import { categoryLabel, typeLabel } from "../../../../sanity/lib/option-title";

import style from "../../../../assets/scss/project.module.scss";
import utils from "../../../../assets/scss/utils.module.scss";

import BlockProjectImage from "../../../../components/project-image";
import BlockImage from "../../../../components/image";
import BlockProjects from "../../../../components/projects";


export async function generateMetadata({
  params,
}: {
  params: { slug: string } }): Promise<Metadata> {
    const entry = await getEntry(params);
    return {
      title: entry.short_title,
      description: entry.description,
    }
  }
  
  export default async function ProjectPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const entry = await getEntry(params);
    const moreEntries = await getMoreEntries(params);
    const randomEntries = moreEntries.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    const components = {
      types: {
        image: ({value}: any) => (
          <BlockImage alt={value.alt} value={value.asset._ref} caption={value.caption} />
        ),
        video: ({value}: any) => {
          const fileAsset = getFileAsset(value.asset._ref, {
            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
          });
          const url = typeof fileAsset === "string" ? fileAsset : fileAsset.url ?? "";
          return (
            <video autoPlay muted playsInline loop>
              <source src={url} type={value.asset?.mimeType ?? 'video/mp4'} />
            </video>
          );
        }
      },
    }
    
    return (
      <article className={style.project}>
      
      <header className={style.header}>
      <h2>{entry.title}</h2>
      </header>
      
      <div className={style.thumbnail}>
      <BlockProjectImage value={entry.thumbnail} />
      </div>
      
      <div className={style.container}>
      
      <div className={style.meta + " text-xsmall"}>
      <ul>
      
      <li key="project_category">
      <span className={style.label + " text-tiny"}>Category:</span>
      {categoryLabel[entry.category]}
      </li> 
      
      <li key="project_type">
      <span className={style.label + " text-tiny"}>Type of project:</span>
      {entry.type === 'other' ? entry.other_type : typeLabel[entry.type]}
      </li>
      
      {entry.partner ? (
        <li key="project_partner">
        <span className={style.label + " text-tiny"}>{entry.partner.label}</span>
        {entry.partner.link ? <a href={entry.partner.link} rel="external" target="_blank">{entry.partner.value}</a> : entry.partner.value}
        </li>
      ) : null
    }
    
    {entry.location ? (
      <li key="project_location">
      <span className={style.label + " text-tiny"}>Location:</span>
      {entry.location.website ? <a href={entry.location.website} rel="external" target="_blank">{entry.location.name}</a> : entry.location.name}
      </li>
    ) : null
  }
  
  {entry.time.duration || entry.time.year ? (
    <li key="project_duration"><span className={style.label + " text-tiny"}>{entry.time.duration ? "Time:" : "Year:"}</span> {entry.time.duration ? entry.time.duration + " (" + entry.time.year + ")" : entry.time.year }</li>
  ) : null}
  
  
  {entry.contributors ? (
    <li key="project_contributors" className={style.contributors}><span className={style.label + " text-tiny"}>Team:</span>
    <ul>
    {entry.contributors.map((team) => (
      <li key={team._key}>
      {team.website ? (
        <a href={team.website} target="_blank" rel="external">{team.name}</a>
      ) : team.name}
      </li>
    ))}
    </ul>
    </li>
  ) : null 
}

{entry.roles ? (
  <li key="project_roles" className={style.roles}><span className={style.label + " text-tiny"}>My role:</span>
  <ul>
  {entry.roles.map((role) => (
    <li key={role} className={style.role}>{role}</li>
  ))}
  </ul>
  </li>
) : null
}

{entry.links ? (
  <li key="project_links" className={style.links}><span className={style.label + " text-tiny"}>Links:</span>
  <ul>
  {entry.links.map((link) => (
    <li key={link.title} className={style.link}>
    <Link href={link.url} rel="external" target="_blank">{link.title}</Link>
    </li>
  ))}
  </ul>
  </li>
) : null
}

</ul>
</div>

<div className={style.content}>
{Array.isArray(entry.description) && <PortableText value={entry.description} components={components} />}
</div>
</div>

<h2 className={utils.sectionTitle}>Keep looking</h2>
<div className={style.projectNav}>
{randomEntries.map((entry) => (
  <BlockProjects key={entry._id} id={entry._id} slug={entry.slug} shortTitle={entry.short_title} category={categoryLabel[entry.category]} type={entry.type === 'other' ? entry.other_type : typeLabel[entry.type]} client={entry.partner?.value} year={entry.time.year} alt={entry.short_title} thumbnail={entry.thumbnail} width={600} height={300} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
))}
</div>

</article>
);
}
