import type { Metadata } from "next";
import utils from "../../../assets/scss/utils.module.scss";

const pageTitle = 'Current status';

export const metadata: Metadata = {
  title: pageTitle,
}

export default function Now() {
  return (
    <>
    <h2>{pageTitle}</h2>
    <p>Currently on my fourth year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a>. Otherwise I am focusing on my personal projects, including the development of <a href="https://blikk.directory" rel="external" target="_blank">Blikkjournal</a> (my personal archive of moments and everyday observations) and the website you are browsing right now. After this I am planning to work on some previously neglected writings, and maybe get back into bookbinding.</p>
    
    <p className={utils.small + " color-subtle"}>Last updated on February 4th, 2026. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>

    <h3>Currently reading</h3>
    <ul>
      <li><em>The Creative Act</em>, Rick Rubin</li>
    </ul>

    <h3>Music on repeat</h3>
    <ul>
      <li>The album <em>Secret Life</em> by Fred again.. & Bibio</li>
      <li>The song "someday" by rutherford</li>
      <li>The band Arctic Monkeys</li>
    </ul>
    </>
  )
}