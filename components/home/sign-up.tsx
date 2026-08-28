import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';

export function SignUp() {
  return (
    <Container className="pb-12 pt-0">
      <Reveal>

        <div className="gradient-border relative overflow-hidden rounded-[20px]">

          <div
            className="relative overflow-hidden rounded-[18px] p-7 sm:p-11"
            style={{ background: 'var(--panel)' }}
          >

            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full opacity-40"
              style={{
                background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
                filter: 'blur(60px)',
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -left-16 h-[280px] w-[280px] rounded-full opacity-30"
              style={{
                background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
                filter: 'blur(60px)',
              }}
            />

            <div className="relative max-w-xl">

              <div
                className="mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
                style={{
                  border: '1px solid var(--stroke)',
                  background: 'var(--brand-soft)',
                }}
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4ade80]" />
                <span
                  className="font-sans text-[0.75rem] font-medium"
                  style={{ color: 'var(--primary)' }}
                >
                  Sign the list
                </span>
              </div>

              <h2
                className="h2-b"
                style={{ color: 'var(--text)' }}
              >
                Add your name, tell us what you want to learn.
              </h2>

              <p
                className="mt-3 font-sans text-[0.95rem] leading-relaxed"
                style={{ color: 'var(--text-light)' }}
              >
                It takes two minutes and no account. You will hear from us when
                the track you picked is ready to open.
              </p>

              <div className="mt-6">
                <ButtonLink href="/waitlist" size="lg" className="btn-glow">
                  Add my name to the list
                  <span aria-hidden>→</span>
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
