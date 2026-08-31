import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

type Props = { className?: string; style?: CSSProperties };

/**
 * Hand-drawn scene for the showcase band: a small cohort gathered around one
 * real project, with a mentor in the corner. Matches the sketch marks in
 * components/marks.tsx — primary line work, an accent highlight, warm fills.
 */
export function CohortIllustration({ className, style }: Props) {
  return (
    <svg
      viewBox="0 0 720 440"
      role="img"
      aria-label="A small cohort gathered around one real project, with a mentor in their corner"
      style={style}
      className={cn('h-full w-full', className)}
      fill="none"
    >
      {/* the circle they're all in */}
      <ellipse
        cx="360"
        cy="222"
        rx="332"
        ry="196"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 12"
        opacity="0.4"
      />

      {/* the project */}
      <g>
        <rect
          x="228"
          y="96"
          width="264"
          height="212"
          rx="20"
          fill="var(--surface)"
          stroke="var(--primary)"
          strokeWidth="3"
        />
        <circle cx="252" cy="120" r="4.5" fill="var(--primary)" opacity="0.45" />
        <circle cx="270" cy="120" r="4.5" fill="var(--primary)" opacity="0.45" />
        <circle cx="288" cy="120" r="4.5" fill="var(--primary)" opacity="0.45" />
        <line
          x1="228"
          y1="140"
          x2="492"
          y2="140"
          stroke="var(--primary)"
          strokeWidth="2"
          opacity="0.18"
        />

        {/* a couple of lines of work */}
        <rect x="252" y="160" width="120" height="9" rx="4.5" fill="var(--primary)" opacity="0.22" />
        <rect x="252" y="178" width="86" height="9" rx="4.5" fill="var(--primary)" opacity="0.22" />

        {/* something that's actually going up */}
        <polyline
          points="250,278 292,250 322,258 360,222 400,236 452,190"
          stroke="var(--accent)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="250" cy="278" r="4" fill="var(--accent)" />
        <circle cx="360" cy="222" r="4" fill="var(--accent)" />
        <circle cx="452" cy="190" r="4" fill="var(--accent)" />
        <line
          x1="248"
          y1="292"
          x2="470"
          y2="292"
          stroke="var(--primary)"
          strokeWidth="2"
          opacity="0.2"
        />
      </g>

      {/* the cohort */}
      <g stroke="var(--primary)" strokeWidth="3" strokeLinecap="round">
        {/* top-left */}
        <circle cx="120" cy="150" r="20" fill="var(--brand-soft)" />
        <path d="M84 214c4-24 68-24 72 0" fill="var(--brand-soft)" />
        {/* bottom-left */}
        <circle cx="150" cy="330" r="18" fill="var(--brand-soft)" />
        <path d="M118 388c3-22 61-22 64 0" fill="var(--brand-soft)" />
        {/* top-right */}
        <circle cx="600" cy="146" r="18" fill="var(--brand-soft)" />
        <path d="M568 204c3-22 61-22 64 0" fill="var(--brand-soft)" />
      </g>

      {/* someone in your corner */}
      <g>
        <circle
          cx="596"
          cy="322"
          r="24"
          fill="var(--primary)"
          stroke="var(--primary)"
          strokeWidth="3"
        />
        <path
          d="M552 392c4-30 84-30 88 0"
          fill="var(--primary)"
          stroke="var(--primary)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x="612" y="250" width="66" height="46" rx="14" fill="var(--surface)" stroke="var(--primary)" strokeWidth="3" />
        <path d="M624 292l-8 14 20-6z" fill="var(--surface)" stroke="var(--primary)" strokeWidth="3" strokeLinejoin="round" />
        <path
          d="M645 264c-4-6-14-4-14 4 0 6 8 12 14 16 6-4 14-10 14-16 0-8-10-10-14-4z"
          fill="var(--accent)"
        />
      </g>

      {/* doodles */}
      <path
        d="M170 196c22 6 40 16 52 28"
        stroke="var(--primary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M206 214c6 4 12 7 18 8M222 202c2 6 3 12 2 18"
        stroke="var(--primary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M540 70v34M523 87h34M528 75l24 24M552 75l-24 24"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M262 330c46-10 150-12 202-3"
        stroke="var(--primary)"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
