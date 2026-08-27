import { Container } from '@/components/ui/container';
import { HandLabel } from '@/components/ui/hand-label';
import { Reveal } from '@/components/reveal';

const NOTES = [
  {
    quote:
      'I had tried learning on my own three times. Having a cohort and someone to ask is what finally made it stick.',
    who: 'the kind of note we want to get',
    rot: '-rotate-2',
    bg: 'bg-[#ffe9a8]',
  },
  {
    quote:
      'The project I built in the cohort is the one I showed in interviews. It got me the job.',
    who: 'what we are building toward',
    rot: 'rotate-1',
    bg: 'bg-[#dbe6ff]',
  },
  {
    quote:
      'Switched from a non-tech job at 31. The pace was real, but I was never on my own.',
    who: 'a future Dida story',
    rot: '-rotate-1',
    bg: 'bg-[#ffdccf]',
  },
];

export function Voices() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <HandLabel>voices</HandLabel>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-text">
            Cohort one hasn&rsquo;t run yet.
          </h2>
          <p className="mt-4 max-w-lg font-sans leading-relaxed text-text-light">
            So instead of borrowed testimonials, here is the kind of thing we are
            building Dida to make true. Your name on the list helps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {NOTES.map((note, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure
                className={`h-full ${note.rot} rounded-sm ${note.bg} p-6 text-[#0b163f] shadow-[0_16px_34px_-18px_rgb(11_22_63/0.5)]`}
              >
                <blockquote className="font-display text-[1.05rem] font-medium leading-snug">
                  &ldquo;{note.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-hand text-base text-[#0b163f]/70">
                  — {note.who}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
