import type { Metadata } from "next";
import { PortableText } from "next-sanity";
import { getColophon } from "../../../sanity/lib/data";

const pageTitle = 'Colophon';

export const metadata: Metadata = {
  title: pageTitle,
}

export default async function Colophon() {
  const colophon = await getColophon();

  return (
    <>
    <h2>{colophon.title}</h2>
    <PortableText value={colophon.content} />
  </>
)
}