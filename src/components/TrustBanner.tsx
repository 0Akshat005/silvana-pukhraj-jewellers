'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, BadgeCheck } from 'lucide-react';

const trustItems = [
  { icon: Shield, label: '22KT Hallmarked', highlight: 'Gold' },
  { icon: Award, label: '92.5 Sterling', highlight: 'Silver' },
  { icon: Users, label: '47,500+', highlight: 'Followers' },
  { icon: BadgeCheck, label: 'Verified', highlight: 'Business' },
];

export default function TrustBanner() {
  return (
    <section className="relative bg-midnight-deep py-8 sm:py-10 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      
      {/* Subtle center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10"
        >
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex items-center justify-center gap-4 group"
            >
              <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center border border-gold/15 rounded-full group-hover:border-gold/40 group-hover:shadow-[0_0_20px_rgba(201,169,110,0.1)] transition-all duration-500">
                <item.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-gold/80 group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-gold font-semibold text-sm sm:text-[15px] tracking-wide">
                  {item.label}
                </span>
                <span className="text-pearl/40 text-[10px] tracking-[0.15em] uppercase">
                  {item.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
