import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { HandLabel } from '@/components/ui/hand-label';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
          <HandLabel>dead end</HandLabel>
          <h1 className="h1-b mt-5 text-text">This page moved on.</h1>
          <p className="mt-5 max-w-md font-sans text-[1.05rem] leading-relaxed text-text-light">
            The link is broken or the page never existed. Everything worth seeing
            is on the home page — or add your name to the list.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href="/" size="lg">
              Back home
            </ButtonLink>
            <ButtonLink href="/waitlist" size="lg" variant="outline">
              Add my name
            </ButtonLink>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
