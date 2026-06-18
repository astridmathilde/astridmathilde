import { siteTitle } from "../../layout";
import style from "../../../assets/scss/project.module.scss";
import projectNav from "../../../assets/scss/components/project-navigation.module.scss";

import { PortableText } from "next-sanity";
import { client } from "../../../sanity/client";
import BlockProjectImage from "../../components/project-image";

import Link from "next/link";

const entry_QUERY = `*[_type == "project" && slug.current == $slug][0]`;
const { projectId, dataset } = client.config();
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
    <li key="project_type"><span className={style.label + " text-tiny"}>Type of project: </span>{entry.type}</li> 
    {entry.location ? (
      <li key="project_location"><span className={style.label + " text-tiny"}>Location:</span> <a href={entry.location.url}>{entry.location.name}</a></li>
    ) : null
  }
  <li key="project_time_frame"><span className={style.label + " text-tiny"}>Time frame:</span> {entry.time.duration}</li>
  {entry.contributors ? (
    <li key="project_contributors"><span className={style.label + " text-tiny"}>Contributors:</span>
    <ul className={entry.contributors}>
    {entry.contributors.map((team) => (
      <li key={team} className={style.contributor}>{team}</li>
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
