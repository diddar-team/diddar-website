import { SectionBlock, CardGrid } from '@/components/ui/section';
import { Reveal } from '@/components/reveal';
import { APP_NAME } from '@/lib/site';

const QUOTES = [
  {
    quote:
      'I had tried learning on my own three times. Having a cohort and someone to ask is what finally made it stick.',
    caption: 'the kind of note we want to get',
    accent: 'var(--primary)',
  },
  {
    quote:
      'The project I built in the cohort is the one I showed in interviews. It got me the job.',
    caption: 'what we are building toward',
    accent: 'var(--accent)',
  },
  {
    quote:
      'Switched from a non-tech job at 31. The pace was real, but I was never on my own.',
    caption: `a future ${APP_NAME} story`,
    accent: 'var(--success)',
  },
];

export function Voices() {
  return (
    <SectionBlock
      panel
      eyebrow="Voices"
      tone="brand"
      title="Cohort one hasn't run yet."
      description={`So instead of borrowed testimonials, here is the kind of thing we are building ${APP_NAME} to make true. Your name on the list helps.`}
    >
      <CardGrid cols="sm:grid-cols-3">
        {QUOTES.map((q, i) => (
          <Reveal key={i} delay={i * 80}>
            <figure className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-stroke bg-surface p-6">
              <div
                className="absolute inset-x-0 top-0 h-[2px]"
                style={{
                  background: `linear-gradient(to right, ${q.accent}, transparent)`,
                }}
              />
              <span
                aria-hidden
                className="absolute -right-2 -top-3 font-display text-[7rem] font-semibold leading-none opacity-[0.06]"
                style={{ color: q.accent }}
              >
                &ldquo;
              </span>
              <blockquote className="relative flex-1 font-display text-[1.08rem] font-medium leading-snug text-text">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-stroke pt-5 font-sans text-[0.78rem] font-medium italic text-text-light">
                — {q.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </CardGrid>
    </SectionBlock>
  );
}
