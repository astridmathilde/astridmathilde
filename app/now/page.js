import Link from "next/link";
import { siteTitle } from "../layout";
import utils from "../../assets/scss/utils.module.scss";
import BlockIcon from "../../components/icon";

const pageTitle = 'My life lately';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/now'),
  title: pageTitle + ' – ' + siteTitle,
  openGraph: {
    images: 'https://astridmathilde.no/opengraph-image.jpg',
  }
}

export default function Colophon() {
  return (
    <>
    <h2>My life lately <BlockIcon>✨</BlockIcon></h2>
    <p>Continuing on my third year at <a href="https://aho.no/en" target="_blank" rel="external">The Oslo School of Architecture and Design</a> after having a break. In December I joined the startup <a href="https://www.gemz.fashion/" target="_blank" rel="external">Gemz</a> as their head of product and CTO, currently working on the MVP. I am trying to find a good way to balance this with my school projects. Otherwise I spend my days doing yoga, reading and listening to music. Also, I have started sharing my everyday observations in my own digital space called <a href="https://astrid.observer" rel="external" target="_blank"><em>blikkjournal</em></a>, a journal of things I have seen.</p>
    
    <p className={utils.small}>Last updated on February 9th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    <h3>Currently reading <BlockIcon>📚</BlockIcon></h3>
    <ul>
    <li><em>Transit</em>, Rachel Cusk</li>
    </ul>
    
    <h3>Currently watching <BlockIcon>📺</BlockIcon></h3>
    <ul>
    <li><em>Mad Men</em>, a TV series I started watching a long time ago, but never finished</li>
    <li><em>Gossip Girl</em>, my all-time guilty pleasure</li>
    </ul>
    
    <h3>Music on repeat <BlockIcon>🎧</BlockIcon></h3>
    <ul>
    <li>My playlist <a href="https://open.spotify.com/playlist/7D6gzqNJYc2NT3p5cGnc0O?si=3aca6687cfb84dd4" rel="external norefferer" target="_blank">"into the zone"</a></li>
    <li>The song <a href="hhttps://open.spotify.com/track/24l3mfIPWVa645a9LEwSHx?si=85274f6178d94d20" rel="external norefferer" target="_blank">"YOUtopia"</a> by Bring Me The Horizon</li>
    <li>The album <em><a href="https://open.spotify.com/album/4V0Xf9ER0qdXBY4erJEOSj?si=Igxf9IIORbyt3xXjQrSuYg" target="_blank">Future Falling</a></em> by The Album Leaf (it hits a spot)</li>
    </ul>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can <Link href="/colophon">read my thoughts about the usage of AI</Link>, find out <Link href="/about">more about me</Link>, or <Link href="/work/internship-fremtind">look at one of my projects</Link>.</p>
    </>
  )
}