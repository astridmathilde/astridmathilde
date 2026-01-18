import { siteTitle } from "../../layout";
import { projects } from "../../../data/projects";
import style from "../../assets/scss/project.module.scss";
import BlockImage from "../../components/image";
import BlockImageRow from "../../components/image_row";

import img_aho from "../../assets/img/projects/kahos/aho.jpg";
import img_logo from "../../assets/img/projects/kahos/logo.jpg";
import img_auditorium from "../../assets/img/projects/kahos/auditorium.jpg";
import img_posters from "../../assets/img/projects/kahos/posters.jpg";
import img_templates from "../../assets/img/projects/kahos/templates.jpg";
import img_forelesning from "../../assets/img/projects/kahos/forelesning.jpg";
import img_poster_1 from "../../assets/img/projects/kahos/poster-1.jpg";
import img_poster_2 from "../../assets/img/projects/kahos/poster-2.jpg";

const pageTitle = (projects[0].short_title);

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/projects/kahos'),
  title: pageTitle + ' – ' + siteTitle
}

export default function kahos() {
  return (
    <>
    <article className={style.project}>
    <header className={style.header}>
    <h2>{projects[0].title}</h2>
    </header>
    
    <div className={style.thumbnail}>
    <BlockImage className={style.thumbnail} url={projects[0].thumbnail} alt={projects[0].title} priority="true" />
    </div>

    <div className={style.container}>
    <div className={style.meta + " text-xsmall"}>
    <ul>
    <li key="project_type"><span className={style.label + " text-tiny"}>Type of project:</span> {projects[0].category} for a {projects[0].type.toLocaleLowerCase()}</li>
    <li key="project_location"><span className={style.label + " text-tiny"}>Location:</span> <a href={projects[0].location.url}>{projects[0].location.name}</a></li>
    <li key="project_time_frame"><span className={style.label + " text-tiny"}>Time frame:</span> {projects[0].time}</li>
    <li key="project_contributors"><span className={style.label + " text-tiny"}>Contributors:</span>
    <ul className={style.contributors}>
    {projects[0].team.map((team) => (
      <li key={team} className={style.contributor}>{team}</li>
    ))}
    </ul>
    </li>
    </ul>
    </div>
    
    <div className={style.content}>
    <p>The students at <a href="https://aho.no" target="_blank" rel="external">The Oslo School of Architecture and Design</a> did not learn enough about sustainability. As a result, we established <a href="https://www.arkitektur.no/aktuelt/utdanning/krever-mer-kunnskap-om-klima-paa-studiet/" target="_blank" rel="external">the student assocation KAHOS</a>, aiming to transform the education to meet future needs, and strengthen the students’ knowledge about sustainability.</p>
    
    <p>From the beginning, I was responsible for graphic design and marketing, and I designed templates for posters and social media, for easier distribution of information about new events happening at the school.</p>
    
    <BlockImage url={img_templates} alt={projects[0].title} />
    
    <BlockImageRow>
    <BlockImage url={img_aho} alt={projects[0].title} />
    <BlockImage url={img_logo} alt={projects[0].title} />
    </BlockImageRow>
    
    <BlockImage url={img_auditorium} alt={projects[0].title} caption="The logo is designed by Felix Vik" />
    <BlockImage url={img_posters} alt={projects[0].title} />
    
    <p>By inviting speakers, hosting debates and meeting with the school administration, we are <a href="https://www.arkitektur.no/aktuelt/utdanning/krever-mer-kunnskap-om-klima-paa-studiet/" target="_blank" rel="external">pushing the school to make change</a> in their curriculum. This is important considering the large climate emissions caused by the construction industry, and when we know that 80% of a product’s climate emissions are determined in the early design phase. </p>
    
    <BlockImage url={img_forelesning} alt={projects[0].title} />
    
    <BlockImageRow>
    <BlockImage url={img_poster_1} alt={projects[0].title} />
    <BlockImage url={img_poster_2} alt={projects[0].title} />
    </BlockImageRow>
    </div>
    </div>
    </article>
    </>
  )
}