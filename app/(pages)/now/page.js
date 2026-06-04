import { siteTitle } from "../layout";
import utils from "../../assets/scss/utils.module.scss"

const pageTitle = 'Current status';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/now'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Now() {
  return (
    <>
    <h2>Today is May 14th, 2026. It is 100 days until summer.</h2>
    <p>Currently on my fourth year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a>. My life is calm and quiet right now. I am focusing on school assignments and personal projects, including the development of <a href="https://blikk.directory" rel="external" target="_blank">Blikkjournal</a> (my personal archive of moments and everyday observations) and the website you are browsing right now. Until I figure out a better way to structure this site and showcase my work, everything will be more simple and calm than usual, like my life lately :)</p>
    
    <p className={utils.small}>Last updated on February 9th, 2026. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    <h3>Music on repeat</h3>
    <ul>
    <li>Everything by rutherford</li>
    <li>The album <em>AM</em> by Arctic Monkeys</li>
    <li>The song "I saw you" by Fred again.. & Bibio</li>
    </ul>
    
    <h3>Currently reading</h3>
    <ul>
    <li><em>The Creative Act</em>, Rick Rubin</li>
    </ul>
    </>
  )
}