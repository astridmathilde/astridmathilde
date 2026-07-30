import { cache } from 'react'
import { sanityFetch } from '../client'
import { ENTRY_QUERY, ENTRIES_QUERY, RELATED_ENTRIES_QUERY, INDEX_QUERY, NOW_QUERY, BIO_QUERY, STATUS_QUERY, LINKS_QUERY } from './queries';

/* ENTRIES */
export const getEntry = cache(async (params) => {
  const result = await sanityFetch({
    query: ENTRY_QUERY,
    params: await params,
    revalidate: 60
  });
  return result;
});

export const getAllEntries = cache(async () => {
  const result = await sanityFetch({
    query: ENTRIES_QUERY,
    tags: ['entries']
  });
  return result;
});

export const getMoreEntries = cache(async (params) => {
  const result = await sanityFetch({
    query: RELATED_ENTRIES_QUERY,
    params: await params,
    tags: ['entries']
  });
  return result;
});

/* PAGES */
export const getIndex = cache(async () => {
  const result = await sanityFetch({
    query: INDEX_QUERY,
    tags: ['index']
  });
  return result;
});

export const getNow = cache(async () => {
  const result = await sanityFetch({
    query: NOW_QUERY,
    tags: ['now']
  });
  return result;
});


export const getBio = cache(async () => {
  const result = await sanityFetch({
    query: BIO_QUERY,
    tags: ['bio']
  });
  return result;
});

/* MODULES */
export const getCurrentStatus = cache(async () => {
  const result = await sanityFetch({
    query: STATUS_QUERY,
    tags: ['status']
  });
  return result;
});

export const getLinks = cache(async () => {
  const result = await sanityFetch({
    query: LINKS_QUERY,
    tags: ['links']
  });
  return result;
});