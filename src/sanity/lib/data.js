import { cache } from 'react'
import { sanityFetch } from '../client'
import { ENTRY_QUERY, ENTRIES_QUERY, RELATED_ENTRIES_QUERY } from './queries';

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