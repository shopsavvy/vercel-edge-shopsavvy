import { ShopSavvyDataAPI } from '@shopsavvy/sdk'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  if (!query) {
    return NextResponse.json(
      { success: false, error: 'Missing required query parameter: q' },
      { status: 400 }
    )
  }

  const limit = parseInt(searchParams.get('limit') || '10')
  const offset = parseInt(searchParams.get('offset') || '0')

  try {
    const client = new ShopSavvyDataAPI({
      apiKey: process.env.SHOPSAVVY_API_KEY!,
    })

    const results = await client.searchProducts(query, { limit, offset })
    return NextResponse.json(results)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
