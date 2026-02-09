import { siteTitle } from "../layout";
import utils from "../assets/scss/utils.module.scss";
import BlockRow from "../components/row";
import BlockColumn from "../components/column";
import BlockImage from "../components/image";

const pageTitle = 'Contact';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/contact'),
  title: pageTitle + ' – ' + siteTitle
}

import img from "../assets/img/about/astridmathilde.jpeg";
export default function Contact() {
  return (
    <BlockRow>
    <BlockColumn>
    <h2 className={utils.screen_reader_text}>Contact</h2>
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
    </BlockColumn>

    <BlockColumn width="25">
      <BlockImage url={img} alt="Astrid Mathilde Boberg" />
    </BlockColumn>
    </BlockRow>
  )
}