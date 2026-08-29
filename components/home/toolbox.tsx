import { SectionBlock } from '@/components/ui/section';
import { Carousel } from '@/components/ui/carousel';
import { Reveal } from '@/components/reveal';
import { TECH, TechCard } from '@/components/tech';
import { APP_NAME } from '@/lib/site';

export function Toolbox() {
  return (
    <SectionBlock
      eyebrow="The toolbox"
      tone="brand"
      title="The tools you'll actually build with."
      description="Real, current tech — the same stack teams hire for. Drag through what the tracks cover."
      aside
    >
      <Reveal>
        <Carousel ariaLabel={`Technologies covered across ${APP_NAME} tracks`}>
          {TECH.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </Carousel>
      </Reveal>
    </SectionBlock>
  );
}
