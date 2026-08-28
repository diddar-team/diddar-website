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
    <footer className="border-t border-white/10 bg-ink">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.6fr]">
          <div className="max-w-xs">
            <BrandLockup className="text-white [--text:#fff]" />
            <p className="mt-5 font-sans text-sm leading-relaxed text-white/55">
              A practical, mentor-led tech bootcamp — built one cohort at a
              time, around what people actually want to learn.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 font-sans text-[0.75rem] font-semibold text-white/55 transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/35">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm font-medium text-white/55 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/35">
              Stay in the loop
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-white/55">
              Occasional updates as cohorts take shape. No noise.
            </p>
            <NewsletterForm className="mt-4" />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 font-sans text-[0.78rem] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dida. Built for what comes next.</p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="font-medium transition-colors hover:text-white/70"
            >
              Privacy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
