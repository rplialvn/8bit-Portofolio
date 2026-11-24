export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  rank: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT' | 'MASTER';
  category: 'Frontend' | 'Backend' | 'DevOps & Tools';
  badgeColor: string;
}

export interface QuestProject {
  id: string;
  questCode: string;
  title: string;
  difficulty: 'S-RANK' | 'A-RANK' | 'B-RANK' | 'C-RANK';
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
  type: 'WORK' | 'EDUCATION' | 'INTERNSHIP' | 'FREELANCE';
  achievements: string[];
}

export const HERO_PROFILE = {
  name: 'Alvian',
  handle: '@rplialvn',
  classTitle: 'Software Engineer',
  level: 22,
  location: 'World 1-1 / Jakarta, ID (Remote Ready)',
  status: 'OPEN FOR NEW QUESTS',
  tagline:
    'Crafting responsive web apps and playful interactive experiences, one pixel at a time.',
  bioParagraphs: [
    "Greetings, traveler from the digital realm! I'm Alvian, a web developer and final-year student on a quest to craft engaging digital experiences.",
    'Grinding code since 2023, leveling up across the modern web ecosystem to build responsive interfaces, snappy web apps, and clean user experiences.',
  ],
  email: 'raplialvian@gmail.com',
  github: 'https://github.com/rplialvn',
  linkedin: 'https://linkedin.com/in/yourusername',
  website: 'https://alviandev.web.id',
  attributes: [
    { label: 'CLEAN CODE', value: 94, color: '#00A800' },
    { label: 'SYSTEM DESIGN', value: 88, color: '#2038EC' },
    { label: 'UI POLISH', value: 92, color: '#E40058' },
    { label: 'BUG SLAYING', value: 97, color: '#FC9838' },
  ],
  inventoryItems: [
    { slot: 'WEAPON', item: 'Mechanical Split Keyboard +7', bonus: '+25 WPM Speed' },
    { slot: 'SHIELD', item: 'Strict TypeScript Armor', bonus: '-90% Runtime Bugs' },
    { slot: 'POTION', item: 'Double Espresso', bonus: '+100 Stamina' },
    { slot: 'RELIC', item: 'Browser DevTools Scope', bonus: '+50 UI Debugging' },
  ],
};

export const SKILLS_LIST: SkillItem[] = [
  {
    name: 'React / Next.js',
    level: 95,
    rank: 'EXPERT',
    category: 'Frontend',
    badgeColor: '#2038EC',
  },
  {
    name: 'TypeScript',
    level: 94,
    rank: 'EXPERT',
    category: 'Frontend',
    badgeColor: '#2038EC',
  },
  {
    name: 'Tailwind CSS & Motion',
    level: 92,
    rank: 'EXPERT',
    category: 'Frontend',
    badgeColor: '#00A800',
  },
  {
    name: 'HTML5',
    level: 86,
    rank: 'ADVANCED',
    category: 'Frontend',
    badgeColor: '#FC9838',
  },
  {
    name: 'Node.js / Bun',
    level: 91,
    rank: 'EXPERT',
    category: 'Backend',
    badgeColor: '#00A800',
  },
  {
    name: 'PostgreSQL & Redis',
    level: 85,
    rank: 'INTERMEDIATE',
    category: 'Backend',
    badgeColor: '#2038EC',
  },
  {
    name: 'Go (Golang) Microservices',
    level: 83,
    rank: 'BEGINNER',
    category: 'Backend',
    badgeColor: '#E40058',
  },
  {
    name: 'GraphQL & REST APIs',
    level: 90,
    rank: 'ADVANCED',
    category: 'Backend',
    badgeColor: '#00A800',
  },
  {
    name: 'Docker & Kubernetes',
    level: 84,
    rank: 'BEGINNER',
    category: 'DevOps & Tools',
    badgeColor: '#2038EC',
  },
  // {
  //   name: 'CI/CD (GitHub Actions)',
  //   level: 89,
  //   rank: 'EXPERT',
  //   category: 'DevOps & Tools',
  //   badgeColor: '#00A800',
  // },
  // {
  //   name: 'AWS & Cloudflare Workers',
  //   level: 86,
  //   rank: 'EXPERT',
  //   category: 'DevOps & Tools',
  //   badgeColor: '#FC9838',
  // },
  // {
  //   name: 'Playwright & Vitest',
  //   level: 88,
  //   rank: 'EXPERT',
  //   category: 'DevOps & Tools',
  //   badgeColor: '#E40058',
  // },
];

export const QUEST_PROJECTS: QuestProject[] = [
  // {
  //   id: 'pixel-cloud-ide',
  //   questCode: 'QUEST #01',
  //   title: 'ARCADE CLOUD STUDIO',
  //   difficulty: 'S-RANK',
  //   summary:
  //     'Browser-based multiplayer code sandbox with real-time WebSocket collaboration, instant edge previews, and retro sound telemetry.',
  //   techStack: ['React 19', 'TypeScript', 'WebSockets', 'Cloudflare Workers'],
  //   xpReward: 4500,
  //   liveUrl: '#contact',
  //   repoUrl: 'https://github.com',
  //   featuredHighlight: 'Sub-40ms sync latency across 12k+ monthly active builders',
  // },
  // {
  //   id: 'guild-pay-engine',
  //   questCode: 'QUEST #02',
  //   title: 'MERCHANT LEDGER API',
  //   difficulty: 'S-RANK',
  //   summary:
  //     'High-throughput multi-currency payment & invoicing platform with idempotent webhook queues and real-time analytics.',
  //   techStack: ['Go', 'PostgreSQL', 'Redis', 'Docker'],
  //   xpReward: 4200,
  //   liveUrl: '#contact',
  //   repoUrl: 'https://github.com',
  //   featuredHighlight: '99.98% uptime processing 1.2M+ ledger events monthly',
  // },
  // {
  //   id: 'spriteforge-ui',
  //   questCode: 'QUEST #03',
  //   title: 'SPRITEFORGE PIXEL EDITOR',
  //   difficulty: 'A-RANK',
  //   summary:
  //     'Open-source 8-bit sprite & tileset editor featuring onion-skin animation frames, palette swapping, and CSS box-shadow export.',
  //   techStack: ['HTML5 Canvas', 'Tailwind CSS', 'Vite', 'IndexedDB'],
  //   xpReward: 3100,
  //   liveUrl: '#contact',
  //   repoUrl: 'https://github.com',
  //   featuredHighlight: '2.8k+ GitHub stars & zero external runtime dependencies',
  // },
  // {
  //   id: 'overworld-analytics',
  //   questCode: 'QUEST #04',
  //   title: 'PULSE TELEMETRY HUD',
  //   difficulty: 'A-RANK',
  //   summary:
  //     'Privacy-first web performance monitor tracking Core Web Vitals, error traces, and live deployment health scores.',
  //   techStack: ['Next.js', 'ClickHouse', 'Node.js', 'OpenTelemetry'],
  //   xpReward: 2900,
  //   liveUrl: '#contact',
  //   repoUrl: 'https://github.com',
  //   featuredHighlight: 'Lightweight 1.8KB tracking script with instant alerting',
  // },
];

export const CV_TIMELINE: CvEntry[] = [
  {
    period: '2026',
    role: 'Full-Stack developer',
    guild: 'PT.Nigmagrid Indo Nesia',
    location: 'Jakarta / Indonesia',
    type: 'INTERNSHIP',
    achievements: [
    'Developed a full-stack internal Meeting Notes platform integrating React, FastAPI, and offline Whisper AI transcription for automated meeting minutes.',
    'Performed functional QA testing and bug verification for the JakPro enterprise web application, ensuring release stability and UX compliance.',
    'Collaborated in cross-functional team workflows, participating in code reviews, bug triage, and sprint deliverables.',
  ],
  },
//   {
//     period: '2026',
//     role: 'Full-Stack Software Developer',
//     guild: 'Meeting-Notes',
//     location: 'Jakarta, ID',
//     type: 'WORK',
//     achievements: [
//   'Engineered a full-stack meeting minutes app with FastAPI (Python), SQLite, and React (Vite + Tailwind CSS).',
//   'Integrated offline Speech-to-Text using faster-whisper, enabling zero-cost local CPU transcription with segment-level audio sync.',
//   'Implemented in-browser audio recording via MediaRecorder API and automated report generation to official PDF and DOCX formats.',
// ],
//   },
  // {
  //   period: '2019 - 2021',
  //   role: 'Frontend Engineer',
  //   guild: 'Bitcraft Studio',
  //   location: 'Bandung, ID',
  //   type: 'WORK',
  //   achievements: [
  //     'Developed 15+ responsive web applications and gamified campaign microsites with 98+ Lighthouse performance scores.',
  //     'Built reusable state management & API client hooks that standardized frontend project scaffolding.',
  //   ],
  // },
  {
    period: '2023 - Present',
    role: 'Undergraduate Technology Information (S.Kom)',
    guild: 'Universitas Bina Sarana Informatika',
    location: 'GPA 3.72/4.00',
    type: 'EDUCATION',
    achievements: [
    'Completed core coursework in Web Development, Database Systems, Object-Oriented Programming, and Software Engineering.',
    'Active 7th-semester student building practical full-stack projects and preparing final-year capstone research.',
    ],
  },
];

export const CERTIFICATIONS = [
  'AWS Certified Developer – Associate',
  'Meta Frontend Performance Specialist',
  'Cloud Native Kubernetes Application Developer (CKAD)',
];
