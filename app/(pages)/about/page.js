import Link from "next/link";

import { siteTitle } from "../../layout";

import BlockTitle from "../../components/page_title";
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
import img_2 from "../../assets/img/about/astrid.jpeg";
import img_rost from "../../assets/img/about/rost-tromso.jpg";
import img_aho from "../../assets/img/about/mess-at-a-desk.jpg";


export default async function About() {
  return (
    <>
    <BlockTitle>Bio</BlockTitle>
    <p>I am from Kvænangen/Skjervøy in Northern Norway, and I have been passionate about design and technology ever since I learned to code as a child and discovered the joy of making websites. I also enjoy writing things, <a href="https://blikk.directory" rel="external" title="my library of observations" target="_blank">taking photos of stuff</a>, and I have an interest for digital minimalism and <Link href="colophon" title="this site's climate footprint">web sustainability</Link>.</p>

    <BlockRow>
    <BlockColumn width="70">
    <h3>Background</h3>
    <p>After my second year of high school, I spent two years at an agency in Harstad as a trainee in graphic design – mainly designing and coding websites. Then I got a job in Tromsø as a web developer, and later as a designer and developer at a design studio. I stayed there for a couple of years, before I wanted to do something else, and that is how I ended up in Oslo doing an integrated master's in design at the <a href="https://www.aho.no/english/" rel="external" target="_blank">Oslo School of Architecture and Design</a>.</p>
    </BlockColumn>
    
    <BlockColumn width="30">
    <BlockImage url={img} alt="Astrid Mathilde Boberg" width="1242" height="2021" sizes="(min-width: 670px) 50vw, 100vw" priority />
    </BlockColumn>
    </BlockRow>
    
    <BlockRow>
    <BlockColumn width="30">
    <BlockImage url={img_clutter} alt="Astrid Mathilde Boberg" width="1242" height="2021" sizes="(min-width: 670px) 50vw, 100vw" priority />
    </BlockColumn>
    
    <BlockColumn width="70">
    <h3>Design vs. coding</h3>
    <p>Becoming a design student after spending four years working full-time, was a difficult transition and something I regretted for a while. I felt torn between the urge to design and the need to code, and I was convinced that choosing design was the wrong decision. But over time, I have found peace with it, and I never stopped coding either.</p>
    
    <p>I would not have chosen differently today. Being a design student has enabled me to start from scratch, unlearn what I knew from before and rediscover the joy of creating. It has given me time to reflect on who I am as a designer, what kind of work I want to do, and how I can use my coding skills as an asset in design processes.</p>
    </BlockColumn>
    </BlockRow>
    </>
  )
}