import { Container } from '@/components/ui/container';
import { HandLabel } from '@/components/ui/hand-label';
import { Reveal } from '@/components/reveal';

const STEPS = [
  {
    n: '01',
    title: 'Tell us your direction',
    body: 'Add your name, pick a track and your level. Two minutes, no account.',
    note: 'this part is on you',
  },
  {
    n: '02',
    title: 'We shape the cohort',
    body: 'We read the list, open the tracks with real demand, and bring in mentors who work in that stack.',
    note: 'this part is on us',
  },
  {
    n: '03',
    title: 'You start building',
    body: 'Join your cohort, work through real projects with feedback, and leave with something you can show.',
    note: "then it's on you again",
  },
];

export function Method() {
  return (
    <section id="how" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <HandLabel>how it works</HandLabel>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-text">
            No guesswork. Three steps.
          </h2>
        </div>

        <ol className="mt-14 space-y-12">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 80}>
              <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-8">
                <div className="flex items-start gap-4 sm:flex-col sm:items-center">
                  <span className="font-display text-[2.75rem] font-semibold leading-none text-primary sm:text-[3.5rem]">
                    {step.n}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span
                      aria-hidden
                      className="mt-2 hidden h-full w-px border-l-2 border-dashed border-stroke-ink sm:block"
                    />
                  )}
                </div>
                <div className="max-w-xl pb-2">
                  <h3 className="font-display text-[1.4rem] font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-sans leading-relaxed text-text-light">
                    {step.body}
                  </p>
                  <p className="mt-2 font-hand text-lg text-text-light">
                    — {step.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
