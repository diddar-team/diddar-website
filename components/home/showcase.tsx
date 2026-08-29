import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/reveal';
import { PHOTOS } from '@/lib/photos';

export function Showcase() {
  return (
    <section className="pb-12 pt-0 sm:pb-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-stroke">
            <div className="relative aspect-[16/10] w-full sm:aspect-[2/1]">
              <Image
                src={PHOTOS.cohort.src}
                alt={PHOTOS.cohort.alt}
                fill
                sizes="(max-width: 1120px) 100vw, 1120px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="max-w-xl font-display text-[clamp(1.35rem,2.2vw,2rem)] font-semibold leading-snug text-white">
                Small cohorts. Real projects. Someone in your corner the whole
                way.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
