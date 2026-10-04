import type { Metadata } from "next";
import { PortableText } from "next-sanity";

import { getCurrentStatus, getNow } from "../../../sanity/lib/data";
import DaysUntilSummer from "../../../components/days-until-summer/page";
import Blikkjournal from "../../../components/blikkjournal";

import BlockRow from "../../../components/row";
import BlockColumn from "../../../components/column";
import BlockCurrentStatus from "../../../components/current-status";

const pageTitle = 'Now';

export const metadata: Metadata = {
  title: pageTitle,
}

export default async function Now() {
  const status = await getCurrentStatus();
  const now = await getNow(); 
 
  return (
    <>
    <h2><DaysUntilSummer /></h2>
    <BlockCurrentStatus content={status.content} date={now._updatedAt} />
    
    <BlockRow align="top" height="auto">
    <BlockColumn width="70" order="0">
    <PortableText value={now.content} />
    </BlockColumn>
    
    <BlockColumn width="30" order="0">
    <Blikkjournal />
    </BlockColumn>
    </BlockRow>
    
    <h2>Further discovery</h2>
    <PortableText value={now.further_discovery} />
    </>
  )
}