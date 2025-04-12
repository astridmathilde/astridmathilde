import Link from "next/link";
import { siteTitle } from "../layout";
import utils from "../../assets/scss/utils.module.scss";
import BlockIcon from "../../components/icon";

const pageTitle = 'Now';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/now'),
  title: pageTitle + ' – ' + siteTitle,
  description: 'Continuing on my third year at the Oslo School of Architecture and Design after having a break. My life currently revolves around a project I am doing in collaboration with Norwegian Red Cross, which I will be working with until the end of May. I am sharing my everyday observations in my own digital space called blikkjournal, and I just joined Bluesky.'
}

export default function Colophon() {
  return (
    <>
    <h2>What I am doing now <BlockIcon>👀</BlockIcon></h2>
   <p>Continuing on my third year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a> after having a break. My life currently revolves around a project I am doing in collaboration with <a href="https://www.rodekors.no/en/" rel="external" target="_blank">Norwegian Red Cross</a>, which I will be working with until the end of May. I share my everyday observations in <a href="https://astrid.observer" rel="external" target="_blank">my own digital space called <em>blikkjournal</em></a>, and I just joined <a rel="external nofollow noreferrer" href="https://bsky.app/profile/astridmathilde.no" target="_blank">Bluesky</a>.</p>
    
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
    <li><a href="https://open.spotify.com/track/3T7Y3RNWqJJTnhoIGR7RCp?si=a24983d861d54a92" rel="external norefferer" target="_blank">Sinkies</a> by Hot Sugar</li>
    <li>The album <a href="https://open.spotify.com/album/2ZAtvqwMrgnwVu0cyBygfk?si=NwcGtLZQSDqcpGkgodXpHA" target="_blank"><em>Hand Cranked</em></a> by Bibio</li>
    <li>My playlist <a href="https://open.spotify.com/playlist/7D6gzqNJYc2NT3p5cGnc0O?si=65161f84577c4e2f" rel="external norefferer" target="_blank">into the zone</a></li>
    </ul>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can <Link href="/colophon">read my thoughts about the usage of AI</Link>, find out <Link href="/about">more about me</Link>, or <Link href="/work/internship-fremtind">look at one of my projects</Link>.</p>
    </>
  )
}