import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { MarkUnderline } from '@/components/marks';
import { COHORT_LENGTH, TRACKS } from '@/lib/tracks';
import { APP_NAME } from '@/lib/site';

const TRACK_ICONS: Record<string, string> = {
  frontend: '⬡',
  'product-design': '◭',
  backend: '◈',
  fullstack: '⬟',
  'ai-for-developers': '⬢',
  mobile: '◉',
  'data-analytics': '◆',
};

export function Hero() {
  const marqueeItems = [...TRACKS, ...TRACKS];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--panel)' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="orb-1 absolute -left-32 -top-24 h-[520px] w-[520px] rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
            filter: 'blur(64px)',
          }}
        />
        <div
          className="orb-2 absolute -right-24 top-24 h-[380px] w-[380px] rounded-full opacity-50"
          style={{
            background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(var(--text) 1px, transparent 1px),
              linear-gradient(90deg, var(--text) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <Container className="relative z-10 flex flex-col items-start pb-2 pt-16 lg:pt-24">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 backdrop-blur-sm"
          style={{
            border: '1px solid var(--stroke)',
            background: 'var(--brand-soft)',
          }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22a06b]" />
          <span
            className="font-sans text-[0.78rem] font-medium tracking-wide"
            style={{ color: 'var(--primary)' }}
          >
            The next cohort is forming now
          </span>
        </div>

        <h1 className="h1-b max-w-3xl" style={{ color: 'var(--text)' }}>
          Learn the skill.
          <br />
          Then{' '}
          <span className="relative inline-block whitespace-nowrap">
            change the story.
            <MarkUnderline
              style={{ color: 'var(--primary)' } as React.CSSProperties}
            />
          </span>
        </h1>

        <p
          className="mt-6 max-w-xl font-sans text-[1.05rem] leading-relaxed"
          style={{ color: 'var(--text-light)' }}
        >
          {APP_NAME} is a practical, mentor-led tech school. Tell us what you
          want to learn and your level — the list decides which cohorts open
          first, and which mentors we bring in.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink href="/waitlist" size="lg" className="btn-glow">
            Add my name to the list
            <span aria-hidden>→</span>
          </ButtonLink>
          <a
            href="#how"
            className="font-sans text-[0.92rem] font-semibold underline decoration-2 underline-offset-[6px] transition-colors"
            style={{
              color: 'var(--text-light)',
              textDecorationColor: 'var(--stroke)',
            }}
          >
            See how it works
          </a>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t pt-7"
          style={{ borderColor: 'var(--stroke)' }}
        >
          {[
            { n: '7', label: 'Learning tracks' },
            { n: '2', label: 'Skill levels' },
            { n: '100%', label: 'Online' },
            { n: COHORT_LENGTH, label: 'Every cohort' },
          ].map(({ n, label }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span
                className="font-display text-[1.3rem] font-semibold"
                style={{ color: 'var(--text)' }}
              >
                {n}
              </span>
              <span
                className="font-sans text-[0.78rem] font-medium"
                style={{ color: 'var(--text-light)' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>

      <div
        className="relative mt-10 hidden overflow-hidden border-t py-5 lg:block"
        style={{ borderColor: 'var(--stroke)' }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{
            background: `linear-gradient(to right, var(--panel), transparent)`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{
            background: `linear-gradient(to left, var(--panel), transparent)`,
          }}
        />

        <div className="marquee-track gap-0">
          {marqueeItems.map((track, i) => (
            <div
              key={`${track.slug}-${i}`}
              className="flex shrink-0 items-center gap-3 px-8 py-1"
              style={{ borderRight: '1px solid var(--stroke)' }}
            >
              <span style={{ color: 'var(--primary)', fontSize: '1.05rem' }}>
                {TRACK_ICONS[track.slug] ?? '◆'}
              </span>
              <span
                className="whitespace-nowrap font-sans text-[0.86rem] font-medium"
                style={{ color: 'var(--text)' }}
              >
                {track.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
