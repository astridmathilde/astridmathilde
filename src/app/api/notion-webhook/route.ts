import { revalidateTag } from 'next/cache'
import { verifyWebhookSignature } from '@notionhq/client'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const rawBody = await req.text()

  let body
  try {
    body = JSON.parse(rawBody)
  } catch {
    return new NextResponse('Invalid JSON body', { status: 400 })
  }

  if (body?.verification_token) {
    return NextResponse.json({ verified: true })
  }

  const webhookToken = process.env.NOTION_WEBHOOK_TOKEN

  if (webhookToken) {
    const signature = req.headers.get('x-notion-signature')
    if (!signature) {
      return new NextResponse('Missing X-Notion-Signature header', { status: 401 })
    }

    const isValidSignature = await verifyWebhookSignature({
      body: rawBody,
      signature,
      verificationToken: webhookToken,
    })

    if (!isValidSignature) {
      return new NextResponse('Invalid signature', { status: 401 })
    }
  }

  const type: string = body?.type ?? ''
  if (type.startsWith('page.')) {
    revalidateTag('singleEntry', null);
    revalidateTag('blikkjournal', null);
  }

  return NextResponse.json({ received: type })
}