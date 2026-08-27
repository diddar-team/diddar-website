import { Container } from '@/components/ui/container';
import { HandLabel } from '@/components/ui/hand-label';
import { Reveal } from '@/components/reveal';

const ITEMS = [
  ['Live mentor hours', 'Weekly sessions with people who do this for a living.'],
  ['Project-based curriculum', 'You learn by building things that actually run.'],
  ['A small cohort', 'Small enough that nobody gets lost.'],
  ['Real code review', 'Feedback on your work, not just a passing grade.'],
  ['One portfolio project', 'Something finished you can show and talk through.'],
  ['A group that stays', 'The people you start with — after the cohort ends.'],
];

export function WhatsInside() {
  return (
    <section className="border-y border-stroke-ink/50 bg-subtle-surface py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <HandLabel>what you get</HandLabel>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-text">
            What&rsquo;s in a Dida cohort.
          </h2>
          <p className="mt-4 max-w-sm font-sans leading-relaxed text-text-light">
            Every track runs the same way. The stack changes; the support
            doesn&rsquo;t.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="rounded-app border border-stroke-ink/60 bg-surface p-2 shadow-[0_18px_40px_-26px_rgb(11_22_63/0.28)]">
            {ITEMS.map(([title, desc], i) => (
              <li
                key={title}
                className={`flex gap-4 px-5 py-4 ${
                  i < ITEMS.length - 1 ? 'border-b border-dashed border-stroke-ink/70' : ''
                }`}
              >
                <span
                  aria-hidden
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-[6px] border-2 border-primary font-sans text-sm font-bold text-primary"
                >
                  ✓
                </span>
                <div>
                  <p className="font-display text-[1.1rem] font-semibold text-text">
                    {title}
                  </p>
                  <p className="mt-0.5 font-sans text-[0.92rem] leading-relaxed text-text-light">
                    {desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
