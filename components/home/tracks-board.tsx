import Link from 'next/link';
import { SectionBlock, CardGrid } from '@/components/ui/section';
import { IndexCard } from '@/components/ui/index-card';
import { Reveal } from '@/components/reveal';
import { TRACKS } from '@/lib/tracks';

export function TracksBoard() {
  return (
    <SectionBlock
      id="tracks"
      panel
      eyebrow="The tracks"
      tone="brand"
      title="Pick the one that's yours."
      description="The tracks with the most names become the first cohorts."
      aside
    >
      <CardGrid>
        {TRACKS.map((track, i) => (
          <Reveal key={track.slug} delay={(i % 3) * 70}>
            <IndexCard track={track} />
          </Reveal>
        ))}

        <Reveal delay={140}>
          <Link
            href="/waitlist"
            className="flex h-full flex-col justify-center gap-2 rounded-2xl border-2 border-dashed border-stroke p-6 text-center transition-colors hover:border-primary/60"
          >
            <span className="font-display text-lg font-semibold text-text">
              Something else?
            </span>
            <span className="font-sans text-[0.85rem] leading-relaxed text-text-light">
              Tell us on the form — every request is a vote for a future track.
            </span>
            <span className="mt-1 font-sans text-[0.82rem] font-semibold text-primary">
              Request a track →
            </span>
          </Link>
        </Reveal>
      </CardGrid>
    </SectionBlock>
  );
}
