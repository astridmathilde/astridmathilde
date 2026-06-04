import Link from "next/link";

import { siteTitle } from "../layout";

import BlockRow from "../../components/row";
import BlockColumn from "../../components/column";
import BlockImage from "../../components/image";

import utils from "../../assets/scss/utils.module.scss";

const pageTitle = 'About me';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/about'),
  title: pageTitle + ' – ' + siteTitle
}

import img from "../../assets/img/about/astriiid.jpg";
import img_clutter from "../../assets/img/about/clutter.jpg";

export default async function About() {
  return (
    <>
    <BlockRow align="center">
    <BlockColumn width="70">
    <h2>Bio</h2>
    <p>I am from Kvænangen/Skjervøy in Northern Norway, and I have been passionate about design and technology ever since I learned to code as a child and discovered the joy of making websites.</p>
    
    <p>After my second year of high school, I spent two years at an agency in Harstad as a trainee in graphic design – mainly designing and coding websites. Then I got a job in Tromsø as a web developer, and later as a designer and developer at a design studio. I stayed there for a couple of years, before I wanted to do something else, and that is how I ended up in Oslo doing an integrated master's in design at the <a href="https://www.aho.no/english/" rel="external" target="_blank">Oslo School of Architecture and Design</a>.</p>
    </BlockColumn>
    
    <BlockColumn width="30">
    <BlockImage url={img} alt="Astrid Mathilde Boberg" width="1242" height="2021" sizes="(min-width: 670px) 50vw, 100vw" priority />
    </BlockColumn>
    </BlockRow>
    
    <BlockRow align="center">
    <BlockColumn width="30">
    <BlockImage caption="My everyday carry as a design student" url={img_clutter} alt="Everyday carry" width="1242" height="2021" sizes="(min-width: 670px) 50vw, 100vw" priority />
    </BlockColumn>
    
    <BlockColumn width="70">
    <p>Becoming a design student after spending four years working full-time, was a difficult transition. I felt torn between design and coding, and in the beginning I was convinced that choosing design was the wrong decision. It took almost a year before I let myself have fun, and finally it felt like I belonged.</p>
    
    <p>Being a design student has enabled me to start from scratch, challenge my existing knowledge and rediscover the joy of creating. It has given me time to reflect on who I am as a designer, what kind of work I want to do, and how I can use my coding skills as an asset in design processes.</p>
    
    <p>Today I view coding as a valuable design tool, especially when used for prototyping in collaboration with generative AI.</p>
    
    </BlockColumn>
    </BlockRow>
    </>
  )
}