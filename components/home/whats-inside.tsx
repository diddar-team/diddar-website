import { SectionBlock, CardGrid } from '@/components/ui/section';
import { Reveal } from '@/components/reveal';

const ITEMS = [
  {
    icon: '🎙',
    title: 'Live mentor hours',
    desc: 'Weekly sessions with people who do this for a living.',
  },
  {
    icon: '🔨',
    title: 'Project-based curriculum',
    desc: 'You learn by building things that actually run.',
  },
  {
    icon: '👥',
    title: 'A small cohort',
    desc: 'Small enough that nobody gets lost.',
  },
  {
    icon: '🔍',
    title: 'Real code review',
    desc: 'Feedback on your work, not just a passing grade.',
  },
  {
    icon: '🚀',
    title: 'One portfolio project',
    desc: 'Something finished you can show and talk through.',
  },
  {
    icon: '🤝',
    title: 'A group that stays',
    desc: 'The people you start with — after the cohort ends.',
  },
];

export function WhatsInside() {
  return (
    <SectionBlock
      eyebrow="What you get"
      title="What's in a Dida cohort."
      description="Every track runs the same way. The stack changes; the support doesn't."
      aside
    >
      <CardGrid>
        {ITEMS.map(({ icon, title, desc }, i) => (
          <Reveal key={title} delay={(i % 3) * 60}>
            <div className="group flex h-full gap-3 rounded-2xl border border-stroke bg-surface p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_32px_-12px_rgba(23,63,234,0.16)]">
              <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-brand-soft bg-brand-soft text-xl">
                {icon}
              </div>
              <div>
                <p className="h5-b text-text">{title}</p>
                <p className="mt-1 font-sans text-[0.88rem] leading-relaxed text-text-light">
                  {desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </CardGrid>
    </SectionBlock>
  );
}
