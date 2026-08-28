import { LOGOS } from '@/components/logos';

type Tech = { name: string; logo: string; tracks: string };

const TECH: Tech[] = [
  { name: 'HTML', logo: 'html', tracks: 'Frontend · Builder' },
  { name: 'CSS', logo: 'css', tracks: 'Frontend · Builder' },
  { name: 'JavaScript', logo: 'javascript', tracks: 'Frontend · Builder' },
  { name: 'TypeScript', logo: 'typescript', tracks: 'Frontend · Builder' },
  { name: 'React', logo: 'react', tracks: 'Frontend · Mobile · Builder' },
  { name: 'Next.js', logo: 'next', tracks: 'Frontend · Builder' },
  { name: 'Node.js', logo: 'node', tracks: 'Backend · Builder' },
  { name: 'NestJS', logo: 'nest', tracks: 'Backend · Builder' },
  { name: 'Python', logo: 'python', tracks: 'Backend · AI · Data' },
  { name: 'FastAPI', logo: 'fastapi', tracks: 'Backend · Builder' },
  { name: 'React Native', logo: 'react', tracks: 'Mobile' },
  { name: 'Expo', logo: 'expo', tracks: 'Mobile' },
  { name: 'SQL', logo: 'db', tracks: 'Backend · Data' },
  { name: 'Pandas', logo: 'pandas', tracks: 'Data' },
  { name: 'LLM APIs', logo: 'ai', tracks: 'AI for Developers' },
  { name: 'Git', logo: 'git', tracks: 'Every track' },
];

function TechCard({ tech }: { tech: Tech }) {
  return (
    <div className="flex w-[160px] shrink-0 snap-start flex-col items-start gap-3 rounded-xl border border-stroke bg-surface p-4 transition-colors hover:border-primary/40">
      <span aria-hidden>{LOGOS[tech.logo]}</span>
      <div>
        <p className="font-sans text-[0.82rem] font-semibold text-text">
          {tech.name}
        </p>
        <p className="mt-0.5 font-sans text-[0.68rem] leading-snug text-muted">
          {tech.tracks}
        </p>
      </div>
    </div>
  );
}

export { TECH, TechCard };
export type { Tech };
