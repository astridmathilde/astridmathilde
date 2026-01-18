import { siteTitle } from "./layout";
import Link from "next/link";
import style from "./assets/scss/home.module.scss";

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no'),
  title: siteTitle + " – Designer & developer",
  
}

export default function Index() {
  return (
    <div className={style.content}>
    <p>Heia! I am a designer and developer from Northern Norway, currently doing a master’s in interaction design in Oslo. With a background in graphic design, web design and development, I now specialise in designing digital products. I also enjoy writing things, <a href="https://blikk.directory" rel="external" title="my library of observations" target="_blank">taking photos of stuff</a>, and I have an interest for digital minimalism and hand-made websites.</p>
    
    <h3>Index</h3>
    <nav>
    <ul>
    <li><Link href="now">Now</Link></li>
    <li><Link href="resumee">Resumee</Link></li>
    <li><Link href="contact">Contact</Link></li>
    </ul>
    </nav>
    </div>
  );
}

