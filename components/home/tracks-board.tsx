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
      </CardGrid>

      <p className="mt-8 font-sans text-[0.85rem] text-text-light">
        Don&rsquo;t see your stack?{' '}
        <Link
          href="/waitlist"
          className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          Tell us on the form
        </Link>{' '}
        — that&rsquo;s a vote too.
      </p>
    </SectionBlock>
  );
}
