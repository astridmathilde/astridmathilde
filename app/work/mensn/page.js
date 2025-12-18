import { siteTitle } from "../../layout";
import { projects } from "../../../data/projects";
import style from "../../../assets/scss/project.module.scss";
import projectNav from "../../../assets/scss/components/project-navigation.module.scss";
import BlockImage from "../../../components/image";
import BlockImageRow from "../../../components/image_row";
import BlockProjects from "../../../components/projects";

import img_innsikt from "../../../assets/img/projects/mensn/innsikt.jpg"
import img_datasett from "../../../assets/img/projects/mensn/datasett.png"
import img_prosess_1 from "../../../assets/img/projects/mensn/prosess-1.jpg"
import img_prosess_2 from "../../../assets/img/projects/mensn/prosess-2.jpg"
import img_prosess_3 from "../../../assets/img/projects/mensn/prosess-3.jpg"
import img_prosess_4 from "../../../assets/img/projects/mensn/prosess-4.jpg"
import img_resultat_1 from "../../../assets/img/projects/mensn/resultat-1.jpg"
import img_resultat_2 from "../../../assets/img/projects/mensn/resultat-2.jpg"
import img_proto_1 from "../../../assets/img/projects/mensn/prototype-1.jpg"

const pageTitle = 'Helping young girls understand their own menstrual cycle';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/projects/mensn'),
  title: pageTitle + ' – ' + siteTitle
}

const projectID = projects[1];

export default function mensn() {
  return (
    <>
    <article className={style.project}>
    <header className={style.header}>
    <h2>{projectID.title}</h2>
    </header>
    
    <div className={style.thumbnail}>
    <BlockImage className={style.thumbnail} url={projectID.thumbnail} alt={projectID.title} width="1378" height="1008" priority="true" />
    </div>
    
    <div className={style.container}>
    
    <div className={style.meta + " text-xsmall"}>
    <ul>
    <li key="project_category"><span className={style.label + " text-tiny"}>Category: </span>{projectID.category}</li> 
    <li key="project_type"><span className={style.label + " text-tiny"}>Type: </span>{projectID.type}</li> 
    <li key="project_location"><span className={style.label + " text-tiny"}>Location: </span><a href={projectID.location.url}>{projectID.location.name}</a></li>
    <li key="project_time_frame"><span className={style.label + " text-tiny"}>Time frame: </span>{projectID.time}</li>
    </ul>
    </div>
    
    <div className={style.content}>
    <p>This project was a part of a course about information and data. I ended up designing a digital product provided by The Norwegian Directorate of Health, teaching young girls about the menstrual cycle and how it might affect their mind and body.</p>
    
    <h3>The problem</h3> 
    <p>There is already a number of free apps on the market for tracking your period and learning more about your body. But as with various other apps, these apps are known to collect, retain and sometimes share some of their users' data. By providing a period tracker from The Norwegian Directorate of Health, young girls will learn more about the menstrual cycle and how it affects their mind and body, while their personal data are kept safe.</p>
    
    <BlockImage url={img_innsikt} alt="Articles about the privacy issues with period trackers." />
    
    <h3>The process</h3> 
    <p>The course started with a short explorative module where we were making data visualisations based on our own datasets. I collected data about my period, and tried to combine this with other data to look for unexpected connections, like using data for moon phases. It was most interesting when I tracked my cravings for several days, and discovered that I almost always craved sugar during the two weeks before my period.</p>
    
    <p>While doing some research about the menstrual cycle, I learned that this is normal. In the luteal phase, which is the weeks between ovulation and menstruation, the body needs more energy, and if you are not eating enough during the day, it is natural for the body to crave fast-acting carbs. I also  discovered that many young adults did not know about this, and never learned about it when they were younger.</p>
    
    <BlockImage url={img_datasett} width="1093" alt="Experiments with datasets" caption="The connection between moon phases, cravings, and my own menstrual cycle."/>
    
    <BlockImage url={img_prosess_1} width="1093"  alt="Data visualisations displaying the connection between moon phases and my menstrual cycle" caption="A data visualisation displaying the connection between the moon phases and my own menstrual cycle."/>
    
    <p>When I designed the interface, I started with using <a href="https://www.thecoremodel.com/" target="_blank" rel="external">The Core Model</a> to discover the most important functions. Based on that, I made a few flow charts and then sketched the wireframes on paper, playing with different layouts. When the flow and layout were ready, I designed the interface in Figma using the brand manual from The Norwegian Directorate of Health.</p>
    
    <BlockImage url={img_prosess_2} width="1093" alt="The Core Model" caption="The Core Model" />
    
    <BlockImage url={img_prosess_3} width="1093" alt="Flow charts" caption="Flow charts" />
    
    <BlockImage url={img_prosess_4} width="1093" alt="Wireframes on paper" caption="Wireframes on paper"/>
    
    <h3>The result</h3> 
    <p>The app "Mensn" helps you track your period so that you always know what is going on inside your body. With daily check-ins about your symptoms, you will learn how your current menstrual phase is affecting you, and what you can do to feel better.</p>
    
    <BlockImage url={img_proto_1} width="1093" alt="Prototype" />
    
    <BlockImageRow>
    <BlockImage url={img_resultat_1} alt="Resultat" />
    <BlockImage url={img_resultat_2} alt="Resultat" />
    </BlockImageRow>
    
    </div>
    </div>
    </article>
    
    <h2>Keep looking</h2>
    <div className={projectNav.container}>
    {projects.filter(project => project.id != '1').toReversed().map((project) => (
      <BlockProjects key={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} sizes="(min-width: 400px) 50vw, (min-width: 900px) 33vw, 100vw" />
    ))}
    </div>
    </>
  )
}