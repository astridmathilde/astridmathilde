import { siteTitle } from "./layout";
import BlockDisplay from "../components/display";
import BlockIcon from "../components/icon";
import BlockRow from "../components/row";
import BlockColumn from "../components/column";
import BlockImage from "../components/image";
import utils from "../assets/scss/utils.module.scss";
import style from "../assets/scss/home.module.scss";
import portrait from "../assets/img/about/astridmathilde.jpeg";

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no'),
  title: siteTitle + " – Designer & developer",
  
}

export default function Index() {
  return (
    <div className={style.content}>
    <BlockDisplay location="home">Heia! I am a designer and developer from Northern Norway, currently living in Oslo as an MA design student. Having previously worked with graphic design, web design and development, I now specialize in designing digital products. I also enjoy writing things, <a href="https://blikk.directory" rel="external" title="my library of observations" target="_blank">taking photos of stuff</a> and I have a fascination for digital minimalism.</BlockDisplay>
    
    <BlockRow align="center">
    <BlockColumn>
    <h2>What I am doing now <BlockIcon>👀</BlockIcon></h2>
    <p>Just finished the first semester of my fourth year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a>, and I am finishing a freelance project I have been working with for the past year. I still have a minimalist phone, my beloved Punkt MP02, and I got rid of my iPhone after dreading it for months. Also, I am doing some work on my portfolio, figuring a better way to organise my projects here and making it easier to actually publish things I have done (which is why this site suddenly looks so empty).</p>
    
    <p className={utils.small}>Last updated on December 27th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    </BlockColumn>

    <BlockColumn width="25">
    <BlockImage url={portrait} alt="Astrid Mathilde Boberg" width="1242" height="2021" sizes="(min-width: 670px) 50vw, 100vw" priority />
    </BlockColumn>
    </BlockRow>

    <h2>Contact <BlockIcon>🤝</BlockIcon></h2>
    <p>My email is <a href="mailto:heia@astridmathilde.no?subject=Heia!">heia@astridmathilde.no</a>, but you can also <a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="nofollow noreferrer">add me on LinkedIn</a>!</p>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>I am sharing photos of my everyday observations on <a href="https://blikk.directory" rel="external" target="_bank">blikk.directory</a> and I just started going down rabbit holes at <a href="https://www.are.na/astrid-mathilde-boberg" rel="external" target="_blank">Are.na</a>. The code for this site is also available on my <a href="https://github.com/astridmathilde/astridmathilde">github</a>.</p>
    </div>
  );
}

