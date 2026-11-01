/**
* 
* Function for handling images from Notion API
* 
*/

import { getSingleBlikkjournal } from '../../../../lib/notion';
import { NextResponse, revalidateTag } from 'next/server';

export async function GET(request, { params }) {
  const { entryId } = await params;
  
  try {
    const entry = await getSingleBlikkjournal(entryId); 
    let imgUrl = entry.properties.Image.files[0]?.file.url;     
    let imageResponse = await fetch(imgUrl);

    if (!imageResponse.ok) {
      revalidateTag('singleEntry', null);
      const freshEntry = await getSingleBlikkjournal(entryId);
      imgUrl = freshEntry.properties.Image.files[0]?.file.url;
      imageResponse = await fetch(imgUrl);
    }
    
    const headers = {
      'Content-Type': imageResponse.headers.get('content-type'),
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=2592000, immutable'
    };
    
    return new NextResponse(imageResponse.body, { headers });
    
  } catch (error) {
    console.error("API proxy error:", error);
    return new NextResponse(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}
