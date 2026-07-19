import { defineQuery } from "next-sanity";

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

/* INDEX */ 
export const INDEX_INTRO = defineQuery(
  `*[_type == "module" && slug.current == "intro"][0]`
);

export const INDEX_ENTRIES = defineQuery(
  `*[_type == "module" && slug.current == "work"][0]{
  project_selector[]->{
    _id, short_title, slug, location, time, type, category, partner, thumbnail
  }
}`
);

export const NOW = defineQuery(
  `*[_type == "module" && slug.current == "now"][0]`
);

export const CONTACT = defineQuery(
  `*[_type == "module" && slug.current == "contact"][0]`
);

export const INDEX_DISCOVERY = defineQuery(
  `*[_type == "page" && slug.current == "index"][0]`
);

