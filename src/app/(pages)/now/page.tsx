import type { Metadata } from "next";
import { getCurrentStatus, getNow } from "../../../sanity/lib/data";
import { PortableText } from "next-sanity";
import BlockCurrentStatus from "../../../components/current-status";
import utils from "../../../assets/scss/utils.module.scss";

const pageTitle = 'Now';

export const metadata: Metadata = {
  title: pageTitle,
}

export default async function Now() {
  const status = await getCurrentStatus();
  const now = await getNow();
  
  return (
    <>
    <h2>What I am doing now</h2>

    <BlockCurrentStatus content={status.content} date={now._updatedAt} />
    
    <PortableText value={now.content} />
    
    <h2>Further discovery</h2>
    <PortableText value={now.further_discovery} />
    </>
  )
}