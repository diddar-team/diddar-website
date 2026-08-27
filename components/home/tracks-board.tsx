import { Container } from '@/components/ui/container';
import { HandLabel } from '@/components/ui/hand-label';
import { IndexCard } from '@/components/ui/index-card';
import { Reveal } from '@/components/reveal';
import { TRACKS } from '@/lib/tracks';

const TILTS = [-1.5, 1, -0.75, 1.5, -1, 0.75];

export function TracksBoard() {
  return (
    <section
      id="tracks"
      className="scroll-mt-24 border-y border-stroke-ink/50 bg-subtle-surface py-20 sm:py-28"
    >
      <Container>
        <div className="max-w-2xl">
          <HandLabel>the tracks</HandLabel>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-text">
            Pick the one that&rsquo;s yours.
          </h2>
          <p className="mt-4 max-w-lg font-sans text-[1.02rem] leading-relaxed text-text-light">
            Each card is a track. Choose a level and add your name — the cards
            with the most names become the first cohorts.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((track, i) => (
            <Reveal key={track.slug} delay={(i % 3) * 70}>
              <IndexCard track={track} tilt={TILTS[i % TILTS.length]} />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 font-hand text-lg text-text-light">
          Don&rsquo;t see your stack?{' '}
          <a
            href="/waitlist"
            className="text-primary underline decoration-2 underline-offset-4"
          >
            Tell us on the form
          </a>{' '}
          — that&rsquo;s a vote too.
        </p>
      </Container>
    </section>
  );
}
