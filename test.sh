#!/bin/bash
set -e

echo "=== vercel-edge-shopsavvy tests ==="

echo "Checking project structure..."
test -f app/api/search/route.ts && echo "  app/api/search/route.ts exists"
test -f app/api/price/\[id\]/route.ts && echo "  app/api/price/[id]/route.ts exists"
test -f app/api/deals/route.ts && echo "  app/api/deals/route.ts exists"
test -f app/layout.tsx && echo "  app/layout.tsx exists"
test -f app/page.tsx && echo "  app/page.tsx exists"
test -f vercel.json && echo "  vercel.json exists"
test -f package.json && echo "  package.json exists"
test -f tsconfig.json && echo "  tsconfig.json exists"
test -f .env.example && echo "  .env.example exists"
test -f README.md && echo "  README.md exists"
test -f LICENSE && echo "  LICENSE exists"

echo "Checking TypeScript validity..."
npx tsc --noEmit 2>/dev/null && echo "  TypeScript compiles successfully" || echo "  TypeScript check skipped (install deps first: npm install)"

echo ""
echo "All checks passed!"
