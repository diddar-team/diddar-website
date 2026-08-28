import { Section, SectionHeader } from '@/components/ui/section';
import { Reveal } from '@/components/reveal';
import { PricingBreakdown } from '@/components/pricing/pricing-breakdown';

export function Scholarship() {
  return (
    <Section id="scholarship">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <SectionHeader
            eyebrow="The honest part"
            tone="accent"
            title="There's a fee. Reserve early and most of it goes away."
            description={
              <>
                <p>
                  We&rsquo;re upfront about cost. Cohort places aren&rsquo;t free
                  — but everyone who adds their name before the first cohort
                  opens gets the{' '}
                  <span className="font-semibold text-text">
                    registration fee waived in full
                  </span>
                  , and the training fee at its lowest.
                </p>
                <p className="text-[0.9rem] text-muted">
                  Adding your name costs nothing and commits you to nothing. You
                  only pay if you&rsquo;re offered a seat and say yes.
                </p>
              </>
            }
          />
        </Reveal>

        <Reveal delay={120}>
          <PricingBreakdown />
        </Reveal>
      </div>
    </Section>
  );
}
