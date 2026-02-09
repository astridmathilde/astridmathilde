import { siteTitle } from "./layout";
import Link from "next/link";
import style from "./assets/scss/home.module.scss";
import utils from "./assets/scss/utils.module.scss";

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no'),
  title: siteTitle + " – Designer & developer",
  description: "Heia! I am a designer and developer from Northern Norway, currently doing a master’s in interaction design in Oslo. With a background in graphic design, web design and development, I now specialise in designing digital products. I also enjoy writing things, and I have an interest for digital minimalism and web sustainability."
  
}

export default function Index() {
  return (
    <>
    <h2 className={utils.screen_reader_text}>Introduction</h2>
    <div className={style.content}>
    <p>Heia! I am a designer and developer from Northern Norway, <Link href="now" title="my current status">currently doing</Link> a master’s in interaction design in Oslo. With a background in graphic design, web design and development, I now specialise in designing digital products. I also enjoy writing things, <a href="https://blikk.directory" rel="external" title="my library of observations" target="_blank">taking photos of stuff</a>, and I have an interest for digital minimalism and <Link href="colophon" title="this site's climate footprint">web sustainability</Link>.</p>
    
    <h2>Index</h2>
    <nav>
    <ul>
    <li><Link href="about">About</Link></li>
    <li><Link href="now">Now</Link></li>
    <li><Link href="resumee">Resumee</Link></li>
    <li><Link href="contact">Contact</Link></li>
    </ul>
    </nav>
    </div>
    </>
  );
}

