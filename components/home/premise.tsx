import { Container } from '@/components/ui/container';
import { HandLabel } from '@/components/ui/hand-label';
import { MarkCircle } from '@/components/marks';
import { Reveal } from '@/components/reveal';

export function Premise() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <HandLabel>why we&rsquo;re building Dida</HandLabel>
          <p className="mt-6 font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-medium leading-[1.28] tracking-[-0.01em] text-text">
            You don&rsquo;t need a{' '}
            <span className="relative inline-block">
              perfect background
              <MarkCircle />
            </span>
            . You need a place to begin, people who&rsquo;ve done it before, and a
            reason to keep going. Dida is that place — built one cohort at a time,
            around what people actually want to learn.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
