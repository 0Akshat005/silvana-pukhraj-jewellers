'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faq } from '@/config/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-pearl overflow-hidden">
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(201,169,110,0.04)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(201,169,110,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-gold text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-5 font-semibold">
            Your Queries, Answered
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.1]">
            Frequently Asked
            <br />
            <span className="text-gold italic font-light">Questions</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-gold/40" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            const number = String(i + 1).padStart(2, '0');

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="relative"
              >
                {/* Gold left border glow for active item */}
                <motion.div
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    scaleY: isOpen ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gold origin-center z-10"
                  style={{
                    boxShadow: isOpen
                      ? '0 0 12px rgba(201,169,110,0.4), 0 0 24px rgba(201,169,110,0.15)'
                      : 'none',
                  }}
                />

                <div
                  className={`relative overflow-hidden rounded-lg transition-all duration-500 ${
                    isOpen
                      ? 'bg-white shadow-[0_4px_24px_rgba(201,169,110,0.08)] border border-gold/15 pl-5'
                      : 'bg-white/60 border border-charcoal/[0.06] hover:border-gold/15 hover:bg-white/80 pl-5'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center gap-4 sm:gap-6 p-5 sm:p-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    {/* Number */}
                    <span
                      className={`font-display text-2xl sm:text-3xl font-light tracking-wide flex-shrink-0 transition-colors duration-500 ${
                        isOpen ? 'text-gold' : 'text-gold/25'
                      }`}
                    >
                      {number}
                    </span>

                    {/* Question Text */}
                    <span
                      className={`font-display text-base sm:text-lg font-semibold transition-colors duration-300 flex-1 ${
                        isOpen ? 'text-charcoal' : 'text-charcoal/75'
                      }`}
                    >
                      {item.question}
                    </span>

                    {/* Animated Plus/Minus Icon */}
                    <span className="flex-shrink-0 w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center bg-gold/[0.04] transition-colors duration-300 hover:bg-gold/[0.08]">
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-center justify-center"
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-gold" />
                        ) : (
                          <Plus className="w-4 h-4 text-gold" />
                        )}
                      </motion.span>
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: { duration: 0.3, delay: 0.1 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 sm:pb-7 pt-0">
                          {/* Decorative separator */}
                          <div className="flex items-center gap-3 mb-4 ml-10 sm:ml-14">
                            <div className="w-8 h-[1px] bg-gold/20" />
                            <div className="w-1 h-1 rounded-full bg-gold/30" />
                          </div>
                          <motion.p
                            initial={{ y: 8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.4 }}
                            className="text-charcoal/60 text-sm sm:text-[15px] leading-relaxed ml-10 sm:ml-14"
                          >
                            {item.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
