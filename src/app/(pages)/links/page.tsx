import type { Metadata } from "next";
import { PortableText } from "next-sanity";
import { getLinks } from "../../../sanity/lib/data";

export const metadata: Metadata = {
  title: 'Links',
}

export default async function Links() {
  const links = await getLinks();
  return (
    <>
    <h2>{links.title}</h2>
    <PortableText value={links.content} />
    </>
  )
}