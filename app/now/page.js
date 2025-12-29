import { siteTitle } from "../layout";
import utils from "../../assets/scss/utils.module.scss"

const pageTitle = 'Current status';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/now'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Now() {
  return (
    <>
    <h2 className={utils.screen_reader_text}>Current status</h2>
    <p>Just finished the first semester of my fourth year at the <a href="https://aho.no/en" target="_blank" rel="external">Oslo School of Architecture and Design</a>, and I am finishing a freelance project I have been working with for the past year. I still have a minimalist phone, my beloved Punkt MP02, and I got rid of my iPhone after dreading it for months. Also, I am doing some work on my portfolio, figuring a better way to organise my projects here and making it easier to actually publish things I have done (which is why this site suddenly looks so empty).</p>
    
    <p className={utils.small}>Last updated on December 27th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    </>
  )
}