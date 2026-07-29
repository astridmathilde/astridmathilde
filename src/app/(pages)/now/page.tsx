import type { Metadata } from "next";
import { getCurrentStatus, getNow } from "../../../sanity/lib/data";
import { PortableText } from "next-sanity";
import BlockCurrentStatus from "../../../components/current-status";
import { timeEnd } from "node:console";
import { newDraftFrom } from "sanity";

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
    
    const dayBeforeSummer = new Date(currentYear + "-06-20");
    const startOfSummer = new Date(currentYear + "-06-21");
    const dayBeforeSummerEnds = new Date(currentYear + "-09-21");
    const endOfSummer = new Date(currentYear + "-09-22");
    const nextSummer = new Date (nextYear + "-06-21");
    
    // First day of summer 
    if (today.getTime() === startOfSummer.getTime()) {
      return "This is the first day of summer";
    }
    
    // The day before summer starts
    else if (today.getTime() === dayBeforeSummer.getTime()) {
      return "Tomorrow it is summer";
    }
    
    // The day before summer ends
    else if (today.getTime() === dayBeforeSummerEnds.getTime()) {
      return "Tomorrow is the last day of summer";
    }
    
    // Last day of summer 
    else if (today.getTime() === endOfSummer.getTime()) {
      return "This is the last day of summer";
    }
    
    // Days left of summer
    else if (today >= startOfSummer && today <= endOfSummer) {
      const numberOfDays = Math.round((endOfSummer - today) / dayTime);
      
      return "It is " + numberOfDays + " days left of summer";
    }
    
    // Days until summer
    if (today >= startOfSummer && today <= endOfSummer) {
      const numberOfDays = Math.round((today - startOfSummer) / dayTime);
      
      return "It is " + numberOfDays + " days until summer";
    }
    
    // Days until next summer 
    else {
      const numberOfDays = Math.round((nextSummer - today) / dayTime);
      
      return "It is " + numberOfDays + " days until summer";
    }  
  }
  
  
  return (
    <>
    <h2>Today is {today.toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric', timeZone: 'Europe/Oslo'})}. {summerCount()}.</h2>
    <BlockCurrentStatus content={status.content} date={now._updatedAt} />
    
    <PortableText value={now.content} />
    
    <h2>Further discovery</h2>
    <PortableText value={now.further_discovery} />
    </>
  )
}