import type { Metadata } from "next";
import Image from "next/image";
import { PortableText } from "next-sanity";

import { getCurrentStatus, getNow } from "../../../sanity/lib/data";
import { getBlikkjournal } from "../../../lib/notion";

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
  const today = new Date();
  
  function summerCount() {
    const dayTime = 1000 * 60 * 60 * 24;
    const currentYear = today.getFullYear();
    const nextYear = currentYear + 1;
    
    const dayBeforeSummer = new Date(currentYear + "-06-20").getTime();
    const startOfSummer = new Date(currentYear + "-06-21").getTime();
    const dayBeforeSummerEnds = new Date(currentYear + "-09-21").getTime();
    const endOfSummer = new Date(currentYear + "-09-22").getTime();
    const nextSummer = new Date (nextYear + "-06-21").getTime();
    
    // First day of summer 
    if (today.getTime() === startOfSummer) {
      return "This is the first day of summer";
    }
    
    // The day before summer starts
    else if (today.getTime() === dayBeforeSummer) {
      return "Tomorrow it is summer";
    }
    
    // The day before summer ends
    else if (today.getTime() === dayBeforeSummerEnds) {
      return "Tomorrow is the last day of summer";
    }
    
    // Last day of summer 
    else if (today.getTime() === endOfSummer) {
      return "This is the last day of summer";
    }
    
    // Days left of summer
    else if (today.getTime() >= startOfSummer && today.getTime() <= endOfSummer) {
      const numberOfDays = Math.round((endOfSummer - today.getTime()) / dayTime);
      
      return "It is " + numberOfDays + " days left of summer";
    }
    
    // Days until summer
    if (today.getTime() >= startOfSummer && today.getTime() <= endOfSummer) {
      const numberOfDays = Math.round((today.getTime() - startOfSummer) / dayTime);
      
      return "It is " + numberOfDays + " days until summer";
    }
    
    // Days until next summer 
    else {
      const numberOfDays = Math.round((nextSummer - today.getTime()) / dayTime);
      
      return "It is " + numberOfDays + " days until summer";
    }  
  }
  
  // Last image from Blikkjournal
  const [{ results: blikkjournal}] = await Promise.all([
    getBlikkjournal()
  ]);
  
  return (
    <>
    <h2>Today is {today.toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric', timeZone: 'Europe/Oslo'})}. {summerCount()}.</h2>
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