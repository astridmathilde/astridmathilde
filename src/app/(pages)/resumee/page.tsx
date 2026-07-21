import type { Metadata } from "next";
import skillStyle from "../../../components/skills/style.module.scss";
import BlockResumee from "../../../components/resumee";
import { experience, education, skills, achievements } from "../../../data/resumee";

const pageTitle = 'My resumee';

export const metadata: Metadata = {
  title: pageTitle,
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
      <BlockResumee key={experience.id} position={experience.position} locationUrl={experience.location?.url} locationName={experience.location.name} description={experience.description} time={experience.time} />
    ))}   
    
    <h3>Awards</h3>
    {achievements.map((achievement) => (
      <BlockResumee key={achievement.id} position={achievement.title} locationUrl={achievement.location.url} locationName={achievement.location.name} description={achievement.description} time={achievement.year} />
    ))}
    
    <div className={skillStyle.container}>
    {skills.map((skills) => (
      <div>
      <h3>{skills.title}</h3>
      <ul>
      {skills.keywords.sort().map((keyword) => (
        <li key={keyword}>{keyword}</li>
      ))}
      </ul>
      </div>
    ))}
    </div>
    </>
  )
}