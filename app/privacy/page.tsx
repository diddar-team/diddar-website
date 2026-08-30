import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Container } from '@/components/ui/container';
import { HandLabel } from '@/components/ui/hand-label';
import { APP_NAME, CONTACT_EMAIL } from '@/lib/site';

const LAST_UPDATED = 'August 2026';

export const metadata: Metadata = {
  title: 'Privacy',
  description: `How ${APP_NAME} collects, uses and looks after the information you share through the waitlist and updates form.`,
};

type Section = {
  heading: string;
  body: React.ReactNode;
};

const SECTIONS: Section[] = [
  {
    heading: 'Who this is about',
    body: (
      <p>
        {APP_NAME} is a mentor-led tech bootcamp. This site markets the program
        and collects a waitlist. This page explains what we collect when you use
        it, why, and what you can ask us to do with it. It covers this website
        only.
      </p>
    ),
  },
  {
    heading: 'What we collect',
    body: (
      <>
        <p>We only collect what you type into a form:</p>
        <ul>
          <li>
            <strong>Waitlist form</strong> — your name, email address, the track
            and skill level you are interested in, your region or timezone, an
            optional note about your goal, and how you heard about us.
          </li>
          <li>
            <strong>Updates form</strong> (footer) — just your email address.
          </li>
          <li>
            <strong>Consent</strong> — whether you agreed to receive occasional
            updates, and the date you submitted.
          </li>
        </ul>
        <p>
          We do not use analytics, advertising trackers, or third-party
          cookies. Your browser stores one small value locally to remember your
          light or dark theme choice — that never leaves your device.
        </p>
        <p>
          Our server briefly sees your IP address on submit, purely to rate-limit
          spam. It is not stored with your response and is not shared.
        </p>
      </>
    ),
  },
  {
    heading: 'Why we collect it',
    body: (
      <ul>
        <li>To plan cohorts around the tracks and levels people actually want.</li>
        <li>
          To contact you about {APP_NAME} — start dates, pricing, and early
          access — if you asked for updates.
        </li>
        <li>To understand where our interest is coming from.</li>
      </ul>
    ),
  },
  {
    heading: 'Where it goes',
    body: (
      <>
        <p>
          Waitlist and updates responses are sent to a private Google Sheet that
          the {APP_NAME} team controls, using Google Apps Script. Google acts as
          our processor for that storage — their handling is covered by
          Google&apos;s own privacy terms.
        </p>
        <p>
          Only the {APP_NAME} team can see the sheet. We do not sell your
          information, and we do not share it with anyone else for their own
          marketing.
        </p>
      </>
    ),
  },
  {
    heading: 'How long we keep it',
    body: (
      <p>
        We keep waitlist responses until the relevant cohorts have run and the
        list is no longer useful, or until you ask us to remove you — whichever
        comes first. Ask any time and we will delete your entry.
      </p>
    ),
  },
  {
    heading: 'Your choices',
    body: (
      <ul>
        <li>
          <strong>Unsubscribe</strong> — every update email has an opt-out, or
          just reply and ask.
        </li>
        <li>
          <strong>See or correct your data</strong> — email us and we will send
          back what we hold and fix anything wrong.
        </li>
        <li>
          <strong>Delete your data</strong> — email us and we will remove your
          entry from the sheet.
        </li>
      </ul>
    ),
  },
  {
    heading: 'Children',
    body: (
      <p>
        This site and the program are meant for people 16 and over. If you
        believe a child has sent us their details, contact us and we will delete
        them.
      </p>
    ),
  },
  {
    heading: 'Changes',
    body: (
      <p>
        If this policy changes in a meaningful way, we will update the date below
        and, where it matters, tell the people on the list.
      </p>
    ),
  },
  {
    heading: 'Contact',
    body: (
      <p>
        Questions, or a request about your data? Email{' '}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Container className="py-14 lg:py-20">
          <div className="mx-auto max-w-2xl">
            <HandLabel>the small print</HandLabel>
            <h1 className="h1-b mt-5 text-text">Privacy.</h1>
            <p className="mt-5 font-sans text-[1.05rem] leading-relaxed text-text-light">
              The short version: we collect what you put in the form, keep it in a
              private sheet, use it to plan cohorts and email you if you asked,
              and delete it whenever you want.
            </p>
            <p className="mt-3 font-sans text-[0.85rem] text-muted">
              Last updated {LAST_UPDATED}
            </p>

            <div className="mt-12 space-y-10">
              {SECTIONS.map((section) => (
                <section key={section.heading}>
                  <h2 className="h4-b text-text">{section.heading}</h2>
                  <div className="mt-3 space-y-3 font-sans text-[0.95rem] leading-relaxed text-text-light [&_a]:break-words [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-text [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-14 border-t border-stroke/60 pt-8">
              <Link
                href="/"
                className="font-sans text-[0.9rem] font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
              >
                ← Back home
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
