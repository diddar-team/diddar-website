import type { ReactNode } from 'react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

type Tone = 'muted' | 'brand' | 'accent';

const TONE_TEXT: Record<Tone, string> = {
  muted: 'text-muted',
  brand: 'text-primary',
  accent: 'text-accent',
};

export function Section({
  id,
  panel = false,
  className,
  children,
}: {
  id?: string;
  panel?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 py-24 sm:py-32',
        panel && 'bg-panel',
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  tone = 'accent',
  title,
  description,
  aside = false,
  className,
}: {
  eyebrow: string;
  tone?: Tone;
  title: ReactNode;
  description?: ReactNode;
  aside?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <p
        className={cn(
          'mb-4 inline-flex items-center gap-2 font-sans text-[0.72rem] font-bold uppercase tracking-[0.18em]',
          TONE_TEXT[tone],
        )}
      >
        {tone === 'accent' && (
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
        )}
        {eyebrow}
      </p>

      {aside && description ? (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="h3-b max-w-xl text-text">{title}</h2>
          <div className="max-w-sm font-sans text-[0.96rem] leading-relaxed text-text-light">
            {description}
          </div>
        </div>
      ) : (
        <>
          <h2 className="h3-b text-text">{title}</h2>
          {description && (
            <div className="mt-4 max-w-lg space-y-3 font-sans text-[1rem] leading-relaxed text-text-light">
              {description}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export function SectionBlock({
  id,
  panel,
  eyebrow,
  tone,
  title,
  description,
  aside,
  headerClassName = 'mb-14',
  children,
}: {
  id?: string;
  panel?: boolean;
  eyebrow: string;
  tone?: Tone;
  title: ReactNode;
  description?: ReactNode;
  aside?: boolean;
  headerClassName?: string;
  children: ReactNode;
}) {
  return (
    <Section id={id} panel={panel}>
      <Reveal className={headerClassName}>
        <SectionHeader
          eyebrow={eyebrow}
          tone={tone}
          title={title}
          description={description}
          aside={aside}
        />
      </Reveal>
      {children}
    </Section>
  );
}

export function CardGrid({
  cols = 'sm:grid-cols-2 lg:grid-cols-3',
  className,
  children,
}: {
  cols?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn('grid auto-rows-fr gap-4 [&>*]:h-full', cols, className)}
    >
      {children}
    </div>
  );
}
