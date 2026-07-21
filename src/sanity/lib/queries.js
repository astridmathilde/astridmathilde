import { defineQuery } from "next-sanity";

/* ENTRIES */
export const ENTRIES_QUERY = defineQuery(
  `*[_type == "project"
  && defined(slug.current)]|order(time.year desc){
  _id, short_title, slug, location, time, type, other_type, category, partner, thumbnail
  }`
);

export const ENTRY_QUERY = defineQuery(
  `*[_type == "project" && slug.current == $slug][0]`
);

export const RELATED_ENTRIES_QUERY = defineQuery(
  `*[_type == "project" && slug.current != $slug] | order(time.year desc){
    _id, short_title, slug, location, time, type, other_type, category, partner, thumbnail
  }`
);

export const ENTRY_TITLE_QUERY = defineQuery(
  `*[_type == "project" && slug.current == $slug][0]{
    short_title, title
    }`
);

/* PAGES */ 
export const INDEX_QUERY = defineQuery(
  `*[_type == "page" && slug.current == "index"][0]{
  intro, contact, further_discovery,
    project_selector[]->{
    _id, short_title, slug, location, time, type, category, partner, thumbnail
  }
    }`
);

export const NOW_QUERY = defineQuery(
  `*[_type == "page" && slug.current == "now"][0]`
);

/* MODULES */
export const STATUS_QUERY = defineQuery(
  `*[_type == "module" && slug.current == "now"][0]`
);