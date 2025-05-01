import Link from "next/link";
import { siteTitle } from "../layout";
import utils from "../../assets/scss/utils.module.scss";
import BlockIcon from "../../components/icon";

const pageTitle = 'Now';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/now'),
  title: pageTitle + ' – ' + siteTitle,
  description: 'Continuing on my third year at the Oslo School of Architecture and Design after having a break. My life currently revolves around a project I am doing in collaboration with Norwegian Red Cross, which I will be working with until the end of May. I am sharing my everyday observations in my own digital space called blikkjournal.'
}

export default function Colophon() {
  return (
    <>
    <h2>What I am doing now <BlockIcon>👀</BlockIcon></h2>
    <p>Continuing on my third year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a> after having a break. My life currently revolves around a project I am doing in collaboration with <a href="https://www.rodekors.no/en/" rel="external" target="_blank">Norwegian Red Cross</a>, which I will be working with until the end of May. I share my everyday observations in <a href="https://astrid.observer" rel="external" target="_blank">my own digital space</a>, and I enjoy listening to music and reading books.</p>
    
    <p className={utils.small}>Last updated on April 12th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    
    <h3>Currently reading <BlockIcon>📚</BlockIcon></h3>
    <ul>
    <li><em>Design med ord</em>, Susanne Egset</li>
    <li><em>The Myth of Sisyphus</em>, Albert Camus</li>
    <li><em>Transit</em>, Rachel Cusk</li>
    <li><em>The Creative Act</em>, Rick Rubin</li>
    </ul>
    
    <h3>Music on repeat <BlockIcon>🎧</BlockIcon></h3>
    <ul>
    <li>My playlist <a href="https://open.spotify.com/playlist/2S2SPH0K6QlOlJLwJEG9oR?si=33327c5ba3914c74" rel="external norefferer" target="_blank">CORE</a></li>
    <li><a href="https://open.spotify.com/track/6rYgEHuyhO064Lgj48qlIe?si=e3a2ff74732b4597" rel="external norefferer" target="_blank">I'll call you mine</a> by girlinred</li>
    <li>The album <a href="https://open.spotify.com/album/6PrbSnRK23zsgmgoMeBIoj?si=X1zWkxHCSmOd_wv9eXezLw" target="_blank"><em>ROTATIONS</em></a> by The Album Leaf</li>
    
    </ul>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can <Link href="/colophon">read my thoughts about the usage of AI</Link>, find out <Link href="/about">more about me</Link>, or <Link href="/work/internship-fremtind">look at one of my projects</Link>.</p>
    </>
  )
}