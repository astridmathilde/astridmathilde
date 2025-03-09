import Link from "next/link";
import { siteTitle } from "../layout";
import utils from "../../assets/scss/utils.module.scss";
import BlockIcon from "../../components/icon";

const pageTitle = 'My life lately';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/now'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Colophon() {
  return (
    <>
    <h2>My life lately <BlockIcon>✨</BlockIcon></h2>
    <p>Continuing on my third year at <a href="https://aho.no/en" target="_blank" rel="external">The Oslo School of Architecture and Design</a> after having a break. I just finished a pretty intense course in systems oriented design, now returning to the familiarity of designing interactions and experiences, through a project in collaboration with <a href="https://www.rodekors.no/en/" rel="external" target="_blank">Norwegian Red Cross</a>, which I will be working with until the end of May.</p>
    
    <p>I have started sharing my everyday observations in my own digital space called <a href="https://astrid.observer" rel="external" target="_blank"><em>blikkjournal</em></a>, it is still a work in progress, but the design is slowly getting into place. Otherwise, I am giving myself the rest I need, taking the time to focus on myself and my own projects.</p>
    
    <p className={utils.small}>Last updated on March 9th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    
    <h3>Currently reading <BlockIcon>📚</BlockIcon></h3>
    <ul>
    <li><em>Transit</em>, Rachel Cusk</li>
    <li><em>The Creative Act</em>, Rick Rubin</li>
    
    </ul>
    
    <h3>Music on repeat <BlockIcon>🎧</BlockIcon></h3>
    <ul>
    <li><a href="https://open.spotify.com/track/4KjNEsQ4jkqXwCmsn71a9p?si=42315f0e7b024dc4" rel="external norefferer" target="_blank">Lush</a> by Four Tet</li>
    <li>The album <a href="https://open.spotify.com/album/1g7HtsCvAtxvxhLVEHM9zm?si=qKQMHlBgRdWL38R86ECXHQ" target="_blank"><em>Autumn Bells</em></a> by Gidge</li>
    <li>My <a href="https://open.spotify.com/playlist/2S2SPH0K6QlOlJLwJEG9oR?si=98a27b42d2cf4049" rel="external norefferer" target="_blank">metalcore playlist</a></li>
    </ul>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can <Link href="/colophon">read my thoughts about the usage of AI</Link>, find out <Link href="/about">more about me</Link>, or <Link href="/work/internship-fremtind">look at one of my projects</Link>.</p>
    </>
  )
}