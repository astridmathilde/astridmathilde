import type { Metadata } from "next";
import Image from "next/image";
import { PortableText } from "next-sanity";

import { getCurrentStatus, getNow } from "../../../sanity/lib/data";
import { getBlikkjournal } from "../../../lib/notion";
import DaysUntilSummer from "../../../components/days-until-summer/page";

import BlockRow from "../../../components/row";
import BlockColumn from "../../../components/column";
import BlockCurrentStatus from "../../../components/current-status";

import utils from "../../../assets/scss/utils.module.scss";
import styles from "../../../assets/scss/now.module.scss";

const pageTitle = 'Now';

export const metadata: Metadata = {
  title: pageTitle,
}

export default async function Now() {
  const status = await getCurrentStatus();
  const now = await getNow();
    
  // Latest image from Blikkjournal
  const [{ results: blikkjournal}] = await Promise.all([
    getBlikkjournal()
  ]);
  
  return (
    <>
    <h2><DaysUntilSummer /></h2>
    <BlockCurrentStatus content={status.content} date={now._updatedAt} />
    
    <BlockRow align="top" height="auto">
    <BlockColumn width="70" order="0">
    <PortableText value={now.content} />
    </BlockColumn>
    
    <BlockColumn width="30" order="0">
    {blikkjournal.map((entry) => {
      const entryId = entry.id;
      const imgUrl = `/api/images/${entryId}`;
      const title = (entry.properties.Title as any)?.title?.[0]?.plain_text;
      const location = (entry.properties.Place as any)?.select?.name;
      const city = (entry.properties.City as any)?.select?.name;
      const country = (entry.properties.Country as any)?.select?.name;
      
      return (
        <a key={entry.id} className={"lower-opacity " + styles.blikkjournal} href="https://blikk.directory" rel="external" target="_blank" title="See my blikkjournal!">
        <figure key={entryId}>
        <Image src={imgUrl} alt="Latest image from my blikkjournal" style={{maxWidth: "100%", height: "auto"}} width="600" height="600" />
        <figcaption>
        <p><span className={utils.screen_reader_text}>Location:</span> {title ? title : location + ", "  + city + ", " + country}</p>
        <p><span className={styles.link}>From Blikkjournal</span> <span aria-hidden="true">{"->"}</span></p>
        </figcaption>
        </figure>
        </a>
      )
    })
  }
  </BlockColumn>
  </BlockRow>
  
  <h2>Further discovery</h2>
  <PortableText value={now.further_discovery} />
  </>
)
}