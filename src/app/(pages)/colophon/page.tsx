import type { Metadata } from "next";
import utils from "../../../assets/scss/utils.module.scss";

const pageTitle = 'Colophon';

export const metadata: Metadata = {
  title: pageTitle,
}

export default function Colophon() {
  return (
    <>
    <h2>Colophon</h2>
    <p>For the past 10 years this website has served as my own personal sandbox for learning new technologies and maintaining my coding skills. This version is using <a href="https://rsms.me/inter" target="_blank" rel="external">Inter Display</a> for the text and <a href="https://nextjs.org/" target="_blank" rel="external">Next.js</a> to display everything on the front-end. The site is hosted on <a href="https://www.netlify.com/" target="_blank" rel="external">Netlify</a>. The code is written without an AI assistant, and I have not used AI for any of the content on this website.</p>
    
    <h3>Carbon footprint</h3>
    <p>The Internet requires energy, which leads to carbon emissions. According to <a href="https://www.websitecarbon.com/" target="_blank" rel="external">websitecarbon.com</a>, the average website produces about 0,5 gram of CO2 per page view. To reduce the carbon footprint of this website, I have made sure to keep the design simple to minimize the lines of code. I rarely use videos, and the images are compressed and adapted to the screen resolution. Hosting the site on <a href="https://www.netlify.com/" target="_blank" rel="external norefferer">Netlify</a> means that it is running on sustainable energy. Using a modern Javascript framework like <a href="https://nextjs.org/" target="_blank" rel="external">Next.js</a>, ensures that the site is only built once, unlike normal websites which is built every time they are loaded.</p>
    
    <p>Carbon footprint: 0,10 gram CO2 per page view.</p>
    <p className={utils.small + " color-subtle"}>Last checked on February 9th, 2026 by <a href="https://www.websitecarbon.com/website/astridmathilde-no/" target="_blank" rel="external noreferrer">websitecarbon.com</a>.<br />
    Note: Apparently Netlify is no longer running on sustainable energy and I am looking for a new hosting provider.</p>
    </>
  )
}