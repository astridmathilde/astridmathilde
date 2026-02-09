import { siteTitle } from "../layout";
import Link from "next/link";

import BlockRow from "../components/row";
import BlockColumn from "../components/column";
import BlockImage from "../components/image";

import utils from "../assets/scss/utils.module.scss";

const pageTitle = 'About me';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/about'),
  title: pageTitle + ' – ' + siteTitle
}

import img from "../assets/img/about/astridmathilde.jpeg";

export default function About() {
  return (
    <>
    <h2 className={utils.screen_reader_text}>About me</h2>
    <BlockRow>
    <BlockColumn>
    <p>I am from Kvænangen/Skjervøy in Northern Norway and have always been passionate about design and technology. As a child, I enjoyed taking photos (especially of horses), and that sparked my interest in design and technology when I learned to code at 10 in order to publish my photos on my own website.</p>
    
    <p>I started my first job as a web designer and developer at 19, after finishing my craft certificate in graphic design. I worked in Tromsø for a couple of years before I moved to Oslo to become a full-time design student at <a href="https://www.aho.no/english/" rel="external" target="_blank">The Oslo School of Architecture and Design</a>.</p>
    
    <p>When I am not at school working on design projects or at home working on my personal projects, you can find me in the stable, at the yoga studio or maybe at some venue listening to electronic music.</p>
    </BlockColumn>
    
    <BlockColumn width="29">
    <BlockImage url={img} alt="Astrid Mathilde Boberg" width="1242" height="2021" sizes="(min-width: 670px) 50vw, 100vw" priority />
    </BlockColumn>
    </BlockRow>
    </>
  )
}