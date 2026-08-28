'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { COHORT_LENGTH, LEVELS, type Track } from '@/lib/tracks';

const TRACK_ICONS: Record<string, string> = {
  frontend: '⬡',
  backend: '◈',
  fullstack: '⬟',
  'ai-for-developers': '⬢',
  mobile: '◉',
  'data-analytics': '◆',
};

export function IndexCard({
  track,
  className,
}: {
  track: Track;
  className?: string;
}) {
  return (
    <Link
      href={`/waitlist?track=${track.slug}`}
      className={cn(
        'group/card relative flex h-full flex-col overflow-hidden rounded-2xl p-5 backdrop-blur-sm',
        'transition-all duration-300',
        className,
      )}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--stroke)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 24px 60px -20px color-mix(in srgb, var(--primary) 28%, transparent)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--stroke)';
        (e.currentTarget as HTMLElement).style.boxShadow = '';
        (e.currentTarget as HTMLElement).style.transform = '';
      }}
    >

      <div
        className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-60 transition-opacity duration-300 group-hover/card:opacity-100"
        style={{
          background: `linear-gradient(to right, var(--primary), var(--primary), transparent)`,
        }}
      />

      <div className="mb-4 flex items-center justify-between">
        <span
          className="grid h-9 w-9 place-items-center rounded-lg text-[1.05rem] transition-colors"
          style={{
            border: '1px solid var(--stroke)',
            background: 'var(--brand-soft)',
            color: 'var(--primary)',
          }}
          aria-hidden
        >
          {TRACK_ICONS[track.slug] ?? '◆'}
        </span>
        <span
          className="rounded-full px-3 py-1 font-sans text-[0.68rem] font-bold uppercase tracking-[0.12em]"
          style={{
            border: '1px solid var(--stroke)',
            background: 'var(--brand-soft)',
            color: 'var(--text-light)',
          }}
        >
          {COHORT_LENGTH}
        </span>
      </div>

      <h3
        className="h4-b"
        style={{ color: 'var(--text)' }}
      >
        {track.name}
      </h3>
      <p
        className="mt-1 font-sans text-[0.82rem] font-medium"
        style={{ color: 'var(--primary)' }}
      >
        {track.tagline}
      </p>

      <p
        className="mt-3 flex-1 font-sans text-[0.9rem] leading-relaxed"
        style={{ color: 'var(--text-light)' }}
      >
        {track.blurb}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {track.stack.slice(0, 4).map((s) => (
          <span
            key={s}
            className="rounded-md px-2.5 py-1 font-sans text-[0.7rem] font-medium"
            style={{
              border: '1px solid var(--stroke)',
              background: 'var(--brand-soft)',
              color: 'var(--text-light)',
            }}
          >
            {s}
          </span>
        ))}
        {track.stack.length > 4 && (
          <span
            className="rounded-md px-2.5 py-1 font-sans text-[0.7rem] font-medium"
            style={{
              border: '1px solid var(--stroke)',
              background: 'var(--brand-soft)',
              color: 'var(--text-light)',
              opacity: 0.6,
            }}
          >
            +{track.stack.length - 4}
          </span>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        {LEVELS.map((lvl) => {
          const on = track.levels.includes(lvl.id);
          return (
            <span
              key={lvl.id}
              className={cn(
                'rounded-full px-2.5 py-0.5 font-sans text-[0.68rem] font-semibold',
                !on && 'line-through opacity-40',
              )}
              style={
                on
                  ? {
                      background: 'var(--brand-soft)',
                      color: 'var(--primary)',
                    }
                  : { color: 'var(--text-light)' }
              }
            >
              {lvl.label}
            </span>
          );
        })}
      </div>

      <div
        className="mt-5 flex items-center justify-between border-t pt-3.5"
        style={{ borderColor: 'var(--stroke)' }}
      >
        <span
          className="font-sans text-[0.82rem] font-semibold transition-colors group-hover/card:text-text"
          style={{ color: 'var(--text-light)' }}
        >
          Add my name
        </span>
        <span
          aria-hidden
          className="grid h-7 w-7 place-items-center rounded-full text-[0.85rem] transition-all group-hover/card:translate-x-0.5"
          style={{
            border: '1px solid var(--stroke)',
            background: 'var(--brand-soft)',
            color: 'var(--text-light)',
          }}
        >
          →
        </span>
      </div>
    </Link>
  );
}
