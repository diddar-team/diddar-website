import { SectionBlock } from '@/components/ui/section';
import { Reveal } from '@/components/reveal';

const STEPS = [
  {
    n: '01',
    title: 'Tell us your direction',
    body: 'Add your name, pick a track and your level. Two minutes, no account.',
    note: 'this part is on you',
    icon: '✦',
  },
  {
    n: '02',
    title: 'We shape the cohort',
    body: 'We read the list, open the tracks with real demand, and bring in mentors who work in that stack.',
    note: 'this part is on us',
    icon: '◈',
  },
  {
    n: '03',
    title: 'You start building',
    body: 'Join your cohort, work through real projects with feedback, and leave with something you can show.',
    note: "then it's on you again",
    icon: '⬟',
  },
];

export function Method() {
  return (
    <SectionBlock
      id="how"
      eyebrow="How it works"
      title="No guesswork. Three steps."
      headerClassName="mb-8"
    >
      <ol className="relative grid auto-rows-fr gap-px [&>*]:h-full sm:grid-cols-3">
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-stroke to-transparent sm:block"
        />

        {STEPS.map((step, i) => (
          <Reveal as="li" key={step.n} delay={i * 100}>
            <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-stroke bg-surface p-5 shadow-[0_2px_20px_-8px_rgba(11,22,63,0.08)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_32px_-12px_rgba(23,63,234,0.18)]">
              <div className="flex items-center gap-4">
                <span className="relative font-display text-[2.4rem] font-semibold leading-none text-stroke">
                  {step.n}
                  <span
                    aria-hidden
                    className="absolute inset-0 font-display text-[2.4rem] font-semibold leading-none text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    {step.n}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="grid h-9 w-9 place-items-center rounded-xl border border-brand-soft bg-brand-soft text-[1.1rem] text-primary"
                >
                  {step.icon}
                </span>
              </div>

              <div>
                <h3 className="h4-b text-text">{step.title}</h3>
                <p className="mt-2 font-sans text-[0.92rem] leading-relaxed text-text-light">
                  {step.body}
                </p>
                <p className="mt-3 font-hand text-base text-muted">
                  — {step.note}
                </p>
              </div>

              <div
                aria-hidden
                className="absolute -top-[5px] left-6 hidden h-2.5 w-2.5 rounded-full border-2 border-background bg-primary sm:block"
              />
            </div>
          </Reveal>
        ))}
      </ol>
    </SectionBlock>
  );
}
