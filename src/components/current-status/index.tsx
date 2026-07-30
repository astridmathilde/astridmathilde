import { PortableText } from "next-sanity";
import utils from "../../assets/scss/utils.module.scss";

export default function BlockCurrentStatus({content, date}) {
  return (
    <>
    <PortableText value={content} />
    <p className={utils.small + " color-subtle"}>Last updated on {new Date(date).toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric', timeZone: 'Europe/Oslo'})}. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    </>
  )
}