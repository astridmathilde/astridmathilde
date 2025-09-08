import Link from "next/link";
import { siteTitle } from "../layout";
import utils from "../../assets/scss/utils.module.scss";
import BlockIcon from "../../components/icon";

const pageTitle = 'Now';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/now'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Colophon() {
  return (
    <>
    <h2>What I am doing now <BlockIcon>👀</BlockIcon></h2>
    <p>Currently on my fourth year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a> after spending my summer working as a designer at <a href="https://variant.no" target="_blank" rel="external">Variant</a>. I recently switched to a dumb phone – a Punkt MP01 – and I really enjoy that. I have started spending more time in the stable, which I enjoy even more. Apart from that, I have a few small freelance projects going on!</p>
    
    <p className={utils.small}>Last updated on September 8th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    
    <h3>Currently reading <BlockIcon>📚</BlockIcon></h3>
    <ul>
    <li><em>Av måneskinn gror det ingenting</em>, Torborg Nerdreaas</li>
    <li><em>The Myth of Sisyphus</em>, Albert Camus</li>
    <li><em>The Creative Act</em>, Rick Rubin</li>
    <li><em>Design after Capitalism</em>, Matthew Wizinsky</li>
    </ul>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can find out <Link href="/about">more about me</Link>, see <Link href="/colophon">how I have reduced the carbon emissions of this website</Link> or <Link href="/work/internship-fremtind">look at one of my projects</Link>.</p>
    </>
  )
}