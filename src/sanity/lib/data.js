import { cache } from 'react'
import { sanityFetch } from '../client'
import { ENTRY_QUERY } from './queries';

export const getEntry = cache(async (params) => {
  const result = await sanityFetch({
    query: ENTRY_QUERY,
    params: await params,
    revalidate: 60
  });
  return result;
})