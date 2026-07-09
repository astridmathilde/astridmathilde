import { siteTitle } from "../layout";
import Link from "next/link";

import utils from "../../assets/scss/utils.module.scss";

const pageTitle = 'Contact';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/contact'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Contact() {
  return (
    <>
    <h2>Contact</h2>
    <p>My email is heia@astridmathilde.no, but you can also <a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="nofollow noreferrer">add me on LinkedIn</a>!</p>
    
    <h3>Links</h3>
    <nav>
    <ul>
    <li><a href="https://blikk.directory" rel="external" target="_blank">blikk.directory</a></li>
    <li><a href="https://www.are.na/astrid-mathilde-boberg" rel="external" target="_blank">Are.na</a></li>
    <li><a href="https://github.com/astridmathilde" rel="external" target="_blank">Github</a></li>
    <li><a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="nofollow noreferrer">LinkedIn</a></li>
    </ul>
    </nav>
    </>
  )
}