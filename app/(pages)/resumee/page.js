import { siteTitle } from "../../layout";
import skillStyle from "../../assets/scss/components/skills.module.scss";
import BlockRow from "../../components/row";
import BlockColumn from "../../components/column";
import BlockResumee from "../../components/resumee";
import { experience, education, skills, achievements } from "../../data/resumee";

const pageTitle = 'My resumee';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/resumee'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Resumee() {
  return (
    <>
    <h2>{pageTitle}</h2>
    <h3>Education</h3>
    {education.map((education) => (
      <BlockResumee key={education.id} position={education.grade} locationUrl={education.location.url} locationName={education.location.name} description={education.description} time={education.time} />
    ))}
    
    <h3>Experience</h3>
    {experience.map((experience) => (
      <BlockResumee key={experience.id} position={experience.position} locationUrl={experience.location.url} locationName={experience.location.name} description={experience.description} time={experience.time} />
    ))}
    
    <h3>Achievements</h3>
    {achievements.map((achievement) => (
      <BlockResumee key={achievement.id} position={achievement.title} locationUrl={achievement.location.url} locationName={achievement.location.name} time={achievement.year} description={achievement.description} />
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
    </>
  )
}