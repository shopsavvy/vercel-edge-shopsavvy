export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: '600px' }}>
      <h1>ShopSavvy API</h1>
      <p>Product search and price comparison API powered by ShopSavvy.</p>
      <h2>Endpoints</h2>
      <ul>
        <li><code>GET /api/search?q=airpods</code> - Search products</li>
        <li><code>GET /api/price/B0D1XD1ZV3</code> - Get current offers</li>
        <li><code>GET /api/deals</code> - Browse deals</li>
      </ul>
    </main>
  )
}
