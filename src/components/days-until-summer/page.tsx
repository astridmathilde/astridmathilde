"use client";

import { useState, useEffect } from 'react'

const dateKeyFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Oslo',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

function dateKey(date: Date) {
  return dateKeyFormatter.format(date);
}

function dateKeyToUTC(key: string) {
  const [year, month, day] = key.split('-').map(Number);
  return Date.UTC(year, month - 1, day);
}

export default function DaysUntilSummer() {

  const [currentDay, setCurrentDay] = useState<Date>(new Date());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    const currentDay = new Date();
    setCurrentDay(currentDay);

    const currentYear = Number(dateKey(currentDay).slice(0, 4));
    setCurrentYear(currentYear);
  }, []);

  function summerCount() {
    const dayTime = 1000 * 60 * 60 * 24;
    const today = dateKey(currentDay);

    const dayBeforeSummer = currentYear + "-06-20";
    const startOfSummer = currentYear + "-06-21";
    const dayBeforeSummerEnds = currentYear + "-09-21";
    const endOfSummer = currentYear + "-09-22";
    const nextSummer = (currentYear + 1) + "-06-21";

    // First day of summer
    if (today === startOfSummer) {
      return "This is the first day of summer";
    }

    // The day before summer starts
    else if (today === dayBeforeSummer) {
      return "Tomorrow it is summer";
    }

    // The day before summer ends
    else if (today === dayBeforeSummerEnds) {
      return "Tomorrow is the last day of summer";
    }

    // Last day of summer
    else if (today === endOfSummer) {
      return "This is the last day of summer";
    }

    // Days left of summer
    else if (today >= startOfSummer && today <= endOfSummer) {
      const numberOfDays = (dateKeyToUTC(endOfSummer) - dateKeyToUTC(today)) / dayTime;

      return "It is " + numberOfDays + " days left of summer";
    }

    // Days until next summer
    else {
      const numberOfDays = (dateKeyToUTC(nextSummer) - dateKeyToUTC(today)) / dayTime;

      return "It is " + numberOfDays + " days until summer";
    }
  }
  
  return (
    <>
    today is {currentDay.toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric', timeZone: 'Europe/Oslo'})}. {summerCount()}.
    </>
  );
}