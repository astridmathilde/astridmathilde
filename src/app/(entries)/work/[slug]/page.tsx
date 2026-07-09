import { siteTitle } from "../../layout";
import style from "../../../assets/scss/project.module.scss";
import projectNav from "../../../assets/scss/components/project-navigation.module.scss";

import { PortableText } from "next-sanity";
import { client } from "../../../sanity/client";
import BlockProjectImage from "../../../components/project-image";

import Link from "next/link";

const entry_QUERY = `*[_type == "project" && slug.current == $slug][0]`;
const options = { next: { revalidate: 30 } };

export default async function ProjectPage({params}) {
  const entry = await client.fetch(entry_QUERY, await params, options);
  
  return (
    <article className={style.project}>
    
    <header className={style.header}>
    <h2>{entry.title}</h2>
    </header>
    
    <div className={style.thumbnail}>
    <BlockProjectImage image={entry.thumbnail} alt={entry.thumbnail.alt} width={3994} height={2993} priority="true" />
    </div>
    
    <div className={style.container}>
    
    <div className={style.meta + " text-xsmall"}>
    <ul>
    
    <li key="project_category">
    <span className={style.label + " text-tiny"}>Category:</span>
    {entry.category}
    </li> 
    
    <li key="project_type">
    <span className={style.label + " text-tiny"}>Type of project:</span>
    {entry.type === 'other' ? entry.other_type : entry.type}
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

{entry.time.duration ? (
  <li key="project_duration"><span className={style.label + " text-tiny"}>Duration:</span> {entry.time.duration}</li>
) : null}

<li key="project_year"><span className={style.label + " text-tiny"}>Year:</span> {entry.time.year}</li>

{/*entry.contributors ? (
  <li key="project_contributors"><span className={style.label + " text-tiny"}>Team:</span>
  <ul className={entry.contributors}>
  {entry.contributors.map((team) => (
    <li key={team} className={style.contributor}>{team}</li>
  ))}
  </ul>
  </li>
) : null */
}

{entry.roles ? (
  <li key="project_roles"><span className={style.label + " text-tiny"}>My role:</span>
  <ul className={entry.roles}>
  {entry.roles.map((role) => (
    <li key={role} className={style.role}>{role}</li>
  ))}
  </ul>
  </li>
) : null
}

{entry.links ? (
  <li key="project_links"><span className={style.label + " text-tiny"}>Links:</span>
  <ul className={entry.links}>
  {entry.links.map((link) => (
    <li key={link} className={style.link}>
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
{Array.isArray(entry.description) && <PortableText value={entry.description} />}
</div>
</div>

</article>
);
}
