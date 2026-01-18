import { siteTitle } from "../layout";
import utils from "../assets/scss/utils.module.scss"

const pageTitle = 'Current status';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/now'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Now() {
  return (
    <>
    <h2 className={utils.screen_reader_text}>Current status</h2>
    <p>Currently on my fourth year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a>. I am focusing on my personal projects, including the website <a href="https://blikk.directory" rel="external" target="_blank">blikkjournal</a> and the one you are browsing right now, figuring out a better way to showcase my work. Otherwise I still have a minimalistic phone – my beloved Punkt MP02 – and when I went to Northern Norway for Christmas, I found my old iPod Nano in the basement of my dad's house, and that made me very happy.</p>
    
    <p className={utils.small}>Last updated on January 18th, 2026. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>

    <h3>Currently reading</h3>
    <ul>
      <li><em>The Creative Act</em>, Rick Rubin</li>
    </ul>

    <h3>Music on repeat</h3>
    <ul>
      <li>The album <em>carpool etiquette</em> by rutherford</li>
      <li>The song "How Soon is Now?" by The Smiths</li>
    </ul>
    </>
  )
}