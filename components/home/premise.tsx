import { Section } from '@/components/ui/section';
import { Reveal } from '@/components/reveal';

export function Premise() {
  return (
    <Section>
      <Reveal className="mx-auto max-w-3xl">

          <p className="mb-6 font-sans text-[0.72rem] font-bold uppercase tracking-[0.18em] text-muted">
            Why we&rsquo;re building Dida
          </p>

          <blockquote className="h2-m text-text">
            You don&rsquo;t need a{' '}
            <span className="relative inline-block">
              <span className="gradient-text font-semibold">
                perfect background
              </span>
            </span>
            . You need a place to begin, people who&rsquo;ve done it before, and a
            reason to keep going.{' '}
            <span className="text-text-light">
              Dida is that place — built one cohort at a time, around what people
              actually want to learn.
            </span>
          </blockquote>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-accent/30 to-transparent" />
            <span className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-muted">
              Dida
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-primary/40 via-accent/30 to-transparent" />
          </div>
      </Reveal>
    </Section>
  );
}
