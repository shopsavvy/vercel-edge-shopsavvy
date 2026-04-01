import { ShopSavvyDataAPI } from '@shopsavvy/sdk'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  if (!id) {
    return NextResponse.json(
      { success: false, error: 'Missing product identifier' },
      { status: 400 }
    )
  }

  try {
    const client = new ShopSavvyDataAPI({
      apiKey: process.env.SHOPSAVVY_API_KEY!,
    })

    const offers = await client.getCurrentOffers(id)
    return NextResponse.json(offers)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
