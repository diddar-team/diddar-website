import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { MarkArrow } from '@/components/marks';
import { Reveal } from '@/components/reveal';

export function SignUp() {
  return (
    <Container className="pb-24 pt-4">
      <Reveal>
        <div className="relative overflow-hidden rounded-app border border-stroke-ink/60 bg-surface p-8 shadow-[0_24px_60px_-30px_rgb(11_22_63/0.35)] sm:p-14">
          {/* ruled lines like a sheet of paper */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(var(--stroke-ink) 0 1px, transparent 1px 2.4rem)',
              backgroundPosition: '0 5rem',
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-10 w-px bg-primary/30 sm:left-16"
          />

          <div className="relative max-w-xl">
            <p className="font-hand text-2xl text-primary">Sign the list</p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-text">
              Add your name, tell us what you want to learn.
            </h2>
            <p className="mt-4 font-sans leading-relaxed text-text-light">
              It takes two minutes and no account. You will hear from us when the
              track you picked is ready to open.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <ButtonLink href="/waitlist" size="lg">
                Add my name to the list
                <span aria-hidden>→</span>
              </ButtonLink>
              <MarkArrow className="h-12 w-12 rotate-[100deg] text-primary" />
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
