'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, ExternalLink, Volume2, VolumeX, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function FeaturedVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const isVideoInView = useInView(sectionRef, { margin: '-50px' });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoInView]);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-midnight overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[radial-gradient(ellipse_at_right,_rgba(201,169,110,0.05)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-gold/40" />
              <p className="text-gold text-[10px] sm:text-xs tracking-[0.5em] uppercase font-semibold">
                Most Popular
              </p>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-cream leading-[1.05] mb-6 tracking-wide gold-text-shadow">
              The Sterling
              <br />
              <span className="text-gold italic font-light">Silver Watch</span>
            </h2>

            <div className="w-12 h-[1px] bg-gold/30 mb-8" />

            <p className="text-pearl/60 text-sm sm:text-base leading-[1.8] mb-12 max-w-lg font-light">
              Crafted entirely in pure 92.5 sterling silver, this timepiece is not just a watch, 
              it is a statement of exclusivity. Hand finished, limited pieces. 
              The most talked about piece in our collection.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <div className="flex items-center gap-3 px-6 py-3.5 glass-card rounded-xl">
                <Eye className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span className="text-cream font-semibold tracking-wide text-sm sm:text-base">411,000+</span>
                <span className="text-pearl/35 text-[10px] tracking-[0.15em] uppercase">Views</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3.5 glass-card rounded-xl">
                <Heart className="w-4 h-4 text-gold fill-gold/20" strokeWidth={1.5} />
                <span className="text-cream font-semibold tracking-wide text-sm sm:text-base">6,300+</span>
                <span className="text-pearl/35 text-[10px] tracking-[0.15em] uppercase">Likes</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi, I am interested in the Sterling Silver Watch.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gold text-midnight text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-gold-soft transition-all duration-300 btn-shimmer-hover overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Enquire About This Piece
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </a>
          </motion.div>

          {/* Video Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Decorative Frame */}
            <div className="absolute -inset-3 border border-gold/[0.06] hidden sm:block" />
            <div className="absolute -inset-6 border border-gold/[0.04] hidden sm:block" />
            
            {/* Corner accents */}
            <div className="hidden sm:block absolute -top-6 -left-6 w-6 h-6 border-t border-l border-gold/20" />
            <div className="hidden sm:block absolute -top-6 -right-6 w-6 h-6 border-t border-r border-gold/20" />
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-6 h-6 border-b border-l border-gold/20" />
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-6 h-6 border-b border-r border-gold/20" />

            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden bg-midnight group">
              <video
                ref={videoRef}
                src="/videos/hero-background.mp4"
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />

              {/* Volume Toggle */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-10 h-10 glass-card flex items-center justify-center text-pearl/70 hover:text-gold transition-all duration-300 cursor-pointer z-10"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* Subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
