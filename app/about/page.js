import { siteTitle } from "../layout";
import Link from "next/link";
import skillStyle from "../../assets/scss/components/skills.module.scss";
import utils from "../../assets/scss/utils.module.scss";
import BlockRow from "../../components/row";
import BlockColumn from "../../components/column";
import BlockResumee from "../../components/resumee";
import BlockImage from "../../components/image";
import BlockIcon from "../../components/icon";
import { experience, education, skills } from "../../data/resumee";

import portrait from "../../assets/img/about/astridmathilde.jpeg";

const pageTitle = 'About me';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/about'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Resumee() {
  return (
    <>
    <h2 className={utils.screen_reader_text}>About me</h2>
    <BlockRow align="center">
    <BlockColumn>
    <p className={utils.display}>I am from Kvænangen/Skjervøy in Northern Norway, and moved to Oslo in 2020 to start studying interaction design. Before that, I spent five years working as a designer and web developer. When making digital products, I believe that the climate impact is just as important as privacy and accessibility.
    
    </p>
    </BlockColumn>
    
    <BlockColumn width="25">
    <BlockImage url={portrait} alt="Astrid Mathilde Boberg" width="1242" height="2021" sizes="(min-width: 670px) 50vw, 100vw" priority />
    </BlockColumn>
    </BlockRow>
    
    <h3>Education</h3>
    {education.map((education) => (
      <BlockResumee key={education.id} position={education.grade} locationUrl={education.location.url} locationName={education.location.name} description={education.description} time={education.time} />
    ))}
    
    <h3>Work experience</h3>
    {experience.map((experience) => (
      <BlockResumee key={experience.id} position={experience.position} locationUrl={experience.location.url} locationName={experience.location.name} description={experience.description} time={experience.time} />
    ))}   
    
    <div className={skillStyle.container}>
    <BlockRow>
    {skills.map((skills) => (
      <BlockColumn key={skills.title}>
      <h3>{skills.title}</h3>
      <ul>
      {skills.keywords.sort().map((keyword) => (
        <li key={keyword}>{keyword}</li>
      ))}
      </ul>
      </BlockColumn>
    ))}
    </BlockRow>
    </div>
    
    <h2>Contact <BlockIcon>🤝</BlockIcon></h2>
    <p>My email is <a href="mailto:heia@astridmathilde.no?subject=Heia!">heia@astridmathilde.no</a>, but you can also <a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="nofollow noreferrer">add me on LinkedIn</a>!</p>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can find out <Link href="/now">what I have been up to lately</Link>, look at <Link href="/work/mensn">one of my projects</Link>, or see <Link href="/colophon">how I have reduced the carbon emissions on this website.</Link></p>
    </>
  )
}