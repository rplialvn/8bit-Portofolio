import React, { useState } from 'react';
import {
  PixelAvatar,
  PixelChestIcon,
  PixelCloud,
  PixelCoin,
  PixelHeart,
  PixelPipe,
  PixelQuestionBlock,
  PixelScrollIcon,
  PixelSwordIcon,
} from './components/PixelArt';
import {
  CERTIFICATIONS,
  CV_TIMELINE,
  HERO_PROFILE,
  QUEST_PROJECTS,
  SKILLS_LIST,
  type QuestProject,
  type SkillItem,
} from './data/portfolioData';
import { playBlipSfx, playCoinSfx, playPowerUpSfx } from './utils/retroSfx';

type NavSection = 'home' | 'about' | 'skills' | 'quests' | 'cv' | 'contact';

const NAV_ITEMS: { id: NavSection; label: string; world: string }[] = [
  { id: 'home', label: 'HOME', world: '1-1' },
  { id: 'about', label: 'ABOUT', world: '1-2' },
  { id: 'skills', label: 'SKILLS', world: '1-3' },
  { id: 'quests', label: 'QUESTS', world: '1-4' },
  { id: 'cv', label: 'CV', world: '2-1' },
  { id: 'contact', label: 'CONTACT', world: '2-2' },
];

export default function App() {
  const [coins, setCoins] = useState<number>(22);
  const [blockHits, setBlockHits] = useState<number>(0);
  const [sfxOn, setSfxOn] = useState<boolean>(true);
  const [activeNav, setActiveNav] = useState<NavSection>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Skills filter
  const [skillFilter, setSkillFilter] = useState<'ALL' | SkillItem['category']>('ALL');

  // Selected Quest modal / detail
  const [selectedQuest, setSelectedQuest] = useState<QuestProject | null>(null);

  // CV filter
  const [cvFilter, setCvFilter] = useState<'ALL' | 'WORK' | 'EDUCATION'>('ALL');

  // Contact Form state
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [questType, setQuestType] = useState('Full-Time Party Invite');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleHitQuestionBlock = () => {
    setCoins((prev) => prev + 1);
    setBlockHits((prev) => prev + 1);
    playCoinSfx(sfxOn);
  };

  const scrollToSection = (id: NavSection) => {
    playBlipSfx(sfxOn);
    setActiveNav(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCvTxt = () => {
    playPowerUpSfx(sfxOn);
    const lines = [
      `====================================================`,
      `  ${HERO_PROFILE.name} — ${HERO_PROFILE.classTitle}`,
      `  Location: ${HERO_PROFILE.location}`,
      `  Email: ${HERO_PROFILE.email} | GitHub: ${HERO_PROFILE.github}`,
      `====================================================`,
      ``,
      `SUMMARY`,
      HERO_PROFILE.bioParagraphs.join('\n'),
      ``,
      `CORE SKILLS`,
      ...SKILLS_LIST.map((s) => `- ${s.name} [${s.rank} - ${s.level}/100] (${s.category})`),
      ``,
      `QUEST LOG / EXPERIENCE & EDUCATION`,
      ...CV_TIMELINE.map(
        (item) =>
          `\n[${item.period}] ${item.role} @ ${item.guild} (${item.location})\n` +
          item.achievements.map((a) => `  * ${a}`).join('\n')
      ),
      ``,
      `CERTIFICATIONS`,
      ...CERTIFICATIONS.map((c) => `- ${c}`),
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${HERO_PROFILE.name.toLowerCase().replace(/\s+/g, '-')}-cv-8bit.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePrintCv = () => {
    playBlipSfx(sfxOn);
    window.print();
  };

  const handleCopyEmail = () => {
    playCoinSfx(sfxOn);
    navigator.clipboard?.writeText(HERO_PROFILE.email).catch(() => {});
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playPowerUpSfx(sfxOn);
    setCoins((prev) => prev + 10);
    setSubmitted(true);
  };

  const filteredSkills =
    skillFilter === 'ALL'
      ? SKILLS_LIST
      : SKILLS_LIST.filter((skill) => skill.category === skillFilter);

  const filteredCv =
    cvFilter === 'ALL' ? CV_TIMELINE : CV_TIMELINE.filter((entry) => entry.type === cvFilter);

  return (
    <div className="min-h-screen relative selection:bg-[#FCD856] selection:text-[#181425]">
      {/* Floating Overworld Clouds Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0 no-print" aria-hidden="true">
        <div className="absolute top-20 left-0 animate-cloud-slow opacity-90">
          <PixelCloud className="w-36 h-20" />
        </div>
        <div
          className="absolute top-48 left-0 animate-cloud-mid opacity-80"
          style={{ animationDelay: '-18s' }}
        >
          <PixelCloud className="w-28 h-14" />
        </div>
        <div
          className="absolute top-80 left-0 animate-cloud-slow opacity-75"
          style={{ animationDelay: '-32s' }}
        >
          <PixelCloud className="w-44 h-24" />
        </div>
      </div>

      {/* TOP 8-BIT GAME HUD NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#181425] text-white border-b-4 border-[#000000] shadow-[0_4px_0_rgba(0,0,0,0.35)] no-print">
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Left HUD Status: Player Hearts + Coins */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 text-left cursor-pointer group"
            >
              <span className="inline-block w-3 h-3 bg-[#00E436] border-2 border-white" />
              <span className="font-pixel text-[11px] sm:text-xs tracking-wider text-[#FCD856] group-hover:text-white">
                P1:{HERO_PROFILE.name.split(' ')[0]}
              </span>
            </button>

            <div className="hidden sm:flex items-center gap-1" title="Player Health: 100%">
              <PixelHeart filled className="w-5 h-5" />
              <PixelHeart filled className="w-5 h-5" />
              <PixelHeart filled className="w-5 h-5" />
            </div>

            <button
              type="button"
              onClick={handleHitQuestionBlock}
              title="Click to collect a coin!"
              className="flex items-center gap-1.5 bg-[#2B2440] px-2.5 py-1 border-2 border-[#FFFDF5] cursor-pointer active:translate-y-0.5"
            >
              <PixelCoin className="w-4 h-5 animate-coin" />
              <span className="font-pixel text-[10px] text-[#FCD856]">
                x{String(coins).padStart(3, '0')}
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`font-pixel text-[10px] px-3 py-2 border-2 transition-transform cursor-pointer ${
                    isActive
                      ? 'bg-[#FCD856] text-[#181425] border-white -translate-y-0.5'
                      : 'bg-[#2B2440] text-white border-[#4F456E] hover:bg-[#3B3256] hover:border-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: SFX Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                const next = !sfxOn;
                setSfxOn(next);
                if (next) playCoinSfx(true);
              }}
              className={`font-pixel text-[9px] px-2.5 py-1.5 border-2 cursor-pointer ${
                sfxOn
                  ? 'bg-[#00A800] text-white border-white'
                  : 'bg-[#5A5368] text-[#D0CBD8] border-[#8A829C]'
              }`}
              title="Toggle 8-bit retro sound effects"
            >
              SFX:{sfxOn ? 'ON' : 'OFF'}
            </button>

            <button
              type="button"
              onClick={() => {
                playBlipSfx(sfxOn);
                setMobileMenuOpen((prev) => !prev);
              }}
              className="lg:hidden font-pixel text-[10px] px-3 py-1.5 bg-[#FCD856] text-[#181425] border-2 border-white cursor-pointer"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#221C35] border-t-4 border-black px-4 py-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`font-pixel text-[10px] py-2.5 px-3 border-2 text-left cursor-pointer ${
                  activeNav === item.id
                    ? 'bg-[#FCD856] text-[#181425] border-white'
                    : 'bg-[#181425] text-white border-[#4F456E]'
                }`}
              >
                <span className="block text-[8px] opacity-75">WORLD {item.world}</span>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* MAIN OVERWORLD STAGE */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20 space-y-24">
        {/* ==================== 1. HOME / START SCREEN ==================== */}
        <section id="home" className="scroll-mt-24 pt-2 sm:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Dialog Card */}
            <div className="lg:col-span-7 pixel-card p-6 sm:p-8 relative">
              {/* World Stage Pill */}
              <div className="inline-flex items-center gap-2 bg-[#181425] text-[#FCD856] px-3 py-1.5 mb-5 border-2 border-[#181425]">
                <span className="w-2.5 h-2.5 bg-[#00E436] inline-block animate-cursor" />
                <span className="font-pixel text-[10px]">
                  WORLD 1-1 • {HERO_PROFILE.status}
                </span>
              </div>

              <p className="font-pixel text-xs sm:text-sm text-[#2038EC] mb-2">
                HELLO! I AM
              </p>
              <h1 className="font-pixel text-2xl sm:text-4xl text-[#181425] tracking-tight mb-3">
                {HERO_PROFILE.name}
              </h1>
              <div className="inline-block bg-[#FCD856] border-2 border-[#181425] px-3 py-1 mb-5">
                <span className="font-pixel text-[10px] sm:text-xs text-[#181425]">
                  LVL {HERO_PROFILE.level} {HERO_PROFILE.classTitle.toUpperCase()}
                </span>
              </div>

              <p className="text-2xl sm:text-3xl leading-snug text-[#2A2438] mb-6">
                {HERO_PROFILE.tagline}
                <span className="inline-block w-3 h-6 bg-[#181425] ml-1.5 align-middle animate-cursor" />
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('quests')}
                  className="pixel-btn bg-[#00A800] text-white text-xs px-5 py-3.5"
                >
                  ▶ START QUESTS
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('cv')}
                  className="pixel-btn bg-[#FCD856] text-[#181425] text-xs px-5 py-3.5"
                >
                  VIEW CV SCROLL
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="pixel-btn bg-[#2038EC] text-white text-xs px-5 py-3.5"
                >
                  INVITE TO PARTY
                </button>
              </div>

              {/* Quick Coordinates Footer */}
              <div className="mt-7 pt-4 border-t-4 border-dashed border-[#D5CCB4] flex flex-wrap items-center justify-between gap-3 text-xl text-[#473E59]">
                <span>📍 {HERO_PROFILE.location}</span>
                <span className="font-pixel text-[10px] bg-[#E8E0CC] px-2.5 py-1 border-2 border-[#181425]">
                  EXP: 14,700 / 15,000
                </span>
              </div>
            </div>

            {/* Right Sprite Stage + Interactive Mystery Block */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm pixel-card-blue p-6 relative overflow-hidden">
                {/* Top mini score bar */}
                <div className="flex items-center justify-between font-pixel text-[10px] text-[#FCD856] mb-4">
                  <span>CHARACTER SELECT</span>
                  <span>1UP</span>
                </div>

                {/* Sky Viewport inside arcade card */}
                <div className="bg-[#5C94FC] border-4 border-[#181425] pt-6 px-4 pb-0 relative flex flex-col items-center">
                  {/* Mystery Interactive Question Block */}
                  <div className="mb-3 flex flex-col items-center">
                    <PixelQuestionBlock onClick={handleHitQuestionBlock} hitCount={blockHits} />
                    <span className="font-pixel text-[8px] text-[#181425] bg-white/90 px-2 py-0.5 mt-1 border border-[#181425]">
                      TAP BLOCK FOR COINS!
                    </span>
                  </div>

                  {/* Animated 8-bit Developer Sprite + Pipe */}
                  <div className="w-full flex items-end justify-center gap-4 pt-2">
                    <div className="animate-hero-idle">
                      <PixelAvatar className="w-36 h-36 sm:w-40 sm:h-40" />
                    </div>
                    <PixelPipe className="w-14 h-16 shrink-0" />
                  </div>

                  {/* Overworld grass strip */}
                  <div className="w-[calc(100%+2rem)] -mx-4 h-5 overworld-grass" />
                </div>

                {/* Character Quick Stats */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-[#121F8A] border-2 border-white p-2">
                    <div className="font-pixel text-xs text-[#FCD856]">3 YRS</div>
                    <div className="text-lg text-white">CODING</div>
                  </div>
                  <div className="bg-[#121F8A] border-2 border-white p-2">
                    <div className="font-pixel text-xs text-[#00E436]">100%</div>
                    <div className="text-lg text-white">PASSION</div>
                  </div>
                  <div className="bg-[#121F8A] border-2 border-white p-2">
                    <div className="font-pixel text-xs text-[#FF77A8]">99.9%</div>
                    <div className="text-lg text-white">UPTIME</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 2. ABOUT / CHARACTER SHEET ==================== */}
        <section id="about" className="scroll-mt-24">
          <SectionBanner
            world="WORLD 1-2"
            title="ABOUT PLAYER"
            subtitle="Character Lore, Base Stats & Equipped Gear"
            icon={<PixelSwordIcon className="w-7 h-7" />}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            {/* Character Story & Bio */}
            <div className="lg:col-span-7 pixel-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b-4 border-[#181425]">
                  <div>
                    <h3 className="font-pixel text-sm sm:text-base text-[#181425]">
                      BIOGRAPHY
                    </h3>
                    <p className="text-xl text-[#4A415C]">{HERO_PROFILE.handle}</p>
                  </div>
                  <span className="font-pixel text-[10px] bg-[#00A800] text-white px-3 py-1.5 border-2 border-[#181425]">
                    ALIGN: LAWFUL GOOD
                  </span>
                </div>

                <div className="space-y-4 text-2xl leading-relaxed text-[#181425]">
                  {HERO_PROFILE.bioParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Base Attributes Bars */}
              <div className="mt-8 pt-6 border-t-4 border-[#181425]">
                <h4 className="font-pixel text-xs text-[#181425] mb-4">BASE ATTRIBUTES</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {HERO_PROFILE.attributes.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#F3EBD6] border-2 border-[#181425] p-3"
                    >
                      <div className="flex justify-between items-center font-pixel text-[10px] mb-2">
                        <span>{stat.label}</span>
                        <span>{stat.value}/100</span>
                      </div>
                      <div className="w-full h-4 bg-[#181425] p-0.5">
                        <div
                          className="h-full transition-all duration-500"
                          style={{
                            width: `${stat.value}%`,
                            backgroundColor: stat.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Equipped Inventory Box */}
            <div className="lg:col-span-5 pixel-card-gold p-6 sm:p-8">
              <div className="flex items-center gap-3 pb-4 mb-5 border-b-4 border-[#181425]">
                <PixelChestIcon className="w-7 h-7" />
                <h3 className="font-pixel text-sm sm:text-base text-[#181425]">
                  EQUIPPED GEAR
                </h3>
              </div>

              <div className="space-y-3.5">
                {HERO_PROFILE.inventoryItems.map((gear) => (
                  <div
                    key={gear.slot}
                    className="bg-[#FFFDF5] border-4 border-[#181425] p-3.5 shadow-[4px_4px_0_#181425]"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-pixel text-[9px] bg-[#181425] text-[#FCD856] px-2 py-0.5">
                        {gear.slot}
                      </span>
                      <span className="font-pixel text-[9px] text-[#008000]">
                        {gear.bonus}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-[#181425]">{gear.item}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-[#181425] text-[#FFFDF5] p-4 border-2 border-white">
                <p className="font-pixel text-[10px] text-[#FCD856] mb-1">PASSIVE SKILL:</p>
                <p className="text-xl leading-snug">
                  &ldquo; Pixel-Perfect Empathy &rdquo; — Bridges product goals, engineering trade-offs, and delightful UX without losing frame rate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 3. SKILLS / SKILL TREE ==================== */}
        <section id="skills" className="scroll-mt-24">
          <SectionBanner
            world="WORLD 1-3"
            title="SKILL TREE & TECH ARSENAL"
            subtitle="Unlocked Languages, Frameworks & Cloud Spells"
            icon={<PixelCoin className="w-6 h-7" />}
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 mt-8 mb-6 no-print">
            {(['ALL', 'Frontend', 'Backend', 'DevOps & Tools'] as const).map((cat) => {
              const active = skillFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    playBlipSfx(sfxOn);
                    setSkillFilter(cat);
                  }}
                  className={`pixel-btn text-[10px] sm:text-xs px-4 py-2.5 ${
                    active
                      ? 'bg-[#FCD856] text-[#181425]'
                      : 'bg-[#FFFDF5] text-[#181425]'
                  }`}
                >
                  {cat === 'ALL' ? '★ ALL SKILLS' : cat.toUpperCase()}
                </button>
              );
            })}
          </div>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill) => {
              const filledSegments = Math.round(skill.level / 10);
              return (
                <div
                  key={skill.name}
                  className="pixel-card p-5 hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="text-lg uppercase tracking-wider text-[#5A5368] block">
                        {skill.category}
                      </span>
                      <h3 className="font-pixel text-xs sm:text-sm text-[#181425]">
                        {skill.name}
                      </h3>
                    </div>
                    <span
                      className="font-pixel text-[9px] text-white px-2 py-1 border-2 border-[#181425] shrink-0"
                      style={{ backgroundColor: skill.badgeColor }}
                    >
                      {skill.rank}
                    </span>
                  </div>

                  {/* 10-Segment 8-bit Power Meter */}
                  <div className="mt-4">
                    <div className="flex justify-between font-pixel text-[10px] text-[#181425] mb-1.5">
                      <span>MASTERY</span>
                      <span>LVL {skill.level}</span>
                    </div>
                    <div className="grid grid-cols-10 gap-1 bg-[#181425] p-1.5">
                      {Array.from({ length: 10 }).map((_, idx) => (
                        <div
                          key={idx}
                          className="h-3.5"
                          style={{
                            backgroundColor:
                              idx < filledSegments ? skill.badgeColor : '#352F44',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================== 4. QUEST LOG / PROJECTS ==================== */}
        <section id="quests" className="scroll-mt-24">
          <SectionBanner
            world="WORLD 1-4"
            title="QUEST LOG (PROJECTS)"
            subtitle="Completed Boss Battles, Open-Source Builds & Production Systems"
            icon={<PixelChestIcon className="w-7 h-7" />}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-8">
            {QUEST_PROJECTS.map((quest) => (
              <article
                key={quest.id}
                className="pixel-card flex flex-col justify-between p-6 sm:p-7 relative"
              >
                <div>
                  {/* Top Quest Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="font-pixel text-[10px] bg-[#181425] text-[#FCD856] px-2.5 py-1">
                      {quest.questCode}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-pixel text-[10px] px-2.5 py-1 border-2 border-[#181425] ${
                          quest.difficulty === 'S-RANK'
                            ? 'bg-[#E40058] text-white'
                            : 'bg-[#2038EC] text-white'
                        }`}
                      >
                        {quest.difficulty}
                      </span>
                      <span className="font-pixel text-[10px] bg-[#FCD856] text-[#181425] px-2.5 py-1 border-2 border-[#181425]">
                        +{quest.xpReward} XP
                      </span>
                    </div>
                  </div>

                  <h3 className="font-pixel text-base sm:text-lg text-[#181425] mb-3">
                    {quest.title}
                  </h3>

                  <p className="text-2xl text-[#2B2438] leading-snug mb-4">
                    {quest.summary}
                  </p>

                  {/* Achievement Banner */}
                  <div className="bg-[#E8F8E8] border-2 border-[#00A800] px-3.5 py-2 mb-5 text-xl text-[#005800]">
                    ★ {quest.featuredHighlight}
                  </div>

                  {/* Tech Loot Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {quest.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-pixel text-[9px] bg-[#F3EBD6] text-[#181425] px-2.5 py-1.5 border-2 border-[#181425]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quest Card Actions */}
                <div className="pt-4 border-t-4 border-[#181425] flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      playBlipSfx(sfxOn);
                      setSelectedQuest(quest);
                    }}
                    className="pixel-btn bg-[#00A800] text-white text-[10px] px-4 py-2.5"
                  >
                    INSPECT QUEST
                  </button>
                  <a
                    href={quest.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playBlipSfx(sfxOn)}
                    className="pixel-btn bg-[#FFFDF5] text-[#181425] text-[10px] px-4 py-2.5 inline-block"
                  >
                    SOURCE CODE ↗
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Modal Dialog for Quest Inspection */}
          {selectedQuest && (
            <div
              className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 no-print"
              role="dialog"
              aria-modal="true"
              aria-labelledby="quest-modal-title"
            >
              <div className="pixel-card max-w-xl w-full p-6 sm:p-8 relative">
                <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b-4 border-[#181425]">
                  <span className="font-pixel text-xs bg-[#E40058] text-white px-3 py-1 border-2 border-[#181425]">
                    {selectedQuest.questCode} • {selectedQuest.difficulty}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      playBlipSfx(sfxOn);
                      setSelectedQuest(null);
                    }}
                    className="pixel-btn bg-[#FCD856] text-[#181425] text-xs px-3 py-1.5"
                  >
                    X CLOSE
                  </button>
                </div>

                <h3
                  id="quest-modal-title"
                  className="font-pixel text-lg sm:text-xl text-[#181425] mb-3"
                >
                  {selectedQuest.title}
                </h3>
                <p className="text-2xl leading-relaxed text-[#2A2438] mb-4">
                  {selectedQuest.summary}
                </p>
                <div className="bg-[#FFF4CC] border-4 border-[#181425] p-4 mb-5">
                  <div className="font-pixel text-[10px] text-[#C84C0C] mb-1">
                    VICTORY OUTCOME
                  </div>
                  <p className="text-2xl text-[#181425]">{selectedQuest.featuredHighlight}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedQuest.techStack.map((t) => (
                    <span
                      key={t}
                      className="font-pixel text-[9px] bg-[#2038EC] text-white px-2.5 py-1 border-2 border-[#181425]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-end gap-3">
                  <a
                    href={selectedQuest.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="pixel-btn bg-[#181425] text-white text-[10px] px-4 py-3"
                  >
                    GITHUB REPO ↗
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedQuest(null);
                      scrollToSection('contact');
                    }}
                    className="pixel-btn bg-[#00A800] text-white text-[10px] px-4 py-3"
                  >
                    BUILD SOMETHING SIMILAR
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ==================== 5. CV / ADVENTURE CHRONICLES ==================== */}
        <section id="cv" className="scroll-mt-24">
          <SectionBanner
            world="WORLD 2-1"
            title="CURRICULUM VITAE (CHRONICLES)"
            subtitle="Guild History, Academic Training & Downloadable Adventure Scroll"
            icon={<PixelScrollIcon className="w-7 h-7" />}
          />

          {/* CV Toolbar: Filter + Download/Print Buttons */}
          <div className="mt-8 mb-6 flex flex-wrap items-center justify-between gap-4 no-print">
            <div className="flex flex-wrap gap-2">
              {(['ALL', 'WORK', 'EDUCATION'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    playBlipSfx(sfxOn);
                    setCvFilter(tab);
                  }}
                  className={`pixel-btn text-[10px] px-4 py-2.5 ${
                    cvFilter === tab
                      ? 'bg-[#FCD856] text-[#181425]'
                      : 'bg-[#FFFDF5] text-[#181425]'
                  }`}
                >
                  {tab === 'ALL' ? 'ALL LOGS' : tab}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleDownloadCvTxt}
                className="pixel-btn bg-[#00A800] text-white text-[10px] px-4 py-2.5"
              >
                ⬇ DOWNLOAD CV (.TXT)
              </button>
              <button
                type="button"
                onClick={handlePrintCv}
                className="pixel-btn bg-[#FFFDF5] text-[#181425] text-[10px] px-4 py-2.5"
              >
                🖨 PRINT / SAVE PDF
              </button>
            </div>
          </div>

          {/* CV Sheet Container */}
          <div className="pixel-card p-6 sm:p-10">
            {/* CV Header Summary */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b-4 border-[#181425]">
              <div>
                <h3 className="font-pixel text-lg sm:text-xl text-[#181425]">
                  {HERO_PROFILE.name}
                </h3>
                <p className="text-2xl text-[#2038EC] font-bold">
                  {HERO_PROFILE.classTitle} • {HERO_PROFILE.location}
                </p>
              </div>
              <div className="text-xl text-[#2A2438] md:text-right">
                <div>{HERO_PROFILE.email}</div>
                <div>{HERO_PROFILE.website}</div>
              </div>
            </div>

            {/* Timeline Entries */}
            <div className="space-y-8 relative before:hidden sm:before:block before:absolute before:left-4 before:top-3 before:bottom-3 before:w-1.5 before:bg-[#181425]">
              {filteredCv.map((entry, idx) => (
                <div key={idx} className="sm:pl-12 relative">
                  {/* Timeline Pixel Node */}
                  <div
                    className={`hidden sm:flex w-9 h-9 border-4 border-[#181425] items-center justify-center absolute left-0 top-1 font-pixel text-[10px] ${
                      entry.type === 'WORK'
                        ? 'bg-[#FCD856] text-[#181425]'
                        : 'bg-[#00A800] text-white'
                    }`}
                  >
                    {entry.type === 'WORK' ? '⚔' : '★'}
                  </div>

                  <div className="bg-[#F8F3E6] border-4 border-[#181425] p-5 shadow-[4px_4px_0_#181425]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-pixel text-[10px] bg-[#181425] text-[#FCD856] px-2.5 py-1">
                        {entry.period}
                      </span>
                      <span className="font-pixel text-[9px] px-2.5 py-1 border-2 border-[#181425] bg-white text-[#181425]">
                        {entry.type}
                      </span>
                    </div>

                    <h4 className="font-pixel text-sm sm:text-base text-[#181425] mt-2">
                      {entry.role}
                    </h4>
                    <div className="text-2xl text-[#2038EC] mb-3">
                      {entry.guild} — <span className="text-[#5A5368]">{entry.location}</span>
                    </div>

                    <ul className="space-y-2 text-2xl text-[#181425]">
                      {entry.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#C84C0C] font-bold shrink-0">▸</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications & Badges */}
            <div className="mt-10 pt-6 border-t-4 border-[#181425]">
              <h4 className="font-pixel text-xs sm:text-sm text-[#181425] mb-4">
                UNLOCKED BADGES & CERTIFICATIONS
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert}
                    className="bg-[#FFF4CC] border-4 border-[#181425] p-4 flex items-center gap-3"
                  >
                    <PixelCoin className="w-6 h-7 shrink-0" />
                    <span className="text-xl font-bold text-[#181425] leading-tight">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 6. CONTACT / SEND OWL / SAVE POINT ==================== */}
        <section id="contact" className="scroll-mt-24 no-print">
          <SectionBanner
            world="WORLD 2-2"
            title="CONTACT & PARTY INVITE"
            subtitle="Ready to Build a New Product or Hire Player One? Send a Transmission!"
            icon={<PixelHeart filled className="w-7 h-7" />}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            {/* Left NPC Dialog & Direct Channels */}
            <div className="lg:col-span-5 pixel-card-brick p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-[#181425] text-[#FCD856] font-pixel text-[10px] px-3 py-1 mb-4">
                  SAVE POINT REACHED!
                </div>
                <h3 className="font-pixel text-base sm:text-lg text-white mb-4">
                  LET&apos;S TEAM UP FOR YOUR NEXT QUEST
                </h3>
                <p className="text-2xl text-[#FFF3E6] leading-relaxed mb-6">
                  Whether you need a full-stack engineer for your team, a technical co-builder for an MVP, or custom web architecture—drop a message in the dialog box!
                </p>

                {/* Direct Copy Email Card */}
                <div className="bg-[#181425] border-4 border-white p-4 mb-5">
                  <div className="font-pixel text-[9px] text-[#FCD856] mb-1">
                    DIRECT MAILBOX
                  </div>
                  <div className="text-2xl text-white break-all mb-3">
                    {HERO_PROFILE.email}
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="pixel-btn bg-[#FCD856] text-[#181425] text-[10px] px-3.5 py-2 w-full"
                  >
                    {copiedEmail ? '✓ COPIED TO CLIPBOARD!' : 'COPY EMAIL ADDRESS'}
                  </button>
                </div>
              </div>

              {/* Social Warp Pipes */}
              <div>
                <div className="font-pixel text-[10px] text-[#FCD856] mb-3">
                  SOCIAL WARP ZONES
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={HERO_PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playBlipSfx(sfxOn)}
                    className="pixel-btn bg-[#FFFDF5] text-[#181425] text-[10px] py-3 text-center"
                  >
                    GITHUB ↗
                  </a>
                  <a
                    href={HERO_PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playBlipSfx(sfxOn)}
                    className="pixel-btn bg-[#FFFDF5] text-[#181425] text-[10px] py-3 text-center"
                  >
                    LINKEDIN ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Right 8-Bit Message Form */}
            <div className="lg:col-span-7 pixel-card p-6 sm:p-8">
              {submitted ? (
                <div className="py-10 text-center space-y-5">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00A800] border-4 border-[#181425]">
                    <PixelCoin className="w-8 h-10 animate-coin" />
                  </div>
                  <h3 className="font-pixel text-base sm:text-lg text-[#008000]">
                    QUEST TRANSMISSION SENT! (+10 COINS)
                  </h3>
                  <p className="text-2xl text-[#181425] max-w-md mx-auto">
                    Thank you, <span className="font-bold">{senderName || 'Traveler'}</span>! Your message scroll has been delivered. Expect a reply within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      playBlipSfx(sfxOn);
                      setSubmitted(false);
                      setSenderName('');
                      setSenderEmail('');
                      setMessage('');
                    }}
                    className="pixel-btn bg-[#2038EC] text-white text-xs px-5 py-3"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="border-b-4 border-[#181425] pb-3 mb-2 flex items-center justify-between">
                    <span className="font-pixel text-xs sm:text-sm text-[#181425]">
                      COMPOSE MESSAGE SCROLL
                    </span>
                    <span className="font-pixel text-[9px] text-[#008000]">
                      REWARD: +10 COINS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="sender-name"
                        className="block font-pixel text-[10px] text-[#181425] mb-2"
                      >
                        YOUR NAME *
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Princess Peach"
                        className="pixel-input w-full px-3.5 py-2.5"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="sender-email"
                        className="block font-pixel text-[10px] text-[#181425] mb-2"
                      >
                        YOUR EMAIL *
                      </label>
                      <input
                        id="sender-email"
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="player2@kingdom.com"
                        className="pixel-input w-full px-3.5 py-2.5"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="quest-type"
                      className="block font-pixel text-[10px] text-[#181425] mb-2"
                    >
                      SELECT QUEST TYPE
                    </label>
                    <select
                      id="quest-type"
                      value={questType}
                      onChange={(e) => setQuestType(e.target.value)}
                      className="pixel-input w-full px-3.5 py-2.5"
                    >
                      <option>Full-Time Party Invite</option>
                      <option>Freelance / Contract Build</option>
                      <option>Technical Architecture Consulting</option>
                      <option>Open Source / Co-Op Jam</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quest-message"
                      className="block font-pixel text-[10px] text-[#181425] mb-2"
                    >
                      QUEST BRIEFING *
                    </label>
                    <textarea
                      id="quest-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project timeline, tech stack, or boss battle..."
                      className="pixel-input w-full px-3.5 py-2.5"
                    />
                  </div>

                  <button
                    type="submit"
                    className="pixel-btn bg-[#00A800] text-white text-xs px-6 py-4 w-full sm:w-auto"
                  >
                    ▶ TRANSMIT MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* OVERWORLD GROUND FOOTER */}
      <footer className="relative z-10 no-print">
        {/* Decorative Pipes sitting on the grass */}
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-end pointer-events-none">
          <PixelPipe className="w-14 h-16" />
          <PixelPipe className="w-16 h-20 hidden sm:block" />
        </div>

        {/* Grass Top Edge */}
        <div className="h-6 overworld-grass" />

        {/* Brick/Dirt Underground Footer */}
        <div className="overworld-dirt py-10 px-4 text-white border-b-8 border-[#181425]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#181425] border-4 border-white p-6">
            <div>
              <div className="font-pixel text-xs text-[#FCD856] mb-1">
                {HERO_PROFILE.name} • 8-BIT PORTFOLIO TEMPLATE
              </div>
              <p className="text-xl text-[#D6CFE2]">
                Edit all profile text, skills, quests, and CV timeline easily inside{' '}
                <code className="bg-[#2B2440] text-[#FCD856] px-1.5 py-0.5">
                  src/data/portfolioData.ts
                </code>
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="pixel-btn bg-[#FCD856] text-[#181425] text-[10px] px-4 py-3 shrink-0"
            >
              ▲ WARP TO TOP
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionBanner({
  world,
  title,
  subtitle,
  icon,
}: {
  world: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="pixel-card-gold p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-start sm:items-center gap-4">
        <div className="w-12 h-12 bg-[#FFFDF5] border-4 border-[#181425] flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <span className="font-pixel text-[10px] bg-[#181425] text-[#FCD856] px-2.5 py-1 inline-block mb-1.5">
            {world}
          </span>
          <h2 className="font-pixel text-base sm:text-xl text-[#181425]">{title}</h2>
          <p className="text-xl sm:text-2xl text-[#3A2E14]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
