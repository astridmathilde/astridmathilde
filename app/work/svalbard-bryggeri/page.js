import { siteTitle } from "../../layout";
import { projects } from "../../../data/projects";
import style from "../../../assets/scss/project.module.scss";
import projectNav from "../../../assets/scss/components/project-navigation.module.scss";
import BlockImage from "../../../components/image";
import BlockProjects from "../../../components/projects";

import img_svalbard1 from "../../../assets/img/projects/svalbard-bryggeri/knut-aaserud-2.jpg";
import img_project1 from "../../../assets/img/projects/svalbard-bryggeri/svalbard-bryggeri-1.jpg";
import img_project2 from "../../../assets/img/projects/svalbard-bryggeri/svalbard-bryggeri-2.jpg";
import img_project3 from "../../../assets/img/projects/svalbard-bryggeri/svalbard-bryggeri-3.jpg";
import img_project4 from "../../../assets/img/projects/svalbard-bryggeri/svalbard-bryggeri-4.jpg";

const pageTitle = (projects[3].short_title);

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/projects/svalbard-bryggeri'),
  title: pageTitle + ' – ' + siteTitle
}

export default function svalbardBryggeri() {
  return (
    <>
    <article className={style.project}>
    <header className={style.header}>
    <h2>{projects[3].title}</h2>
    </header>
    
    <div className={style.thumbnail}>
    <BlockImage className={style.thumbnail} url={projects[3].thumbnail} alt={projects[3].title} priority="true" />
    </div>
    
    <div className={style.container}>
    <div className={style.meta + " text-xsmall"}>
    <ul>
    <li key="project_type"><span className={style.label + " text-tiny"}>Type of project: </span>We for Svalbard Bryggeri</li> 
    <li key="project_location"><span className={style.label + " text-tiny"}>Location:</span> <a href={projects[3].location.url}>{projects[3].location.name}</a></li>
    <li key="project_time_frame"><span className={style.label + " text-tiny"}>Time frame:</span> {projects[3].time}</li>
    <li key="project_contributors"><span className={style.label + " text-tiny"}>Contributors:</span>
    <ul className={style.contributors}>
    {projects[3].team.map((team) => (
      <li key={team} className={style.contributor}>{team}</li>
    ))}
    </ul>
    </li>
    </ul>
    </div>
    
    <div className={style.content}>
    <p>Svalbard Bryggeri is the world’s northernmost brewery. It all started with a dream to share the Arctic with the rest of the world. In 2015 the founders helped change the alcohol laws in Svalbard, making it possible for them to start a brewery just south of the North Pole.</p>
    
    <BlockImage url={img_svalbard1} alt="Svalbard Bryggeri" caption="Photo: Knut Åserud"/>
    
    <p>Svalbard Bryggeri wanted the new website to highlight the nature and rawness of Svalbard. It should be dynamic and feel “alive”. It was important for them to emphasize that the brewery is the northernmost in the whole world, and it should be clear that it is located on Svalbard.</p>
    
    <p>I was involved throughout the entire design process. My main responsibilites included content structure, wireframing and prototyping. I was in charge of developing a custom WordPress theme for the website, making sure that it was easy to maintain, and launch the site when everything was ready.</p>
    
    <p>When we designed the website, we wanted to focus on storytelling with large images showcasing the stunning nature of Svalbard. In order to ensure this, we traveled to Svalbard and captured the photos ourselves. The content was made before I started prototyping, and we did several design iterations before we ended up with the final result.</p>
    
    <p>The result is a fast website built to support future growth. The website is multilingual, and the content is easy to update across the languages. Later, we added the possibility to order products online.</p>
    
    <BlockImage url={img_project1} alt="Svalbard Bryggeri" />
    
    <BlockImage url={img_project2} alt="Svalbard Bryggeri" />
    
    <BlockImage url={img_project3} alt="Svalbard Bryggeri" />
    
    <BlockImage url={img_project4} alt="Svalbard Bryggeri" />
    
    </div>
    </div>
    </article>
    
    <h2>Keep looking</h2>
    <div className={projectNav.container}>
    {projects.filter(project => project.id != '0').toReversed().map((project) => (
      <BlockProjects key={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} sizes="(min-width: 400px) 50vw, (min-width: 900px) 33vw, 100vw" />
    ))}
    </div>
    </>
  )
}