export const metadata = {
  title: 'ShopSavvy API',
  description: 'Product search and price comparison API powered by ShopSavvy',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
