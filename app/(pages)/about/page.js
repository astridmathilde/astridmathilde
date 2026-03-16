import { siteTitle } from "../../layout";

import BlockRow from "../../components/row";
import BlockColumn from "../../components/column";
import BlockImage from "../../components/image";

import utils from "../assets/scss/utils.module.scss";

const pageTitle = 'About me';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/about'),
  title: pageTitle + ' – ' + siteTitle
}

import img from "../assets/img/about/astridmathilde.jpeg";



export default async function About() {
  return (
    <>
    <h2 className={utils.screen_reader_text}>About me</h2>
    <BlockRow align="center">
    <BlockColumn width="75">
    <p>I was born in April 1998 (currently 27 years old) in the far north of Norway, and I have been passionate about design and technology ever since I learned to code as a child. I enjoyed taking photos (especially of horses) and wanted to create my own space on the web to publish them, so I started coding websites from scratch on my family's computer.</p>

    <p>After finishing my second year of high school, I spent two years at a design and marketing agency in Harstad as a trainee in graphic design. After this, I started working as a web designer and developer in Tromsø. I worked there for a couple of years before I moved to Oslo and started studying design at <a href="https://www.aho.no/english/" rel="external" target="_blank">The Oslo School of Architecture and Design</a>.</p>
    
    <p>When I am not at school working on design projects or at home working on my personal projects, you can find me outside with friends, at the yoga studio, or maybe at some venue listening to rock, metal or electronic music.</p>
    </BlockColumn>
    
    <BlockColumn width="25">
    <BlockImage url={img} alt="Astrid Mathilde Boberg" width="1242" height="2021" sizes="(min-width: 670px) 50vw, 100vw" priority />
    </BlockColumn>
    </BlockRow>
    </>
  )
}