'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const galleryItems = [
  { src: '/photos/post-0-display.jpg', likes: '1.2K' },
  { src: '/photos/post-2-display.jpg', likes: '890' },
  { src: '/photos/post-5-display.jpg', likes: '2.1K' },
  { src: '/photos/post-7-display.jpg', likes: '1.5K' },
  { src: '/photos/post-8-display.jpg', likes: '760' },
  { src: '/photos/post-11-display.jpg', likes: '1.8K' },
  { src: '/photos/post-15-display.jpg', likes: '3.2K' },
  { src: '/photos/post-18-display.jpg', likes: '950' },
  { src: '/photos/post-21-display.jpg', likes: '1.1K' },
  { src: '/photos/post-25-display.jpg', likes: '2.4K' },
  { src: '/photos/post-27-display.jpg', likes: '1.7K' },
  { src: '/photos/post-29-display.jpg', likes: '680' },
];

const topRowItems = galleryItems.slice(0, 6);
const bottomRowItems = galleryItems.slice(6, 12);

function PhotoCard({
  item,
  index,
}: {
  item: (typeof galleryItems)[number];
  index: number;
}) {
  return (
    <a
      href={siteConfig.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] aspect-square overflow-hidden rounded-xl border border-white/[0.06] cursor-pointer transition-transform duration-500 ease-out hover:rotate-[-1deg] hover:scale-[1.03]"
    >
      <Image
        src={item.src}
        alt={`Pukhraj Jewellers Instagram post ${index + 1}`}
        fill
        className="object-cover transition-transform duration-700 ease-[0.25,0.46,0.45,0.94] group-hover:scale-110"
        sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 340px"
      />

      {/* Glassmorphic overlay on hover */}
      <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/40 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500 ease-out">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg">
            <Heart className="w-5 h-5 text-gold fill-gold" />
          </div>
          <span className="text-cream text-sm font-semibold tracking-wide">
            {item.likes}
          </span>
        </div>
      </div>

      {/* Subtle shine effect on top edge */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </a>
  );
}

function InfiniteCarouselRow({
  items,
  direction,
  speed = 35,
}: {
  items: typeof galleryItems;
  direction: 'left' | 'right';
  speed?: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    let position = direction === 'left' ? 0 : -el.scrollWidth / 2;

    const animate = () => {
      if (!isHovered) {
        const delta = direction === 'left' ? -0.5 : 0.5;
        position += delta * (speed / 35);

        if (direction === 'left') {
          if (Math.abs(position) >= el.scrollWidth / 2) {
            position = 0;
          }
        } else {
          if (position >= 0) {
            position = -el.scrollWidth / 2;
          }
        }

        el.style.transform = `translateX(${position}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [direction, speed, isHovered]);

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={scrollRef} className="flex gap-4 will-change-transform">
        {duplicatedItems.map((item, i) => (
          <PhotoCard key={`${item.src}-${i}`} item={item} index={i % items.length} />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-midnight overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2.5 mb-6">
            <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-xs sm:text-sm tracking-[0.15em] font-semibold hover:text-gold-soft transition-colors duration-300"
            >
              {siteConfig.instagramHandle}
            </a>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-6 tracking-wide">
            From Our Workshop
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
          </div>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cream/50 hover:text-gold text-sm transition-colors duration-300"
          >
            Follow us for daily drops
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      {/* Full-width carousel area (breaks out of container) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="space-y-4 sm:space-y-5"
      >
        {/* Top row: scrolls left */}
        <InfiniteCarouselRow items={topRowItems} direction="left" speed={30} />

        {/* Bottom row: scrolls right */}
        <InfiniteCarouselRow items={bottomRowItems} direction="right" speed={30} />
      </motion.div>

      {/* Gradient fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-midnight to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-midnight to-transparent pointer-events-none z-10" />

      {/* CTA Button */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14 sm:mt-20"
        >
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 border border-gold/30 text-cream text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase rounded-full overflow-hidden hover:border-gold/60 transition-all duration-500"
          >
            {/* Hover background fill */}
            <span className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
            <span className="relative flex items-center gap-3">
              <InstagramIcon className="w-4 h-4 text-gold" />
              View More on Instagram
              <ExternalLink className="w-3.5 h-3.5 text-gold/70 group-hover:text-gold transition-colors duration-300" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
