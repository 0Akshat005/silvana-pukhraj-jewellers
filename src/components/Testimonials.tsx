'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Gem } from 'lucide-react';
import { testimonials } from '@/config/content';

/* ──────────────────────────────────────────────
   Shared animation config
   ────────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 60 : -60,
    scale: 0.97,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -60 : 60,
    scale: 0.97,
    transition: { duration: 0.4, ease },
  }),
};

/* ──────────────────────────────────────────────
   TESTIMONIALS SECTION
   ────────────────────────────────────────────── */
export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  /* Auto-advance every 4.5 seconds */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-midnight overflow-hidden">
      {/* ── Ambient Background Layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left glow */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px]" />
        {/* Bottom-right glow */}
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-[100px]" />
      </div>

      {/* ── Active Testimonial Golden Sparkle Glow ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`glow-${current}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] rounded-full bg-gold/[0.04] blur-[80px]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-gold text-[10px] sm:text-xs tracking-[0.45em] uppercase mb-5 font-semibold">
            Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extralight text-cream leading-[1.1] mb-6 tracking-wide">
            Words of{' '}
            <span className="text-gold italic font-light">Trust</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto" />
        </motion.div>

        {/* ── Testimonial Carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="relative"
        >
          {/* ── Large Decorative Gold Quotation Marks ── */}
          <div
            className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 font-display text-[140px] sm:text-[200px] lg:text-[240px] text-gold/[0.07] leading-none select-none pointer-events-none z-0"
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <div
            className="absolute bottom-0 sm:bottom-4 left-1/2 -translate-x-1/2 font-display text-[140px] sm:text-[200px] lg:text-[240px] text-gold/[0.05] leading-none select-none pointer-events-none z-0 rotate-180"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* ── Carousel Container ── */}
          <div 
            className="relative min-h-[280px] sm:min-h-[260px] flex items-center justify-center z-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center px-4 sm:px-16 lg:px-20 max-w-3xl mx-auto">
                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1.5 mb-8">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 + i * 0.08, duration: 0.35, ease }}
                      >
                        <Star className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-gold fill-gold" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[2rem] text-cream/90 leading-relaxed sm:leading-[1.7] mb-10 italic font-light">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>

                  {/* Author */}
                  <div>
                    <div className="w-10 h-[1px] bg-gold/40 mx-auto mb-4" />
                    <p className="text-gold/70 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
                      {testimonials[current].author}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Navigation Controls ── */}
          <div className="flex items-center justify-center gap-8 mt-14 sm:mt-16 relative z-10">
            {/* Prev Button */}
            <button
              onClick={prev}
              className="group w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gold/25 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/60 hover:bg-gold/[0.06] transition-all duration-400 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative py-2 group"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <motion.div
                    className="h-[3px] rounded-full"
                    animate={{
                      width: i === current ? 28 : 8,
                      backgroundColor: i === current ? '#C9A96E' : 'rgba(201, 169, 110, 0.2)',
                    }}
                    transition={{ duration: 0.4, ease }}
                  />
                  {/* Hover glow on active dot */}
                  {i === current && (
                    <motion.div
                      layoutId="dotGlow"
                      className="absolute -inset-1 rounded-full bg-gold/10 blur-sm"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={next}
              className="group w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gold/25 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/60 hover:bg-gold/[0.06] transition-all duration-400 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>

        {/* ── Bottom Ornamental Line ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease }}
          className="mt-20 sm:mt-24 flex items-center justify-center gap-4 origin-center"
        >
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-gold/15" />
          <Gem className="w-4 h-4 text-gold/20" strokeWidth={1} />
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-gold/15" />
        </motion.div>
      </div>
    </section>
  );
}
