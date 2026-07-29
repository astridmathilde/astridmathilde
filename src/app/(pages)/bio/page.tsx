import { getBio } from "../../../sanity/lib/data";
import type { Metadata } from "next";
import { PortableText } from "next-sanity";

import BlockImage from "../../../components/image";
import BlockResumee from "../../../components/resumee";
import { experience, education, skills, achievements } from "../../../data/resumee";

import utils from "../../../assets/scss/utils.module.scss";
import skillStyle from "../../../components/skills/style.module.scss";

const pageTitle = 'Bio';

export const metadata: Metadata = {
  title: pageTitle,
}

export default async function About() {
  const bio = await getBio();
  const components = {
    types: {
      image: ({value}) => (
        <BlockImage value={value.asset._ref} caption={value.caption} />
      ),
    },
  }
  
  return (
    <>
    <h2 className={utils.screen_reader_text}>{bio.title}</h2>
    <PortableText value={bio.content} components={components} />

    <h2 className={utils.screen_reader_text}>Resumee</h2>

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