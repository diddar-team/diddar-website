import Link from 'next/link';
import { BrandLockup } from '@/components/brand';
import { Container } from '@/components/ui/container';
import { NewsletterForm } from '@/components/newsletter-form';

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Explore',
    links: [
      { label: 'The tracks', href: '/#tracks' },
      { label: 'How it works', href: '/#how' },
      { label: 'Questions', href: '/#faq' },
    ],
  },
  {
    title: 'Get involved',
    links: [
      { label: 'Add my name', href: '/waitlist' },
      { label: 'Teach with Dida', href: '/waitlist?teach=1' },
      { label: 'Contact', href: 'mailto:hello@dida.example' },
    ],
  },
];

const SOCIALS = [
  { label: 'X', href: 'https://x.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-stroke-ink/60 bg-subtle-surface">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.6fr]">
          <div className="max-w-xs">
            <BrandLockup />
            <p className="mt-5 font-hand text-xl text-primary">
              Same you. Bigger future.
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-text-light">
              A practical, mentor-led tech bootcamp — built one cohort at a time,
              around what people actually want to learn.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm font-medium text-text-light transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted">
              Stay in the loop
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-text-light">
              Occasional updates as cohorts take shape. No noise.
            </p>
            <NewsletterForm className="mt-4" />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-stroke-ink/60 pt-8 font-sans text-[0.8rem] text-text-light sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dida. Built for what comes next.</p>
          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium transition-colors hover:text-primary"
              >
                {s.label}
              </a>
            ))}
            <Link
              href="/privacy"
              className="font-medium transition-colors hover:text-primary"
            >
              Privacy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
