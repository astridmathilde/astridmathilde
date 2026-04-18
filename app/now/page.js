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
    <p>On the final module of my fourth year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a>, doing a project in collaboration with <a href="https://www.siemens.com/en-us/products/emobility/"  target="_blank" rel="external">Siemens eMobility</a>. I am not doing any freelance work this year, which is giving me lots of time to work on my personal projects, for instance the development of <a href="https://blikk.directory" rel="external" target="_blank">blikkjournal</a> (my personal archive of moments and everyday observations), a project I have now put on hold to focus on the development of this website and actually showcasing some of my work. Also, I have started getting into the concept of owning the music I listen to, a very slow process, but I guess that is a part of the fun.</p>
    
    <p className={utils.small}>Last updated on April 18th, 2026. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    <h3>Music on repeat</h3>
    <ul>
    <li>The album <em>The Campfire Headphase</em> by Boards of Canada</li>
    <li>"Polynomial-C" by Aphex Twin</li>
    <li>The album <em>Swim Slowly</em> by Meltt</li>
    </ul>
    
    <h3>Currently reading</h3>
    <ul>
    <li><em>The Creative Act</em>, Rick Rubin</li>
    <li><em>Harry Potter and the Prisoner of Azkaban</em>, J.K Rowling</li>
    </ul>
    </>
  )
}