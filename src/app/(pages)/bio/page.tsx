import { getBio } from "../../../sanity/lib/data";
import type { Metadata } from "next";
import Image from "next/image";
import { PortableText } from "next-sanity";

import BlockImage from "../../../components/image";
import BlockRow from "../../../components/row";
import BlockColumn from "../../../components/column";
import BlockResumee from "../../../components/resumee";
import { experience, education, skills, achievements } from "../../../data/resumee";

import utils from "../../../assets/scss/utils.module.scss";
import skillStyle from "../../../components/skills/style.module.scss";

import imgAbout from "../../../assets/img/about/astrid.jpg";

const pageTitle = 'Bio';

export const metadata: Metadata = {
  title: pageTitle,
}

export default async function About() {
  const bio = await getBio();
  const components = {
    types: {
      image: ({value}) => (
        <BlockImage alt={value.alt} value={value.asset._ref} caption={value.caption} />
      ),
    },
  }
  
  return (
    <>
    <h2 className={utils.screen_reader_text}>{bio.title}</h2>
    <BlockRow align="center" height="auto">
    <BlockColumn width="70" order="0">
    <PortableText value={bio.content} components={components} />
    </BlockColumn>
    <BlockColumn width="30" order="0">
    {bio.portrait ? (
      <BlockImage value={bio.portrait} caption="" alt="Astrid Mathilde Boberg" />
    ) : (
      <figure>
        <Image alt="Astrid Mathilde Boberg" src={imgAbout} style={{maxWidth: "100%", height: "auto"}} width="600" height="600" />
      </figure>
       
    ) }
    </BlockColumn>
    </BlockRow>
  
    <h3>Awards</h3>
    {achievements.map((achievement) => (
      <BlockResumee key={achievement.id} position={achievement.title} locationUrl={achievement.location.url} locationName={achievement.location.name} description={achievement.description} time={achievement.year} />
    ))}
    
    <div className={skillStyle.container}>
    {skills.map((skills) => (
      <div key={skills.id}>
      <h3>{skills.title}</h3>
      <ul>
      {skills.keywords.sort().map((keyword) => (
        <li key={keyword}>{keyword}</li>
      ))}
      </ul>
      </div>
    ))}
    </div>
    
    {bio.further_discovery ? (
      <>
      <h2 className={utils.sectionTitle}>Further discovery</h2>
      <PortableText value={bio.further_discovery} />
      </>
    ) : ""}
    </>
  )
}