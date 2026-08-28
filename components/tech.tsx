import type { ReactNode } from 'react';

type Tech = {
  name: string;
  mono?: string;
  glyph?: ReactNode;
  color: string;
  tracks: string;
};

const Atom = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <circle cx="12" cy="12" r="2.1" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1.4">
      <ellipse cx="12" cy="12" rx="10" ry="4.3" />
      <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

const Snake = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M12 2c-3 0-4 1.4-4 3.2V8h5v1H6.6C4.8 9 3.5 10.2 3.5 13s1.1 4 3.1 4H8v-2.4C8 12.6 9.4 11 11.4 11h4.2c1.7 0 3-1.3 3-3V5.2C18.6 3.4 15 2 12 2Zm-2.3 2.1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    <path
      d="M12 22c3 0 4-1.4 4-3.2V16h-5v-1h6.4c1.8 0 3.1-1.2 3.1-4s-1.1-4-3.1-4H16v2.4C16 11.4 14.6 13 12.6 13H8.4c-1.7 0-3 1.3-3 3v2.8C5.4 20.6 9 22 12 22Zm2.3-2.1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      opacity="0.55"
    />
  </svg>
);

const Hexagon = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <path
      d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7L12 2.5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path d="M9 16V9l6 7V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const Spark = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M12 2c.5 4.5 3.5 7.5 8 8-4.5.5-7.5 3.5-8 8-.5-4.5-3.5-7.5-8-8 4.5-.5 7.5-3.5 8-8Z" />
    <path d="M19 3c.2 1.6 1.4 2.8 3 3-1.6.2-2.8 1.4-3 3-.2-1.6-1.4-2.8-3-3 1.6-.2 2.8-1.4 3-3Z" opacity="0.6" />
  </svg>
);

const Cylinder = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
    <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
  </svg>
);

const TECH: Tech[] = [
  { name: 'HTML', mono: '</>', color: '#e34f26', tracks: 'Frontend · Builder' },
  { name: 'CSS', mono: 'CSS', color: '#1572b6', tracks: 'Frontend · Builder' },
  { name: 'JavaScript', mono: 'JS', color: '#b59a00', tracks: 'Frontend · Builder' },
  { name: 'TypeScript', mono: 'TS', color: '#3178c6', tracks: 'Frontend · Builder' },
  { name: 'React', glyph: Atom, color: '#0a9fc4', tracks: 'Frontend · Mobile · Builder' },
  { name: 'Next.js', mono: 'N', color: 'var(--text)', tracks: 'Frontend · Builder' },
  { name: 'Node.js', glyph: Hexagon, color: '#5fa04e', tracks: 'Backend · Builder' },
  { name: 'NestJS', mono: 'Nest', color: '#e0234e', tracks: 'Backend · Builder' },
  { name: 'Python', glyph: Snake, color: '#3776ab', tracks: 'Backend · AI · Data' },
  { name: 'FastAPI', mono: 'API', color: '#0a8f83', tracks: 'Backend · Builder' },
  { name: 'React Native', glyph: Atom, color: '#0a9fc4', tracks: 'Mobile' },
  { name: 'Expo', mono: 'Expo', color: 'var(--text)', tracks: 'Mobile' },
  { name: 'SQL', glyph: Cylinder, color: '#4479a1', tracks: 'Backend · Data' },
  { name: 'Pandas', mono: 'pd', color: '#9c1d8e', tracks: 'Data' },
  { name: 'LLM APIs', glyph: Spark, color: 'var(--accent)', tracks: 'AI for Developers' },
  { name: 'Git', mono: 'git', color: '#f05032', tracks: 'Every track' },
];

function TechCard({ tech }: { tech: Tech }) {
  return (
    <div className="flex w-[190px] shrink-0 snap-start flex-col items-start rounded-2xl border border-stroke bg-surface p-5 transition-colors hover:border-primary/40">
      <span
        className="grid h-12 w-12 place-items-center rounded-xl border bg-panel font-display text-[0.9rem] font-bold leading-none"
        style={{
          color: tech.color,
          borderColor: `color-mix(in srgb, ${tech.color} 35%, transparent)`,
        }}
        aria-hidden
      >
        {tech.glyph ?? tech.mono}
      </span>
      <p className="mt-4 font-sans text-sm font-semibold text-text">
        {tech.name}
      </p>
      <p className="mt-0.5 font-sans text-[0.72rem] leading-snug text-muted">
        {tech.tracks}
      </p>
    </div>
  );
}

export { TECH, TechCard };
export type { Tech };
