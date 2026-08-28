import type { ReactNode } from 'react';

const box = 'block h-10 w-10';

export const LOGOS: Record<string, ReactNode> = {
  html: (
    <svg viewBox="0 0 40 40" className={box}>
      <path d="M6 4h28l-2.5 28.5L20 36 8.5 32.5 6 4Z" fill="#E44D26" />
      <path d="M20 6.5V33.5l9.3-2.9L31.4 6.5H20Z" fill="#F16529" />
      <path
        d="M13 11h14l-.4 4H17.4l.3 3.4h8.6l-1 11-5.3 1.5-5.3-1.5-.35-4h2.9l.2 2 2.55.7 2.6-.7.3-3.4H12.9L13 11Z"
        fill="#fff"
      />
    </svg>
  ),
  css: (
    <svg viewBox="0 0 40 40" className={box}>
      <path d="M6 4h28l-2.5 28.5L20 36 8.5 32.5 6 4Z" fill="#1572B6" />
      <path d="M20 6.5V33.5l9.3-2.9L31.4 6.5H20Z" fill="#33A9DC" />
      <text
        x="20"
        y="25.5"
        fontSize="15"
        fontWeight="800"
        fill="#fff"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        3
      </text>
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 40 40" className={box}>
      <rect width="40" height="40" rx="4" fill="#F7DF1E" />
      <path d="M22 30.5c.8 1.3 1.8 2.3 3.7 2.3 1.6 0 2.6-.8 2.6-1.9 0-1.3-1-1.8-2.8-2.6l-1-.4c-2.8-1.2-4.6-2.7-4.6-5.8 0-2.9 2.2-5 5.6-5 2.4 0 4.2.9 5.4 3.1l-3 1.9c-.65-1.2-1.35-1.6-2.4-1.6-1.1 0-1.8.7-1.8 1.6 0 1.1.7 1.6 2.4 2.3l1 .45c3.3 1.4 5.1 2.9 5.1 6.1 0 3.5-2.75 5.4-6.45 5.4-3.6 0-5.95-1.7-7.1-4l3.15-1.85Z" fill="#000" />
      <path d="M9.4 30.8c.6 1.05 1.1 1.95 2.4 1.95 1.25 0 2.05-.5 2.05-2.4V17.5h3.9v12.9c0 4.05-2.35 5.9-5.8 5.9-3.1 0-4.9-1.6-5.8-3.55L9.4 30.8Z" fill="#000" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 40 40" className={box}>
      <rect width="40" height="40" rx="4" fill="#3178C6" />
      <text
        x="20"
        y="27"
        fontSize="16"
        fontWeight="800"
        fill="#fff"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        TS
      </text>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 40 40" className={box}>
      <circle cx="20" cy="20" r="3" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.6" fill="none">
        <ellipse cx="20" cy="20" rx="17" ry="6.5" />
        <ellipse cx="20" cy="20" rx="17" ry="6.5" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="17" ry="6.5" transform="rotate(120 20 20)" />
      </g>
    </svg>
  ),
  next: (
    <svg viewBox="0 0 40 40" className={box}>
      <circle cx="20" cy="20" r="19" fill="#000" />
      <path d="M14 12h2.2l12 15.5V12h2.1v16h-2.2L14 12.6V28h-2V12Z" fill="#fff" />
    </svg>
  ),
  node: (
    <svg viewBox="0 0 40 40" className={box}>
      <path d="M20 3 34.5 11v18L20 37 5.5 29V11L20 3Z" fill="#5FA04E" />
      <path d="M20 29.8c-.55 0-1.1-.15-1.55-.4l-4.9-2.9c-.75-.4-.35-.55-.15-.65.95-.35 1.15-.4 2.2-1 .1-.05.25-.05.35.05l3.75 2.25c.15.05.35.05.5 0l14.7-8.5c.15-.05.25-.2.25-.4v-16.9c0-.2-.1-.35-.25-.45L26.9-4c-.15-.1-.35-.1-.5 0" fill="#5FA04E" />
      <path d="M25 22.7c-4 0-4.85-1.85-4.85-3.4 0-.15.1-.3.3-.3h1.35c.15 0 .3.1.3.25.2 1.4.8 2.1 3.6 2.1 2.15 0 3.05-.5 3.05-1.65 0-.65-.25-1.15-3.6-1.5-2.8-.3-4.5-.9-4.5-3.15 0-2.05 1.75-3.3 4.65-3.3 3.3 0 4.9 1.15 5.1 3.6 0 .1 0 .2-.1.3-.05.05-.15.1-.25.1h-1.35c-.15 0-.25-.1-.3-.25-.3-1.45-1.1-1.9-3.15-1.9-2.25 0-2.5.8-2.5 1.4 0 .7.3.9 3.5 1.35 3.15.4 4.6 1 4.6 3.25s-1.85 3.5-5.05 3.5Z" fill="#fff" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 40 40" className={box}>
      <path d="M19.7 4c-3 0-5.3.3-6.9 1-1.5.7-2.3 2-2.3 3.9v4.2h9.4v1.2H6.6c-2 0-3.7 1.2-4.3 3.5-.7 2.6-.7 4.2 0 6.9.5 2.1 1.7 3.5 3.7 3.5h2.9v-5c0-2.3 2-4.3 4.4-4.3h9.4c1.9 0 3.5-1.6 3.5-3.5V8.9c0-1.9-1.6-3.3-3.5-3.6-1.2-.2-2.5-.3-3.9-.3h-.6Zm-5.1 2.9c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8Z" fill="#3776AB" />
      <path d="M31.3 15.2v4.9c0 2.4-2 4.4-4.4 4.4h-9.4c-1.9 0-3.5 1.6-3.5 3.5v6.6c0 1.9 1.6 3 3.5 3.5 2.2.6 4.4.7 6.9 0 1.8-.5 3.5-1.5 3.5-3.5v-4.2h-9.3v-1.2h14c2 0 2.8-1.4 3.5-3.5.7-2.2.7-4.3 0-6.9-.5-2-1.5-3.5-3.5-3.5h-1.8Zm-5.3 20.1c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8Z" fill="#FFD43B" />
    </svg>
  ),
  db: (
    <svg viewBox="0 0 40 40" className={box}>
      <ellipse cx="20" cy="9" rx="13" ry="5" fill="#4479A1" />
      <path d="M7 9v22c0 2.8 5.8 5 13 5s13-2.2 13-5V9" fill="#4479A1" />
      <ellipse cx="20" cy="9" rx="13" ry="5" fill="#5C90BC" />
      <path d="M7 17c0 2.8 5.8 5 13 5s13-2.2 13-5M7 25c0 2.8 5.8 5 13 5s13-2.2 13-5" stroke="#2E5C82" strokeWidth="1.4" fill="none" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 40 40" className={box}>
      <path d="M37.4 18.3 21.7 2.6a2 2 0 0 0-2.8 0l-3.3 3.3 4.1 4.1a2.4 2.4 0 0 1 3 3l4 4a2.4 2.4 0 1 1-1.4 1.35l-3.7-3.7v9.8a2.4 2.4 0 1 1-2 0V16a2.4 2.4 0 0 1-1.3-3.15l-4-4L2.6 18.9a2 2 0 0 0 0 2.8l15.7 15.7a2 2 0 0 0 2.8 0l15.7-15.6a2 2 0 0 0 0-2.85" fill="#F05032" />
    </svg>
  ),
  nest: (
    <svg viewBox="0 0 40 40" className={box}>
      <rect width="40" height="40" rx="8" fill="#E0234E" />
      <path d="M14 11c-1 1.7-1 3.4 0 5 2.2 3.5 2 6-.6 9.4-2 2.6-2 5.2.3 7.8-3.6-2.3-5-5.3-4-8.8.7-2.6 2.7-4.7 3-7.5.25-2.4-.6-4.6 1.3-5.9Zm7.5 1.3c3.4.5 5.6 2.5 6.4 5.6.7 2.8-.1 5.2-2 7.3 1.1-2.8.9-5.4-1.3-7.6-1.6-1.6-2.4-3.3-1.6-5.3.15-.4-.35 0-.5 0" fill="#fff" />
    </svg>
  ),
  fastapi: (
    <svg viewBox="0 0 40 40" className={box}>
      <circle cx="20" cy="20" r="19" fill="#009688" />
      <path d="M21 4 9 22h9l-1 14 13-19h-9l1-13Z" fill="#fff" />
    </svg>
  ),
  expo: (
    <svg viewBox="0 0 40 40" className={box}>
      <rect width="40" height="40" rx="10" fill="#111" />
      <path d="M20 9c.7 0 1.35.4 1.8 1.1l9.4 15.3c.55.9-.1 2-1.15 2-.5 0-1-.28-1.3-.75L20.7 13.6c-.3-.5-1.1-.5-1.4 0l-7.25 13.05c-.3.47-.8.75-1.3.75-1.05 0-1.7-1.1-1.15-2l9.4-15.3C18.65 9.4 19.3 9 20 9Z" fill="#fff" />
    </svg>
  ),
  pandas: (
    <svg viewBox="0 0 40 40" className={box}>
      <rect width="40" height="40" rx="8" fill="#130754" />
      <rect x="10" y="8" width="4" height="16" rx="1" fill="#fff" />
      <rect x="10" y="27" width="4" height="5" rx="1" fill="#E70488" />
      <rect x="26" y="16" width="4" height="16" rx="1" fill="#fff" />
      <rect x="26" y="8" width="4" height="5" rx="1" fill="#FFCA00" />
      <rect x="18" y="8" width="4" height="24" rx="1" fill="#fff" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 40 40" className={box}>
      <rect width="40" height="40" rx="10" fill="#F36B42" />
      <path d="M20 8c.8 7 5 11.2 12 12-7 .8-11.2 5-12 12-.8-7-5-11.2-12-12 7-.8 11.2-5 12-12Z" fill="#fff" />
    </svg>
  ),
};
