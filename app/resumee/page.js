import { siteTitle } from "../layout";
import Link from "next/link";
import skillStyle from "../../assets/scss/components/skills.module.scss";
import BlockRow from "../../components/row";
import BlockDisplay from "../../components/display";
import BlockColumn from "../../components/column";
import BlockResumee from "../../components/resumee";
import BlockIcon from "../../components/icon";
import { experience, education, skills } from "../../data/resumee";

const pageTitle = 'My resumee';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/about'),
  title: pageTitle + ' – ' + siteTitle
}

export default function About() {
  return (
    <>
    <h3>Education</h3>
    {education.map((education) => (
      <BlockResumee key={education.id} position={education.grade} locationUrl={education.location.url} locationName={education.location.name} description={education.description} time={education.time} />
    ))}
    
    <h3>Experience</h3>
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
    <p>You can view the code for this site on <a href="https://github.com/astridmathilde/astridmathilde">Github</a>, or go back to the <Link href="/">home page</Link>.</p>
    </>
  )
}