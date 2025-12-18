import Link from "next/link";
import { siteTitle } from "../layout";
import utils from "../../assets/scss/utils.module.scss";

const pageTitle = 'Colophon';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/colophon'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Colophon() {
  return (
    <>
    <h2>Colophon</h2>
    <p>For the past 8 years this website has served as my own personal sandbox for learning new technologies and maintaining my coding skills. This version is using <a href="https://rsms.me/inter" target="_blank" rel="external">Inter Display</a> for the text, a JSON-file for the content, and <a href="https://nextjs.org/" target="_blank" rel="external">Next.js</a> to display everything on the front-end. The site is hosted on <a href="https://www.netlify.com/" target="_blank" rel="external">Netlify</a>.</p>
    
    <h3>AI usage</h3>
    <p>The code is written without an AI assistant, and I have not used AI for any of the content on this website.</p>
    
    <h3>Carbon footprint</h3>
    <p>The Internet requires energy, which leads to carbon emissions. According to <a href="https://www.websitecarbon.com/" target="_blank" rel="external">websitecarbon.com</a>, the average website produces about 0,5 gram of CO2 per page view. Normal websites are built each time they are loaded, but using modern technology we can make sure they are only built once. For this website, I have made sure to keep the design simple and minimize the amount of images and videos. The images are compressed and adapted to the screen resolution. Hosting the site on <a href="https://www.netlify.com/" target="_blank" rel="external">Netlify</a> means that it is running on sustainable energy. And of course, this site is using a modern Javascript framework (<a href="https://nextjs.org/" target="_blank" rel="external">Next.js</a>), which means it is only built when I publish any changes.</p>
    
    <p>The carbon footprint for this website is 0,10 gram of CO2 per page view.</p>
    <p className={utils.small}>Last checked on December 18th, 2025 by <a href="https://www.websitecarbon.com/website/astridmathilde-no/" target="_blank" rel="external noreferrer">websitecarbon.com</a>.<br />
    <em>Note: Apparently Netlify is no longer running on sustainable energy.<br />
    I am currently looking for a new hosting provider.</em></p>
    
    <h2>Further discovery</h2>
    <p>You can <a href="https://github.com/astridmathilde/portfolio/" target="_blank" rel="nofollow noreferrer">view the code on Github</a>, find out <Link href="/about">more about me</Link>, or look at <Link href="/work/kahos">one of my projects</Link>.</p>
    </>
  )
}