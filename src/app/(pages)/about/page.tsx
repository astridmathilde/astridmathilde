import Link from "next/link";
import type { Metadata } from "next";
import BlockRow from "../../../components/row";
import BlockColumn from "../../../components/column";
import BlockImage from "../../../components/image";

import utils from "../../../assets/scss/utils.module.scss";

const pageTitle = 'About me';

export const metadata: Metadata = {
  title: pageTitle,
}

import img from "../../../assets/img/about/astridmathilde.jpg";
import img2 from "../../../assets/img/about/clutter.jpg";

export default async function About() {
  return (
    <>
    <div className={utils.content_container}>
    <BlockRow align="center" height="auto">
    <BlockColumn width="70" order="0">
    <h2 className={utils.screen_reader_text}>Bio</h2>
    <p>I was born in April 1998 (currently 28) in the far north of Norway, and I have been passionate about design and technology ever since I learned to code as a child and discovered the joy of making websites. I enjoyed taking photos (especially of horses) and wanted to create my own space on the web to publish them, so I started coding websites from scratch on my family's computer.</p>
    
    <p>After finishing my second year of high school, I spent two years at an agency in Harstad as a trainee in graphic design – mainly designing and coding websites. Then I got a job in Tromsø as a web developer, and later as a designer and developer at a design studio. I stayed there for a couple of years, before I moved to Oslo and started studying design at The Oslo School of Architecture and Design.</p>
    
    <p>When I am not at school working on design projects or at home working on my personal projects, you can find me at the yoga studio, walking outside (preferably somewhere with trees) or maybe at some venue listening to rock, metal or electronic music.</p>
    </BlockColumn>
    
    <BlockColumn width="30" order="0">
    <BlockImage url={img} alt="Astrid Mathilde Boberg" width="1242" height="2021" sizes="(min-width: 670px) 50vw, 100vw" priority />
    </BlockColumn>
    </BlockRow>
    
    <BlockRow align="center" height="auto">
    <BlockColumn width="70" order="0">
    <p>Becoming a design student after spending four years working full-time, was a difficult transition. I felt torn between design and coding, and I was afraid that choosing design was the wrong decision. But being a design student has enabled me to start from scratch by challenging my existing knowledge and helping me rediscover the joy of creating. I learned to experiment without fear or any boundaries.</p>
        
    <p>Today I use coding as a design tool. I think it is especially valuable for prototyping in collaboration with generative AI, as it makes it possible to do faster design iterations and get real feedback from users.</p>
    
    <p>However, I personally still prefer to code by hand in the creative process and only get assistance from AI when needed. To ensure this, I never use coding editors with AI-tools enabled. This way I can use AI more intentionally and better stay in the creative process.</p>
    </BlockColumn>
    
    <BlockColumn width="30" order="-1">
    <BlockImage caption="My everyday carry as a design student" url={img2} alt="Everyday carry" width="1242" height="2021" sizes="(min-width: 670px) 50vw, 100vw" priority />
    </BlockColumn>
  
    </BlockRow>
    </div>
    </>
  )
}