import { NextResponse } from 'next/server';
import { validateWaitlist, waitlistSchema } from '@/lib/waitlist';

export const runtime = 'nodejs';

const hits = new Map<string, { count: number; first: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 6;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.first > WINDOW_MS) {
    hits.set(ip, { count: 1, first: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please try again shortly.' },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body.' },
      { status: 400 },
    );
  }

  const parsed = waitlistSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: parsed.error.issues[0]?.message ?? 'Please check your details.',
      },
      { status: 422 },
    );
  }

  const data = parsed.data;

  if (data.company && data.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const businessError = validateWaitlist(data);
  if (businessError) {
    return NextResponse.json(
      { ok: false, error: businessError },
      { status: 422 },
    );
  }

  const payload = {
    kind: data.kind,
    name: data.name ?? '',
    email: data.email,
    track: data.track ?? '',
    level: data.level ?? '',
    mode: 'online',
    timezone: data.timezone ?? '',
    goal: data.goal ?? '',
    hearAbout: data.hearAbout ?? '',
    referrerName: data.hearAbout === 'friend' ? (data.referrerName ?? '') : '',
    source: 'website',
    timestamp: new Date().toISOString(),
  };

  const webhook = process.env.WAITLIST_WEBHOOK_URL;

  if (!webhook) {
    console.info('[waitlist] no WAITLIST_WEBHOOK_URL set — logging only:', payload);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),

      redirect: 'follow',
    });
    if (!res.ok) {
      throw new Error(`webhook responded ${res.status}`);
    }
  } catch (err) {
    console.error('[waitlist] webhook failed:', err);
    return NextResponse.json(
      {
        ok: false,
        error:
          'We could not save your response just now. Please try again in a moment.',
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
