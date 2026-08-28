import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Hero } from '@/components/home/hero';
import { Premise } from '@/components/home/premise';
import { TracksBoard } from '@/components/home/tracks-board';
import { Toolbox } from '@/components/home/toolbox';
import { Method } from '@/components/home/method';
import { WhatsInside } from '@/components/home/whats-inside';
import { Voices } from '@/components/home/voices';
import { Faq } from '@/components/home/faq';
import { Scholarship } from '@/components/home/scholarship';
import { SignUp } from '@/components/home/sign-up';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Premise />
        <TracksBoard />
        <Toolbox />
        <Method />
        <WhatsInside />
        <Voices />
        <Faq />
        <Scholarship />
        <SignUp />
      </main>
      <SiteFooter />
    </>
  );
}
