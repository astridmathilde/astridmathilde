import { PortableText } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { SanityImageSource } from '@sanity/image-url'
import { client } from "../../../sanity/client";

import Link from "next/link";

const builder = createImageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source);
}

const entry_QUERY = `*[_type == "project" && slug.current == $slug][0]`;
const { projectId, dataset } = client.config();
const options = { next: { revalidate: 30 } };

export default async function ProjectPage({params}) {
  const entry = await client.fetch(entry_QUERY, await params, options);
  return (
    <>
    <Link href="/">
    ← Back to work
    </Link>
    <h2>{entry.title}</h2>
    <img
    src={urlFor(entry.thumbnail).url()}
    alt={entry.title}
    width="500"
    height="300"
    />
    {Array.isArray(entry.description) && <PortableText value={entry.description} />}
    </>
  );
}