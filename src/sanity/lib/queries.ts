import { defineQuery } from 'next-sanity'

export const ALL_PROJECTS = defineQuery(`*[
  _type == "project"
  && defined(slug.current)]|order(time.year desc)[0...12]{
    _id,
    short_title,
    slug,
    location,
    time,
    type,
    category,
    partner,
    thumbnail
  }`)
  
  export const RECENT_PROJECTS = defineQuery(`*[
  _type == "project"
  && defined(slug.current)]|order(time.year desc)[0...3]{
    _id,
    short_title,
    slug,
    location,
    time,
    type,
    category,
    partner,
    thumbnail
  }
`);