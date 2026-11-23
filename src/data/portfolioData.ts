export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  rank: 'MASTER' | 'EXPERT' | 'ADVANCED';
  category: 'Frontend' | 'Backend' | 'DevOps & Tools';
  badgeColor: string;
}

export interface QuestProject {
  id: string;
  questCode: string;
  title: string;
  difficulty: 'S-RANK' | 'A-RANK' | 'B-RANK';
  summary: string;
  techStack: string[];
  xpReward: number;
  liveUrl: string;
  repoUrl: string;
  featuredHighlight: string;
}

export interface CvEntry {
  period: string;
  role: string;
  guild: string;
  location: string;
  type: 'WORK' | 'EDUCATION';
  achievements: string[];
}

export const HERO_PROFILE = {
  name: 'Alvian',
  handle: '@rplialvn',
  classTitle: 'Full-Stack Software Engineer',
  level: 27,
  location: 'World 1-1 / Jakarta, ID (Remote Ready)',
  status: 'OPEN FOR NEW QUESTS',
  tagline:
    'Crafting ultra-fast web apps, resilient APIs, and playful interactive experiences one pixel at a time.',
  bioParagraphs: [
    "Greetings, traveler! I'm a full-stack software developer obsessed with clean architecture, responsive interfaces, and shipping products that feel genuinely fun to use.",
    'Over the past 5+ years, I have leveled up across modern TypeScript ecosystems, distributed backend services, and design-engineered frontends—turning complex business bosses into smooth user journeys.',
  ],
  email: 'raplialvian@gmail.com',
  github: 'https://github.com/rplialvn',
  linkedin: 'https://linkedin.com/in/yourusername',
  website: 'https://overworld.dev',
  attributes: [
    { label: 'CLEAN CODE', value: 94, color: '#00A800' },
    { label: 'SYSTEM DESIGN', value: 88, color: '#2038EC' },
    { label: 'UI POLISH', value: 92, color: '#E40058' },
    { label: 'BUG SLAYING', value: 97, color: '#FC9838' },
  ],
  inventoryItems: [
    { slot: 'WEAPON', item: 'Mechanical Split Keyboard +7', bonus: '+25 WPM Speed' },
    { slot: 'SHIELD', item: 'Strict TypeScript Armor', bonus: '-90% Runtime Bugs' },
    { slot: 'POTION', item: 'Double Espresso Elixir', bonus: '+100 Stamina' },
    { slot: 'RELIC', item: 'Neovim & Tmux Scroll', bonus: '+40 Terminal Mastery' },
  ],
};

export const SKILLS_LIST: SkillItem[] = [
  {
    name: 'React / Next.js',
    level: 95,
    rank: 'MASTER',
    category: 'Frontend',
    badgeColor: '#2038EC',
  },
  {
    name: 'TypeScript',
    level: 94,
    rank: 'MASTER',
    category: 'Frontend',
    badgeColor: '#2038EC',
  },
  {
    name: 'Tailwind CSS & Motion',
    level: 92,
    rank: 'MASTER',
    category: 'Frontend',
    badgeColor: '#00A800',
  },
  {
    name: 'HTML5 Canvas / WebGL',
    level: 80,
    rank: 'ADVANCED',
    category: 'Frontend',
    badgeColor: '#FC9838',
  },
  {
    name: 'Node.js / Bun',
    level: 91,
    rank: 'MASTER',
    category: 'Backend',
    badgeColor: '#00A800',
  },
  {
    name: 'PostgreSQL & Redis',
    level: 88,
    rank: 'EXPERT',
    category: 'Backend',
    badgeColor: '#2038EC',
  },
  {
    name: 'Go (Golang) Microservices',
    level: 83,
    rank: 'EXPERT',
    category: 'Backend',
    badgeColor: '#E40058',
  },
  {
    name: 'GraphQL & REST APIs',
    level: 90,
    rank: 'MASTER',
    category: 'Backend',
    badgeColor: '#00A800',
  },
  {
    name: 'Docker & Kubernetes',
    level: 84,
    rank: 'EXPERT',
    category: 'DevOps & Tools',
    badgeColor: '#2038EC',
  },
  {
    name: 'CI/CD (GitHub Actions)',
    level: 89,
    rank: 'EXPERT',
    category: 'DevOps & Tools',
    badgeColor: '#00A800',
  },
  {
    name: 'AWS & Cloudflare Workers',
    level: 86,
    rank: 'EXPERT',
    category: 'DevOps & Tools',
    badgeColor: '#FC9838',
  },
  {
    name: 'Playwright & Vitest',
    level: 88,
    rank: 'EXPERT',
    category: 'DevOps & Tools',
    badgeColor: '#E40058',
  },
];

export const QUEST_PROJECTS: QuestProject[] = [
  {
    id: 'pixel-cloud-ide',
    questCode: 'QUEST #01',
    title: 'ARCADE CLOUD STUDIO',
    difficulty: 'S-RANK',
    summary:
      'Browser-based multiplayer code sandbox with real-time WebSocket collaboration, instant edge previews, and retro sound telemetry.',
    techStack: ['React 19', 'TypeScript', 'WebSockets', 'Cloudflare Workers'],
    xpReward: 4500,
    liveUrl: '#contact',
    repoUrl: 'https://github.com',
    featuredHighlight: 'Sub-40ms sync latency across 12k+ monthly active builders',
  },
  {
    id: 'guild-pay-engine',
    questCode: 'QUEST #02',
    title: 'MERCHANT LEDGER API',
    difficulty: 'S-RANK',
    summary:
      'High-throughput multi-currency payment & invoicing platform with idempotent webhook queues and real-time analytics.',
    techStack: ['Go', 'PostgreSQL', 'Redis', 'Docker'],
    xpReward: 4200,
    liveUrl: '#contact',
    repoUrl: 'https://github.com',
    featuredHighlight: '99.98% uptime processing 1.2M+ ledger events monthly',
  },
  {
    id: 'spriteforge-ui',
    questCode: 'QUEST #03',
    title: 'SPRITEFORGE PIXEL EDITOR',
    difficulty: 'A-RANK',
    summary:
      'Open-source 8-bit sprite & tileset editor featuring onion-skin animation frames, palette swapping, and CSS box-shadow export.',
    techStack: ['HTML5 Canvas', 'Tailwind CSS', 'Vite', 'IndexedDB'],
    xpReward: 3100,
    liveUrl: '#contact',
    repoUrl: 'https://github.com',
    featuredHighlight: '2.8k+ GitHub stars & zero external runtime dependencies',
  },
  {
    id: 'overworld-analytics',
    questCode: 'QUEST #04',
    title: 'PULSE TELEMETRY HUD',
    difficulty: 'A-RANK',
    summary:
      'Privacy-first web performance monitor tracking Core Web Vitals, error traces, and live deployment health scores.',
    techStack: ['Next.js', 'ClickHouse', 'Node.js', 'OpenTelemetry'],
    xpReward: 2900,
    liveUrl: '#contact',
    repoUrl: 'https://github.com',
    featuredHighlight: 'Lightweight 1.8KB tracking script with instant alerting',
  },
];

export const CV_TIMELINE: CvEntry[] = [
  {
    period: '2023 - PRESENT',
    role: 'Junior Full-Stack Engineer',
    guild: 'Starlight Labs Inc.',
    location: 'Remote / Indonesia',
    type: 'WORK',
    achievements: [
      'Architected a modular React + TypeScript design system adopted across 6 core SaaS products, cutting UI delivery time by 38%.',
      'Re-engineered Node.js & PostgreSQL reporting pipelines, dropping p95 query latency from 1.4s down to 140ms.',
      'Mentored a party of 5 junior and mid-level developers through weekly architecture quests and code reviews.',
    ],
  },
  {
    period: '2021 - 2023',
    role: 'Full-Stack Software Developer',
    guild: 'PixelForge Digital',
    location: 'Jakarta, ID',
    type: 'WORK',
    achievements: [
      'Built interactive customer dashboards and payment workflows serving 180,000+ monthly active users.',
      'Introduced automated Playwright E2E test suites in GitHub Actions, eliminating critical checkout regressions.',
      'Collaborated closely with UI/UX designers to ship accessible, high-FPS micro-interactions.',
    ],
  },
  {
    period: '2019 - 2021',
    role: 'Frontend Engineer',
    guild: 'Bitcraft Studio',
    location: 'Bandung, ID',
    type: 'WORK',
    achievements: [
      'Developed 15+ responsive web applications and gamified campaign microsites with 98+ Lighthouse performance scores.',
      'Built reusable state management & API client hooks that standardized frontend project scaffolding.',
    ],
  },
  {
    period: '2023 - Present',
    role: 'B.Sc. in Computer Science',
    guild: 'University Bina Sarana Informatika',
    location: 'GPA 3.72 / 4.00',
    type: 'EDUCATION',
    achievements: [
      'Lead Programmer at Campus Game & Web Dev Guild; won 1st Place in National 48-Hour Hackathon.',
      'Thesis on real-time state synchronization for browser-based multiplayer simulations.',
    ],
  },
];

export const CERTIFICATIONS = [
  'AWS Certified Developer – Associate',
  'Meta Frontend Performance Specialist',
  'Cloud Native Kubernetes Application Developer (CKAD)',
];
