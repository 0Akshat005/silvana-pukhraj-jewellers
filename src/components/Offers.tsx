'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { offers } from '@/config/content';
import { siteConfig } from '@/config/site';

export default function Offers() {
  return (
    <section className="relative py-24 sm:py-32 bg-midnight overflow-hidden">
      {/* Animated Background Shimmer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large radial glow that pulses */}
        <motion.div
          animate={{
            opacity: [0.04, 0.1, 0.04],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.12)_0%,_transparent_60%)]"
        />
        {/* Sweeping shimmer line */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 3,
          }}
          className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-gold/[0.04] to-transparent skew-x-[-20deg]"
        />
        {/* Diagonal shimmer */}
        <motion.div
          animate={{ x: ['200%', '-100%'] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 2,
          }}
          className="absolute bottom-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-gold/[0.03] to-transparent skew-x-[15deg]"
        />
      </div>

      {/* Top and bottom gold border lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="flex items-center justify-center gap-2.5 text-gold text-[9px] sm:text-[10px] tracking-[0.45em] uppercase mb-5 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Exclusive Privileges
            <Sparkles className="w-3.5 h-3.5" />
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extralight text-cream leading-tight tracking-wide">
            Curated{' '}
            <span className="text-gold italic font-light">Offers</span>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Offer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-14 sm:mb-16">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group relative"
            >
              {/* Animated Gold Gradient Border */}
              <div className="absolute -inset-[1px] rounded-xl overflow-hidden">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0%,#C9A96E_10%,transparent_20%,transparent_50%,#C9A96E_60%,transparent_70%)]"
                />
                {/* Inner mask to create border effect */}
                <div className="absolute inset-[1px] rounded-xl bg-midnight/95" />
              </div>

              {/* Card Content - Glassmorphic */}
              <div className="relative rounded-xl bg-white/[0.03] backdrop-blur-xl border border-gold/[0.08] p-7 sm:p-8 transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-gold/20">
                {/* Gold glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.06)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Badge & Limited Time Indicator */}
                  <div className="flex items-center justify-between mb-5">
                    {offer.badge && (
                      <span className="inline-flex items-center gap-1.5 text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-semibold border border-gold/25 bg-gold/[0.08] backdrop-blur-sm text-gold px-3.5 py-1.5 rounded-full">
                        {offer.badge}
                      </span>
                    )}
                    {/* Pulsing Limited Time Indicator */}
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold/60 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gold shadow-[0_0_6px_rgba(201,169,110,0.6)]" />
                      </span>
                      <span className="text-gold/70 text-[8px] tracking-[0.15em] uppercase font-medium">
                        Limited Time
                      </span>
                    </div>
                  </div>

                  {/* Offer Title */}
                  <h3 className="font-display text-2xl sm:text-3xl font-light text-cream mb-3 group-hover:text-gold transition-colors duration-500 tracking-wide">
                    {offer.title}
                  </h3>

                  {/* Description */}
                  <p className="text-pearl/40 text-sm sm:text-[15px] tracking-wide font-light leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Decorative bottom line */}
                  <div className="mt-6 w-12 h-[1px] bg-gradient-to-r from-gold/40 to-transparent group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi, I want to claim the exclusive website offers.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-4.5 bg-gold/10 border border-gold/40 text-gold text-xs font-semibold tracking-[0.25em] uppercase hover:bg-gold hover:text-midnight hover:border-gold transition-all duration-500 overflow-hidden"
          >
            {/* Gold shimmer sweep on hover */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            {/* Subtle resting glow */}
            <motion.span
              animate={{ opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gold/20 pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
            />

            <Sparkles className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Claim Privilege</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
