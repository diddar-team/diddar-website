import { NextResponse } from 'next/server';
import { PRICING_CONFIG } from '@/lib/pricing';

export const runtime = 'nodejs';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 550));
  return NextResponse.json(PRICING_CONFIG, {
    headers: { 'Cache-Control': 'no-store' },
  });
}
