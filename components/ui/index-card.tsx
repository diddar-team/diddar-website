import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LEVELS, type Track, accentClasses } from '@/lib/tracks';

/** A track rendered as a pinned index card. */
export function IndexCard({
  track,
  tilt = 0,
  className,
}: {
  track: Track;
  tilt?: number;
  className?: string;
}) {
  const accent = accentClasses[track.accent];

  return (
    <Link
      href={`/waitlist?track=${track.slug}`}
      style={{ '--tilt': `${tilt}deg` } as React.CSSProperties}
      className={cn(
        'group/card relative flex h-full flex-col rounded-card border border-stroke-ink/70 bg-surface p-6 pt-7 shadow-[0_1px_0_rgb(11_22_63/0.04),0_18px_36px_-24px_rgb(11_22_63/0.28)] transition-[transform,rotate] duration-300 [rotate:var(--tilt)] hover:z-10 hover:-translate-y-1.5 hover:[rotate:0deg]',
        className,
      )}
    >
      {/* pin */}
      <span
        aria-hidden
        className={cn(
          'absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full ring-4 ring-background',
          accent.pin,
        )}
      />
      {/* tab */}
      <span
        className={cn(
          'absolute -right-1.5 top-5 rounded-sm px-2 py-1 font-sans text-[0.62rem] font-bold uppercase tracking-[0.12em] shadow-sm [rotate:2deg]',
          accent.tab,
        )}
      >
        {track.duration.replace('~', '')}
      </span>

      <h3 className="h4-b max-w-[85%] text-text">{track.name}</h3>
      <p className="mt-1 font-hand text-lg leading-tight text-text-light">
        {track.tagline}
      </p>

      <p className="mt-3 text-[0.9rem] leading-relaxed text-text-light">
        {track.blurb}
      </p>

      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
        {LEVELS.map((lvl) => {
          const on = track.levels.includes(lvl.id);
          return (
            <span
              key={lvl.id}
              className={cn(
                'inline-flex items-center gap-1.5 font-sans text-[0.78rem] font-medium',
                on ? 'text-text' : 'text-muted line-through decoration-muted/50',
              )}
            >
              <span
                aria-hidden
                className={cn(
                  'grid h-3.5 w-3.5 place-items-center rounded-[3px] border text-[0.6rem]',
                  on
                    ? 'border-text bg-text text-background'
                    : 'border-stroke-ink',
                )}
              >
                {on ? '✓' : ''}
              </span>
              {lvl.label}
            </span>
          );
        })}
      </div>

      <span className="mt-6 inline-flex items-center gap-1.5 font-sans text-[0.82rem] font-semibold text-text transition-colors group-hover/card:text-primary">
        Add my name to this one
        <span aria-hidden className="transition-transform group-hover/card:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
