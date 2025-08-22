import Link from "next/link";
import { siteTitle } from "../layout";
import utils from "../../assets/scss/utils.module.scss";
import BlockIcon from "../../components/icon";

const pageTitle = 'Now';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/now'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Colophon() {
  return (
    <>
    <h2>What I am doing now <BlockIcon>👀</BlockIcon></h2>
    <p>Just started my fourth year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a>, it is weird how fast time flies. Also, I switched to a dumb phone (Punkt MP01) and it is going well so far. Found a old digital camera too, so that I can continue posting stuff in my <a href="https://blikk.directory" target="_blank" rel="external">blikkjournal</a>. My personal projects have been neglected this summer due to an internship and a freelance project, so I am looking forward to continue working on my own things while getting back into my routines. </p>
    
    <p className={utils.small}>Last updated on August 22th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    
    <h3>Currently reading <BlockIcon>📚</BlockIcon></h3>
    <ul>
    <li><em>The Design of Everyday Things</em>, Don Norman</li>
    <li><em>The Myth of Sisyphus</em>, Albert Camus</li>
    <li><em>The Creative Act</em>, Rick Rubin</li>
    <li><em>Design after Capitalism</em>, Matthew Wizinsky</li>
    <li><em>The Body Keeps The Score</em>, Bessel Van Der Kolk</li>
    </ul>
    
    <h3>Music on repeat <BlockIcon>🎧</BlockIcon></h3>
    <ul>
    <li>My playlist <a href="https://open.spotify.com/playlist/4kL8Rq4ZXppyp6RGCU7vB1?si=50321d2e062f42bf" rel="external norefferer" target="_blank"><em>slow</em></a></li>
    <li>The song <a href="https://open.spotify.com/track/7hGCCQkdyF1MX6uk339uBS?si=d756a982721b4f13" rel="external norefferer" target="_blank">"What Was That"</a> by Lorde</li>
    <li>The album <a href="https://open.spotify.com/album/69p42ovQdwmYPLUsAQpeNn?si=fAA2pGc_R3GMKosIs33WLg" target="_blank"><em>if i could make it go quiet</em></a> by girlinred</li>
    
    </ul>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can <Link href="/colophon">read my thoughts about the usage of AI</Link>, find out <Link href="/about">more about me</Link>, or <Link href="/work/internship-fremtind">look at one of my projects</Link>.</p>
    </>
  )
}