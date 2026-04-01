# Vercel Edge + ShopSavvy

A Next.js template with API routes and edge functions for product search and price comparison using the [ShopSavvy Data API](https://shopsavvy.com/data).

## Setup

1. Install dependencies:

```bash
npm install
```

2. Set your API key:

```bash
cp .env.example .env.local
# Edit .env.local and add your API key (get one at shopsavvy.com/data)
```

3. Run locally:

```bash
npm run dev
```

4. Deploy to Vercel:

```bash
npx vercel
```

## API Routes

### `GET /api/search?q=airpods`

Search for products by keyword. Runs at the edge for low latency.

```bash
curl http://localhost:3000/api/search?q=airpods
```

### `GET /api/price/[id]`

Get current offers for a product by barcode, ASIN, or ShopSavvy ID.

```bash
curl http://localhost:3000/api/price/B0D1XD1ZV3
```

### `GET /api/deals`

Browse current shopping deals with optional sort and filter parameters.

```bash
curl "http://localhost:3000/api/deals?sort=hot&limit=10"
```

## Configuration

- `SHOPSAVVY_API_KEY` - Your ShopSavvy API key (required)
- Set in `.env.local` for local dev, or in Vercel project settings for production

## License

MIT
