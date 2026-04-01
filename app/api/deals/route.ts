import { ShopSavvyDataAPI } from '@shopsavvy/sdk'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const sort = searchParams.get('sort') as 'hot' | 'new' | 'top-hour' | 'top-day' | 'top-week' | undefined
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined
  const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : undefined
  const category = searchParams.get('category') || undefined
  const retailer = searchParams.get('retailer') || undefined

  try {
    const client = new ShopSavvyDataAPI({
      apiKey: process.env.SHOPSAVVY_API_KEY!,
    })

    const deals = await client.getDeals({ sort, limit, offset, category, retailer })
    return NextResponse.json(deals)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
