export type LevelId = 'beginner' | 'intermediate';

export const LEVELS: { id: LevelId; label: string; hint: string }[] = [
  {
    id: 'beginner',
    label: 'Beginner',
    hint: 'New to this — starting from fundamentals',
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    hint: 'Some experience — ready to go deeper',
  },
];

export const COHORT_LENGTH = '12 weeks';

export type Track = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  levels: LevelId[];
  stack: string[];
  outcomes: string[];
};

export const TRACKS: Track[] = [
  {
    slug: 'frontend',
    name: 'Frontend Engineering',
    tagline: 'Interfaces people remember',
    blurb:
      'Start with HTML, CSS and vanilla JavaScript, then step up to React, Next.js and TypeScript — plus the product thinking that makes an interface feel right.',
    levels: ['beginner', 'intermediate'],
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript'],
    outcomes: [
      'Build responsive, accessible pages with HTML and CSS',
      'Work confidently with modern JavaScript',
      'Build apps with React, Next.js and TypeScript',
      'Consume APIs and handle loading and error states',
      'Collaborate with Git, pull requests and code review',
      'Ship a portfolio-ready project you can talk through',
    ],
  },
  {
    slug: 'product-design',
    name: 'Product Design',
    tagline: 'Design that ships',
    blurb:
      'Learn to design real product interfaces in Figma — from wireframes and layout to components, prototyping and clean developer handoff.',
    levels: ['beginner', 'intermediate'],
    stack: [
      'Figma',
      'Auto Layout',
      'Components',
      'Prototyping',
      'Design systems',
      'Handoff',
    ],
    outcomes: [
      'Work fluently in Figma — frames, layout, styles',
      'Build reusable components with Auto Layout and variants',
      'Turn a brief into wireframes and a polished UI',
      'Prototype and test flows before a line of code',
      'Maintain a small design system',
      'Hand off designs developers can build from',
    ],
  },
  {
    slug: 'backend',
    name: 'Backend Engineering',
    tagline: 'Systems that hold up',
    blurb:
      'Design reliable APIs and data models with Python (FastAPI) and Node.js (NestJS) — from the first request to real scale.',
    levels: ['beginner', 'intermediate'],
    stack: ['Python', 'FastAPI', 'Node.js', 'NestJS', 'REST APIs', 'Databases'],
    outcomes: [
      'Build documented REST APIs with FastAPI and NestJS',
      'Model data and write efficient database queries',
      'Add authentication and authorization safely',
      'Handle background jobs, queues and caching',
      'Instrument, log and debug a running service',
      'Deploy a backend and keep it healthy',
    ],
  },
  {
    slug: 'fullstack',
    name: 'Fullstack Development',
    tagline: 'Both sides, end to end',
    blurb:
      'Learn the front and the back together — a Next.js frontend, a FastAPI or NestJS backend, a database, and how to connect and ship the whole thing.',
    levels: ['beginner', 'intermediate'],
    stack: [
      'JavaScript',
      'React',
      'Next.js',
      'Node.js / Python',
      'Databases',
      'Deployment',
    ],
    outcomes: [
      'Take a product idea from sketch to deployed app',
      'Build the frontend and the backend that feeds it',
      'Set up a database and connect it end to end',
      'Handle accounts, sessions and protected routes',
      'Deploy, monitor and iterate on a live product',
      'Leave with one real product in your portfolio',
    ],
  },
  {
    slug: 'ai-for-developers',
    name: 'AI for Developers',
    tagline: 'Build with models, not hype',
    blurb:
      'Add AI to real products — working with LLM APIs, prompts, retrieval (RAG), embeddings and simple agents, plus how to evaluate what you ship.',
    levels: ['beginner', 'intermediate'],
    stack: [
      'LLM APIs',
      'Prompt design',
      'RAG',
      'Embeddings',
      'Agents',
      'Evaluation',
    ],
    outcomes: [
      'Call LLM APIs and stream responses inside an app',
      'Design and test prompts that hold up in production',
      'Build retrieval-augmented (RAG) features over your own data',
      'Use embeddings for search and similarity',
      'Compose simple tool-using agents',
      'Evaluate accuracy, cost and latency of what you ship',
    ],
  },
  {
    slug: 'mobile',
    name: 'Mobile Development',
    tagline: 'Apps in real pockets',
    blurb:
      'Build cross-platform mobile apps with React Native and Expo — navigation, native APIs, offline behaviour and store-ready polish.',
    levels: ['intermediate'],
    stack: [
      'React Native',
      'Expo',
      'Navigation',
      'Native APIs',
      'Local storage',
      'Release',
    ],
    outcomes: [
      'Build and run a cross-platform app on real devices',
      'Design mobile navigation and screen flows',
      'Use device capabilities: camera, location, notifications',
      'Handle offline state and local persistence',
      'Prepare a build for the app stores',
      'Ship a mobile app to your portfolio',
    ],
  },
  {
    slug: 'data-analytics',
    name: 'Data & Analytics',
    tagline: 'Turn data into decisions',
    blurb:
      'Go from raw data to clear answers with SQL, Python and visualization — the analytics foundation every product team needs.',
    levels: ['beginner', 'intermediate'],
    stack: [
      'SQL',
      'Python',
      'Pandas',
      'Visualization',
      'Dashboards',
      'Statistics',
    ],
    outcomes: [
      'Query and join data confidently with SQL',
      'Clean and shape messy datasets in Python',
      'Explore data and spot what actually matters',
      'Build dashboards people will actually use',
      'Communicate findings to non-technical teams',
      'Deliver an end-to-end analysis project',
    ],
  },
  {
    slug: 'project-management',
    name: 'Project Management',
    tagline: 'Get the work shipped',
    blurb:
      'Learn to plan and run software projects — Agile and Scrum, sprint planning and backlogs, timelines, risk, and the stakeholder communication that keeps a team moving.',
    levels: ['beginner', 'intermediate'],
    stack: [
      'Agile',
      'Scrum',
      'Kanban',
      'Backlogs',
      'Roadmaps',
      'Jira',
    ],
    outcomes: [
      'Run a project with Agile, Scrum or Kanban',
      'Break work into a backlog and plan sprints',
      'Build realistic timelines and track progress',
      'Spot risks and unblock the team early',
      'Keep stakeholders aligned with clear updates',
      'Run standups, reviews and retrospectives',
    ],
  },
];

export const TRACK_SLUGS = TRACKS.map((t) => t.slug);
