export type TrackAccent = 'blue' | 'coral';

export type LevelId = 'beginner' | 'intermediate' | 'advanced';

export const LEVELS: { id: LevelId; label: string; hint: string }[] = [
  { id: 'beginner', label: 'Beginner', hint: 'New to this — starting from fundamentals' },
  {
    id: 'intermediate',
    label: 'Intermediate',
    hint: 'Some experience — ready to go deeper',
  },
  {
    id: 'advanced',
    label: 'Advanced',
    hint: 'Confident — sharpening for real-world scale',
  },
];

export type Track = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  accent: TrackAccent;
  levels: LevelId[];
  duration: string;
  format: string;
  stack: string[];
  outcomes: string[];
};

export const TRACKS: Track[] = [
  {
    slug: 'frontend',
    name: 'Frontend Engineering',
    tagline: 'Interfaces people remember',
    blurb:
      'Build fast, accessible, good-looking product interfaces with HTML, CSS, JavaScript and React — plus the product thinking that makes them feel right.',
    accent: 'blue',
    levels: ['beginner', 'intermediate', 'advanced'],
    duration: '~12 weeks',
    format: 'Project-based · live mentorship · online',
    stack: ['HTML & CSS', 'JavaScript', 'React', 'TypeScript', 'Testing', 'Git'],
    outcomes: [
      'Turn a design into a responsive, accessible interface',
      'Work confidently with React, components and state',
      'Consume and handle APIs, loading and error states',
      'Write and run tests for the code you ship',
      'Collaborate with Git, pull requests and code review',
      'Ship a portfolio-ready project you can talk through',
    ],
  },
  {
    slug: 'backend',
    name: 'Backend Engineering',
    tagline: 'Systems that hold up',
    blurb:
      'Design reliable APIs, model data properly, and reason about performance and security — from the first request to real scale.',
    accent: 'blue',
    levels: ['beginner', 'intermediate', 'advanced'],
    duration: '~14 weeks',
    format: 'Project-based · live mentorship · online',
    stack: [
      'Node.js',
      'REST & APIs',
      'Databases (SQL)',
      'Auth',
      'Caching',
      'Deployment',
    ],
    outcomes: [
      'Design and build a documented REST API',
      'Model data and write efficient queries',
      'Add authentication and authorization safely',
      'Handle background jobs, queues and caching',
      'Instrument, log and debug a running service',
      'Deploy a backend and keep it healthy',
    ],
  },
  {
    slug: 'fullstack',
    name: 'The Builder Path',
    tagline: 'Idea to working product',
    blurb:
      'A practical route through the whole stack for people who want to take an idea and ship it — frontend, backend and the glue between them.',
    accent: 'blue',
    levels: ['beginner', 'intermediate'],
    duration: '~16 weeks',
    format: 'Project-based · live mentorship · online',
    stack: [
      'JavaScript',
      'React',
      'Node.js',
      'Databases',
      'APIs',
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
    slug: 'mobile',
    name: 'Mobile Development',
    tagline: 'Apps in real pockets',
    blurb:
      'Build cross-platform mobile apps with React Native — navigation, native APIs, offline behaviour and store-ready polish.',
    accent: 'blue',
    levels: ['beginner', 'intermediate'],
    duration: '~12 weeks',
    format: 'Project-based · live mentorship · online',
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
    slug: 'cloud-devops',
    name: 'Cloud & DevOps',
    tagline: 'Ship it, then keep it up',
    blurb:
      'Learn the pipeline from commit to production — containers, CI/CD, infrastructure as code, and the observability to sleep at night.',
    accent: 'blue',
    levels: ['intermediate', 'advanced'],
    duration: '~12 weeks',
    format: 'Lab-based · live mentorship · online',
    stack: [
      'Linux',
      'Docker',
      'CI/CD',
      'Cloud (AWS)',
      'Terraform',
      'Monitoring',
    ],
    outcomes: [
      'Containerize an application and run it anywhere',
      'Build a CI/CD pipeline from commit to deploy',
      'Provision infrastructure as code',
      'Set up logging, metrics and alerting',
      'Reason about cost, scaling and reliability',
      'Run an incident from alert to post-mortem',
    ],
  },
  {
    slug: 'data-analytics',
    name: 'Data & Analytics',
    tagline: 'Turn data into decisions',
    blurb:
      'Go from raw data to clear answers with SQL, Python and visualization — the analytics foundation every product team needs.',
    accent: 'blue',
    levels: ['beginner', 'intermediate'],
    duration: '~12 weeks',
    format: 'Project-based · live mentorship · online',
    stack: [
      'SQL',
      'Python',
      'Pandas',
      'Visualization',
      'Dashboards',
      'Statistics basics',
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
];

export const TRACK_SLUGS = TRACKS.map((t) => t.slug);

export function getTrack(slug: string): Track | undefined {
  return TRACKS.find((t) => t.slug === slug);
}

/** Per-track accent — used for the index-card tab / pin / marker. */
export const accentClasses: Record<
  TrackAccent,
  { tab: string; pin: string; ink: string }
> = {
  blue: {
    tab: 'bg-primary text-white',
    pin: 'bg-primary',
    ink: 'text-primary',
  },
  coral: {
    tab: 'bg-accent text-white',
    pin: 'bg-accent',
    ink: 'text-accent',
  },
};
