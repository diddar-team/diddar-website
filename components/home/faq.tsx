'use client';

import Link from 'next/link';
import { Accordion } from '@mantine/core';
import { Section, SectionHeader } from '@/components/ui/section';
import { Reveal } from '@/components/reveal';
import { APP_NAME } from '@/lib/site';

const FAQS = [
  {
    q: `What is ${APP_NAME}, exactly?`,
    a: 'A practical, mentor-led tech bootcamp. We build each cohort around the tracks and levels people ask for on the list, so training follows real demand instead of guesswork.',
  },
  {
    q: 'Which tracks can I pick?',
    a: 'Frontend, Product Design (Figma), Backend, Fullstack Development, AI for Developers, Mobile Development, and Data & Analytics. The list decides which run first — a track nobody picks does not open.',
  },
  {
    q: 'Do I need experience?',
    a: 'Most tracks have a beginner entry point covering the fundamentals. Mobile Development starts at the intermediate level. Pick the level that fits when you add your name.',
  },
  {
    q: 'When does it start, and what does it cost?',
    a: 'Both are being finalised around cohort size and format. People on the list hear the dates and pricing first, and get early-bird access.',
  },
  {
    q: 'How are cohorts run?',
    a: 'Fully online and project-based, with live sessions and code review. Every track runs 12 weeks, at beginner or intermediate level.',
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
        <Reveal>
          <SectionHeader
            eyebrow="Questions, answered"
            title="Before you sign."
            description={
              <p>
                Still curious? Everything else is in{' '}
                <Link
                  href="/waitlist"
                  className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                >
                  the form
                </Link>
                .
              </p>
            }
          />
        </Reveal>

        <Reveal delay={80}>
          <Accordion
            multiple
            defaultValue={['0']}
            chevronPosition="right"
            classNames={{
              item: 'border-t border-stroke last:border-b',
              control: 'px-0 py-5 hover:bg-transparent',
              label: 'h5-b text-text',
              content:
                'px-0 pb-6 font-sans text-[0.95rem] leading-relaxed text-text-light',
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
        </Reveal>
      </div>
    </Section>
  );
}
