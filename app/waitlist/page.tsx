import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Container } from '@/components/ui/container';
import { HandLabel } from '@/components/ui/hand-label';
import { WaitlistForm } from '@/components/waitlist/waitlist-form';

export const metadata: Metadata = {
  title: 'Add your name',
  description:
    'Tell us which track and level you want. Your answer shapes which Dida cohorts open first — and which mentors we bring in.',
};

export default async function WaitlistPage({
  searchParams,
}: PageProps<'/waitlist'>) {
  const params = await searchParams;
  const trackParam = typeof params.track === 'string' ? params.track : undefined;

  return (
    <>
      <SiteHeader />
      <main>
        <Container className="grid gap-12 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:py-20">
          <div className="lg:pt-4">
            <HandLabel>the list</HandLabel>
            <h1 className="h1-b mt-5 text-text">
              Add your name.
            </h1>
            <p className="mt-5 max-w-md font-sans text-[1.05rem] leading-relaxed text-text-light">
              This is the whole plan. We read the list, open the tracks people
              want, and bring in mentors for those stacks. No name, no cohort.
            </p>

            <ul className="mt-10 space-y-4 border-t border-stroke/60 pt-8">
              {[
                ['Your pick counts as a vote', 'Track + level interest decides what opens first.'],
                ['We only staff real demand', 'Mentors get invited for stacks people signed up for.'],
                ['You hear it first', 'Dates, pricing and early-bird access go to the list before anyone else.'],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span aria-hidden className="mt-1 text-primary">
                    ✦
                  </span>
                  <p className="font-sans text-[0.92rem] leading-relaxed text-text-light">
                    <span className="font-semibold text-text">{t}.</span> {d}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <WaitlistForm defaultTrack={trackParam} />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
