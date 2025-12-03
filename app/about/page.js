import { siteTitle } from "../layout";
import Link from "next/link";
import style from "../../assets/scss/components/skills.module.scss";
import utils from "../../assets/scss/utils.module.scss";
import BlockIcon from "../../components/icon";
import BlockRow from "../../components/row";
import BlockColumn from "../../components/column";
import BlockResumee from "../../components/resumee";
import BlockImage from "../../components/image";
import { experience, education, skills } from "../../data/resumee";

import portrait from "../../assets/img/about/astrid-mathilde-ny.jpeg";

const pageTitle = 'About me';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/about'),
  title: pageTitle + ' – ' + siteTitle,
  description: 'I was born in April 1998 (currently 27) and I have 6 years experience with digital design and coding after working for design agencies in Harstad, Tromsø and Oslo. In August 2021, I started doing a five year integrated masters in design at The Oslo School of Architecture and Design.'
}

export default function Resumee() {
  return (
    <>
    <BlockRow align="center">
    <BlockColumn>
    <h2 className={utils.screen_reader_text}>About me</h2>
    <p className={utils.display}>I was born in the far north of Norway in April 1998, but moved to Oslo in 2020 to start studying interaction design. Before that, I spent five years working with web design and development at digital agencies in Harstad and Tromsø, having started coding at the age of 10 and landing my first job as a web developer at 19. As a designer, I care about ethics, privacy and accessibility, but I believe that the climate impact of the digital products we create, is equally important.</p>
    </BlockColumn>
    <BlockColumn width="35">
    <BlockImage url={portrait} alt="Astrid Mathilde Andersen" width="1242" height="2021" sizes="(min-width: 670px) 50vw, 100vw" priority />
    </BlockColumn>
    </BlockRow>
    
    <h3>Education <BlockIcon>👩🏻‍🎓</BlockIcon></h3>
    {education.map((education) => (
      <BlockResumee key={education.id} position={education.grade} locationUrl={education.location.url} locationName={education.location.name} description={education.description} time={education.time} />
    ))}
    
    <h3>Work experience <BlockIcon>👩🏻‍💻</BlockIcon></h3>
    {experience.map((experience) => (
      <BlockResumee key={experience.id} position={experience.position} locationUrl={experience.location.url} locationName={experience.location.name} description={experience.description} time={experience.time} />
    ))}
    
    <div className={style.container}>
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
    <p>You can find out <Link href="/now">what I have been up to lately</Link>, look at <Link href="/work/mensn">one of my projects</Link>, or read <Link href="/colophon">my thoughts about the usage of generative AI</Link>.</p>
    
    </>
  )
}