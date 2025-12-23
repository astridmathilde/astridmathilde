import Link from "next/link";
import { siteTitle } from "../layout";
import BlockIcon from "../../components/icon";
import utils from "../../assets/scss/utils.module.scss";

const pageTitle = 'Now';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/now'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Now() {
  return (
    <>
    <h2>What I am doing now</h2>
    <p>Just finished the first semester of my fourth year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a>, and I am wrapping up a freelance project I have been working with for the past year. I still have a minimalist phone, my beloved Punkt MP02, and I actually got rid of my iPhone after dreading it for months. I tried deleting social media, but for a while I was back on Instagram. Taking a break now, though. When I went to Northern Norway for Christmas, I found my old iPod Nano and that made me very happy.</p>
    
    <p className={utils.small}>Last updated on December 18th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    
    <h3>Currently reading</h3>
    <ul>
    <li><em>Barnet mitt</em>, Hanne Ørstavik</li>
    <li><em>Design after capitalism</em>, Matthew Wizinsky</li>
    </ul>
    
    <h3>Music on repeat</h3>
    <ul>
    <li>The album <em>Migration</em> by Bonobo</li>
    <li>The song "To believe" by The Cinematic Orchestra & Moses Sumney</li>
    </ul>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can <Link href="/colophon">check out this site's carbon footprint</Link>, find out <Link href="/about">more about me</Link>, or <Link href="/work/internship-fremtind">look at one of my projects</Link>.</p>
    </>
  )
}