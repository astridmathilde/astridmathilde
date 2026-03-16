import { siteTitle } from "../layout";
import utils from "../assets/scss/utils.module.scss"
import Link from "next/link";

const pageTitle = 'Current status';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/now'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Now() {
  return (
    <>
    <h2 className={utils.screen_reader_text}>Current status</h2>
    <p>Currently on my fourth year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a>. I recently lost someone important to me, but I think everything will be okay in the end. I am focusing on school assignments and personal projects, including the development of <a href="https://blikk.directory" rel="external" target="_blank">Blikkjournal</a> (my personal archive of moments and everyday observations) and the website you are browsing right now, and I have finally figured out a good way to structure this site and showcase my work. Music is more important to me than ever, and I appreciate that my life is still calm and quiet despite everything, and that spring is just around the corner.</p>
    
    <p className={utils.small}>Last updated on March 16th, 2026. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    <h3>Music on repeat</h3>
    <ul>
    <li>The album <em>God's Hand</em> by Hot Sugar</li>
    <li>The album <em>Born To Die</em> by Lana Del Ray</li>
    </ul>
    
    <h3>Currently reading</h3>
    <ul>
    <li><em>The Creative Act</em>, Rick Rubin</li>
    <li><em>Harry Potter and the Prisoner of Azkaban</em>, J.K Rowling</li>
    </ul>
    </>
  )
}