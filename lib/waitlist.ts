import { z } from 'zod';
import { TRACK_SLUGS } from '@/lib/tracks';

export const HEAR_ABOUT = [
  { value: 'friend', label: 'A friend or colleague' },
  { value: 'social', label: 'Social media' },
  { value: 'search', label: 'Search engine' },
  { value: 'event', label: 'An event or community' },
  { value: 'other', label: 'Somewhere else' },
] as const;

const hearValues = HEAR_ABOUT.map((h) => h.value) as [string, ...string[]];
const trackValues = TRACK_SLUGS as [string, ...string[]];

export const waitlistSchema = z.object({
  kind: z.enum(['waitlist', 'newsletter']).default('waitlist'),
  name: z.string().trim().min(2, 'Please tell us your name').max(120).optional(),
  email: z.string().trim().toLowerCase().email('Enter a valid email address'),
  track: z.enum(trackValues).optional(),
  level: z.enum(['beginner', 'intermediate']).optional(),
  timezone: z.string().trim().max(120).optional(),
  goal: z.string().trim().max(600).optional(),
  hearAbout: z.enum(hearValues).optional(),
  consent: z.boolean().optional(),

  company: z.string().optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;

export function validateWaitlist(data: WaitlistInput): string | null {
  if (data.kind === 'newsletter') return null;
  if (!data.name || data.name.length < 2) return 'Please tell us your name';
  if (!data.track)
    return 'Pick a track you are interested in';
  if (!data.level) return 'Let us know your current level';
  if (!data.consent) return 'Please accept the updates consent to continue';
  return null;
}
