'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { collections } from '@/config/content';
import { siteConfig } from '@/config/site';

export default function Collections() {
  const featuredCollections = collections.slice(0, 2);
  const gridCollections = collections.slice(2, 8);

  return (
    <section id="collections" className="relative py-24 sm:py-32 bg-midnight overflow-hidden">
      {/* Radial gold glow behind header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-gold/[0.07] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-gold/80 text-[10px] sm:text-xs tracking-[0.5em] uppercase mb-6 font-semibold">
            Curated for You
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-8 tracking-wide">
            Our{' '}
            <span className="relative inline-block">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #C9A96E 0%, #F0DCA8 25%, #C9A96E 50%, #F0DCA8 75%, #C9A96E 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'goldShimmer 4s ease-in-out infinite',
                }}
              >
                Collections
              </span>
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </motion.div>

        {/* Featured Row: 2 large items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
          {featuredCollections.map((collection, i) => (
            <motion.a
              key={collection.id}
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi, I am interested in your ${collection.name} collection.`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative block overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/11] overflow-hidden bg-midnight">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-[0.25,0.46,0.45,0.94] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i < 2}
                />

                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-700" />

                {/* Badge */}
                {collection.badge && (
                  <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-cream/90 text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
                      {collection.badge}
                    </div>
                  </div>
                )}

                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-10">
                  <div className="transform transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:-translate-y-2">
                    <h3
                      className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-cream tracking-wide"
                      style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                    >
                      {collection.name}
                    </h3>
                    <p className="text-gold/80 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mt-2">
                      {collection.priceRange}
                    </p>
                  </div>
                  {/* View Collection text that fades in */}
                  <div className="overflow-hidden">
                    <p className="text-cream/60 text-xs sm:text-sm tracking-[0.15em] uppercase mt-3 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.22,1,0.36,1] delay-100">
                      View Collection &rarr;
                    </p>
                  </div>
                </div>

                {/* Golden border-bottom glow on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Grid: 3x2 for remaining items */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {gridCollections.map((collection, i) => (
            <motion.a
              key={collection.id}
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi, I am interested in your ${collection.name} collection.`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative block overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-midnight">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-[0.25,0.46,0.45,0.94] group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                {/* Badge */}
                {collection.badge && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-cream/90 text-[8px] sm:text-[9px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg">
                      {collection.badge}
                    </div>
                  </div>
                )}

                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                  <div className="transform transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:-translate-y-1.5">
                    <h3
                      className="font-display text-lg sm:text-xl md:text-2xl font-light text-cream tracking-wide"
                      style={{ textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}
                    >
                      {collection.name}
                    </h3>
                    <p className="text-gold/70 text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] uppercase mt-1.5">
                      {collection.priceRange}
                    </p>
                  </div>
                  {/* View Collection text that fades in */}
                  <div className="overflow-hidden">
                    <p className="text-cream/50 text-[10px] sm:text-xs tracking-[0.12em] uppercase mt-2 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.22,1,0.36,1] delay-75">
                      View Collection &rarr;
                    </p>
                  </div>
                </div>

                {/* Golden border-bottom glow on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
