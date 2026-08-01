"use client";

import { useState, useEffect } from 'react'

export default function DaysUntilSummer() {

  const [currentDay, setCurrentDay] = useState<Date>(new Date());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    const currentDay = new Date();
    setCurrentDay(currentDay);

    const currentYear = currentDay.getFullYear();
    setCurrentYear(currentYear);
  }, []);
  
  function summerCount() {
    const dayTime = 1000 * 60 * 60 * 24;
    const nextYear = currentYear + 1;
    
    const dayBeforeSummer = new Date(currentYear + "-06-20").getTime();
    const startOfSummer = new Date(currentYear + "-06-21").getTime();
    const dayBeforeSummerEnds = new Date(currentYear + "-09-21").getTime();
    const endOfSummer = new Date(currentYear + "-09-22").getTime();
    const nextSummer = new Date (nextYear + "-06-21").getTime();
    
    // First day of summer 
    if (currentDay.getTime() === startOfSummer) {
      return "This is the first day of summer";
    }
    
    // The day before summer starts
    else if (currentDay.getTime() === dayBeforeSummer) {
      return "Tomorrow it is summer";
    }
    
    // The day before summer ends
    else if (currentDay.getTime() === dayBeforeSummerEnds) {
      return "Tomorrow is the last day of summer";
    }
    
    // Last day of summer 
    else if (currentDay.getTime() === endOfSummer) {
      return "This is the last day of summer";
    }
    
    // Days left of summer
    else if (currentDay.getTime() >= startOfSummer && currentDay.getTime() <= endOfSummer) {
      const numberOfDays = Math.round((endOfSummer - currentDay.getTime()) / dayTime);
      
      return "It is " + numberOfDays + " days left of summer";
    }
    
    // Days until summer
    if (currentDay.getTime() >= startOfSummer && currentDay.getTime() <= endOfSummer) {
      const numberOfDays = Math.round((currentDay.getTime() - startOfSummer) / dayTime);
      
      return "It is " + numberOfDays + " days until summer";
    }
    
    // Days until next summer 
    else {
      const numberOfDays = Math.round((nextSummer - currentDay.getTime()) / dayTime);
      
      return "It is " + numberOfDays + " days until summer";
    }  
  }
  
  return (
    <>
    today is {currentDay.toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric', timeZone: 'Europe/Oslo'})}. {summerCount()}.
    </>
  );
}