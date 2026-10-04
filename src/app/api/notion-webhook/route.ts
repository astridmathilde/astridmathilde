import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = JSON.parse(await req.text())

    const type: string = body?.type ?? ''
    if (type.startsWith('page.')) {
      revalidateTag('singleEntry', null)
      revalidateTag('blikkjournal', null)
    }

    return NextResponse.json({
      received: true,
      event_type: type,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ received: false }, { status: 400 })
  }
}