import { Client } from "@notionhq/client";
import { unstable_cache } from "next/cache";

const notion = new Client({
  auth: process.env.NOTION_KEY,
  notionVersion: "2025-09-03",
});

const dataSourceId = process.env.NOTION_DATA_SOURCE_ID;

export async function getBlikkjournal() {  
  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    sorts: [{ property: "Time", direction: "descending" }],
    page_size: 1,
  });
  
  return {
    results: response.results,
  };
}

export async function getSingleBlikkjournal(pageId) {
  return unstable_cache(
    async () => {
      return notion.pages.retrieve({ page_id: pageId });
    },
    [pageId],
    { tags: ['singleEntry'] }
  )();
}