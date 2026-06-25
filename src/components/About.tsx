'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { BadgeCheck, Shield, Users, Gem } from 'lucide-react';

/* ──────────────────────────────────────────────
   Animated Counter Hook
   ────────────────────────────────────────────── */
function useCountUp(end: number, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, startCounting]);

  return count;
}

/* ──────────────────────────────────────────────
   Single Stat Card with count-up
   ────────────────────────────────────────────── */
function StatItem({
  icon: Icon,
  numericValue,
  suffix,
  label,
  index,
}: {
  icon: React.ElementType;
  numericValue: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const count = useCountUp(numericValue, 2200, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 + index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center mb-4 group-hover:border-gold/50 group-hover:bg-gold/[0.05] transition-all duration-500">
        <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
      </div>
      <p className="font-display text-3xl sm:text-4xl font-light text-cream mb-1 tabular-nums tracking-wide">
        {isInView ? (
          <>
            {numericValue > 0 ? count.toLocaleString('en-IN') : ''}
            {suffix}
          </>
        ) : (
          <>0{suffix}</>
        )}
      </p>
      <p className="text-pearl/40 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-semibold">
        {label}
      </p>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Stats Data
   ────────────────────────────────────────────── */
const stats = [
  { icon: Users, numericValue: 47500, suffix: '+', label: 'Followers' },
  { icon: BadgeCheck, numericValue: 0, suffix: 'Verified', label: 'Business' },
  { icon: Shield, numericValue: 0, suffix: 'BIS', label: 'Hallmarked' },
  { icon: Gem, numericValue: 0, suffix: 'Multiple', label: 'Generations' },
];

/* ──────────────────────────────────────────────
   Shared animation variants
   ────────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease } },
};

/* ──────────────────────────────────────────────
   ABOUT SECTION
   ────────────────────────────────────────────── */
export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-midnight">
      {/* ── Background Glow ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.05)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
          {/* ═══════════════════════════════════════════
              LEFT SIDE  ·  Dark with Artisan Image
             ═══════════════════════════════════════════ */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative flex items-center justify-center py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 z-10"
          >
            {/* Subtle radial glow behind the frame */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[420px] h-[520px] bg-gold/[0.04] rounded-full blur-[100px]" />
            </div>

            <div className="relative w-full max-w-[420px]">
              {/* ── Luxurious Double Golden Frame ── */}
              {/* Outer thin gold line */}
              <div className="absolute -inset-5 sm:-inset-6 border border-gold/30" />
              {/* Inner image container */}
              <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
                <Image
                  src="/photos/legacy-artisan.png"
                  alt="Master artisan crafting heritage jewelry at Pukhraj Jewellers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 420px"
                  priority
                />
                {/* Dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-midnight/20" />
              </div>

              {/* ── Corner Ornaments ── */}
              <div className="absolute -top-5 -left-5 sm:-top-6 sm:-left-6 w-4 h-4 border-t border-l border-gold" />
              <div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 w-4 h-4 border-t border-r border-gold" />
              <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 w-4 h-4 border-b border-l border-gold" />
              <div className="absolute -bottom-5 -right-5 sm:-bottom-6 sm:-right-6 w-4 h-4 border-b border-r border-gold" />

              {/* ── Floating "Since Generations" Badge ── */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-10 -right-6 sm:-bottom-14 sm:-right-10 z-10"
              >
                <div className="bg-midnight/95 backdrop-blur-lg border border-gold/25 px-8 py-6 sm:px-10 sm:py-8 shadow-[0_8px_40px_rgba(201,169,110,0.12)]">
                  <p className="font-display text-gold text-xl sm:text-2xl font-extralight leading-tight tracking-wide">
                    Since
                  </p>
                  <p className="font-display text-cream text-2xl sm:text-3xl font-light italic leading-tight tracking-wide">
                    Generations
                  </p>
                  <div className="mt-3 w-8 h-[1px] bg-gold/40" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════
              RIGHT SIDE  ·  Pearl with Story Content
             ═══════════════════════════════════════════ */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 z-10"
          >
            <div className="w-full max-w-[560px]">
              {/* ── Eyebrow ── */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                className="flex items-center gap-4 mb-7"
              >
                <div className="w-10 h-[1px] bg-gold/50" />
                <p className="text-gold text-[10px] sm:text-xs tracking-[0.45em] uppercase font-semibold">
                  Our Story
                </p>
              </motion.div>

              {/* ── Heading ── */}
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="font-display text-4xl sm:text-5xl md:text-[3.5rem] font-extralight text-cream leading-relaxed mb-10 tracking-wide pb-2"
              >
                The Pukhraj{' '}
                <span className="text-gold italic font-light gold-text-shadow pr-4 inline-block">Legacy</span>
              </motion.h2>

              {/* ── Story Paragraphs ── */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="space-y-6 text-pearl/70 text-sm sm:text-base leading-[1.8] mb-12 font-light"
              >
                <p>
                  For generations, Pukhraj Jewellers has been Nagpur&apos;s most trusted name
                  in gold, silver, and gemstone jewellery. What started as a family tradition
                  of craftsmanship has grown into a legacy built on purity, trust, and an
                  unwavering commitment to quality.
                </p>
                <p>
                  Every piece that leaves our store carries the promise of authenticity.
                  Our gold is BIS hallmarked, our silver is 92.5 certified, and our gemstones
                  are hand selected for brilliance and astrological value.
                </p>
                <p>
                  From lightweight gold chains starting at just 0.5 grams to exclusive
                  sterling silver watches, we believe luxury should be accessible without
                  compromise.
                </p>
              </motion.div>

              {/* ── Tagline Quote (Sanskrit) ── */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                className="relative p-8 mb-14 rounded-2xl glass-card border border-gold/[0.08] overflow-hidden group"
              >
                {/* Decorative background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <p 
                    className="text-3xl sm:text-4xl md:text-5xl text-gold mb-3 leading-snug drop-shadow-md"
                    style={{ fontFamily: "'Noto Serif Devanagari', 'Yatra One', 'Cormorant Garamond', serif", fontWeight: 400 }}
                  >
                    सत्यम्। शुद्धम्। सुन्दरम्।
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-[1px] bg-gold/30" />
                    <p className="text-pearl/50 text-[10px] tracking-[0.35em] uppercase font-semibold">
                      Truth. Purity. Beauty.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ── Stats Row ── */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
              >
                <div className="border-t border-gold/10 pt-10">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
                    {stats.map((stat, i) => (
                      <StatItem key={stat.label} {...stat} index={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
