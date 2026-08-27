'use client';

import { Accordion } from '@mantine/core';
import { Container } from '@/components/ui/container';
import { HandLabel } from '@/components/ui/hand-label';

const FAQS = [
  {
    q: 'What is Dida, exactly?',
    a: 'A practical, mentor-led tech bootcamp. We build each cohort around the tracks and levels people ask for on the list, so training follows real demand instead of guesswork.',
  },
  {
    q: 'Which tracks can I pick?',
    a: 'Frontend, Backend, the Builder Path (fullstack), Mobile, Cloud & DevOps, and Data & Analytics. The list decides which run first — and a track nobody picks does not open.',
  },
  {
    q: 'Do I need experience?',
    a: 'No. Every track has a beginner entry point. If you already have a foundation, choose intermediate or advanced when you add your name.',
  },
  {
    q: 'When does it start, and what does it cost?',
    a: 'Both are being finalised around cohort size and format. People on the list hear the dates and pricing first, and get early-bird access.',
  },
  {
    q: 'I want to teach. Can I still add my name?',
    a: 'Yes — there is a "I would also like to teach or mentor" toggle on the form. We build the mentor team around the same demand signal.',
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-stroke-ink/50 py-20 sm:py-28"
    >
      <Container className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
        <div>
          <HandLabel>questions, answered</HandLabel>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.8rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-text">
            Before you sign.
          </h2>
        </div>

        <Accordion
          multiple
          defaultValue={['0']}
          chevronPosition="right"
          classNames={{
            item: 'border-t border-stroke-ink/70 bg-transparent last:border-b',
            control: 'px-0 hover:bg-transparent',
            label:
              'py-5 font-display text-[1.2rem] font-semibold tracking-[-0.01em] text-text',
            content: 'px-0 pb-6 font-sans text-[0.98rem] leading-relaxed text-text-light',
            chevron: 'text-primary',
          }}
        >
          {FAQS.map((faq, i) => (
            <Accordion.Item key={faq.q} value={String(i)}>
              <Accordion.Control>{faq.q}</Accordion.Control>
              <Accordion.Panel>{faq.a}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
