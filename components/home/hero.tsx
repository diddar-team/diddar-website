import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { HandLabel } from '@/components/ui/hand-label';
import { MarkUnderline } from '@/components/marks';
import { Reveal } from '@/components/reveal';
import { TRACKS } from '@/lib/tracks';

export function Hero() {
  const fan = TRACKS.slice(0, 3);

  return (
    <Container className="grid items-center gap-10 pb-10 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-20 lg:pt-16">
      <Reveal>
        <HandLabel>the next cohort is forming</HandLabel>

        <h1 className="mt-5 font-display text-[clamp(2.6rem,5vw,4rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-text">
          Learn the skill.
          <br />
          Then{' '}
          <span className="relative inline-block whitespace-nowrap">
            change the story.
            <MarkUnderline className="text-accent" />
          </span>
        </h1>

        <p className="mt-7 max-w-md font-sans text-[1.05rem] leading-relaxed text-text-light">
          Dida is a practical, mentor-led tech school. Tell us what you want to
          learn and your level — the list decides which cohorts open first, and
          which mentors we bring in.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
          <ButtonLink href="/waitlist" size="lg">
            Add my name to the list
            <span aria-hidden>→</span>
          </ButtonLink>
          <a
            href="#how"
            className="font-sans text-[0.92rem] font-semibold text-text underline decoration-stroke-ink decoration-2 underline-offset-[6px] transition-colors hover:decoration-primary"
          >
            See how it works
          </a>
        </div>

        <div className="mt-11 flex items-center gap-4">
          <div className="flex -space-x-2.5">
            {['A', 'M', 'J', 'K'].map((l, i) => (
              <span
                key={l}
                className={`grid h-9 w-9 place-items-center rounded-full border-2 border-background font-sans text-xs font-bold ${
                  [
                    'bg-primary text-white',
                    'bg-primary-dark text-white',
                    'bg-text text-background',
                    'bg-brand-soft text-primary-dark',
                  ][i]
                }`}
              >
                {l}
              </span>
            ))}
          </div>
          <p className="font-sans text-[0.85rem] leading-snug text-text-light">
            <span className="font-semibold text-text">Be an early name.</span>
            <br />
            The first cohort is shaped by who signs up now.
          </p>
        </div>
      </Reveal>

      {/* Fanned deck of track cards, pinned to a board */}
      <Reveal
        delay={140}
        className="relative mx-auto hidden h-[380px] w-full max-w-[380px] sm:block"
      >
        <span className="absolute right-2 top-0 z-10 font-hand text-lg text-text-light">
          take your pick ↓
        </span>
        {fan.map((track, i) => {
          const rot = [-7, 1, 8][i];
          const x = [-42, 0, 42][i];
          const y = [46, 62, 80][i];
          return (
            <div
              key={track.slug}
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${rot}deg)`,
              }}
              className="absolute left-1/2 top-0 w-[232px] -translate-x-1/2 rounded-card border border-stroke-ink/70 bg-surface p-5 shadow-[0_20px_44px_-24px_rgb(11_22_63/0.4)]"
            >
              <span
                aria-hidden
                className="absolute -top-1.5 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background"
              />
              <p className="font-display text-[1.15rem] font-semibold leading-tight text-text">
                {track.name}
              </p>
              <p className="mt-1 font-hand text-lg leading-tight text-text-light">
                {track.tagline}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {track.levels.map((lvl) => (
                    <span
                      key={lvl}
                      className="h-1.5 w-6 rounded-full bg-brand-soft"
                    />
                  ))}
                </div>
                <span className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted">
                  {track.duration.replace('~', '')}
                </span>
              </div>
            </div>
          );
        })}
      </Reveal>
    </Container>
  );
}
