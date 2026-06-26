'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants, useScroll, useInView } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trustSignals } from '@/config/content';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.6 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] } 
  },
};

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);

  // Parallax scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.8]);

  const isHeroInView = useInView(sectionRef, { amount: 0.15 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isHeroInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHeroInView]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (typeof window !== 'undefined') {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    }
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[800px] overflow-hidden bg-midnight"
      onMouseMove={handleMouseMove}
    >
      {/* 3D Cinematic Video Background with Parallax */}
      <div className="absolute inset-0 perspective-[1200px] z-0">
        <motion.div
          style={isMounted ? { 
            rotateX, 
            rotateY, 
            transformStyle: 'preserve-3d',
            scale: videoScale,
          } : {}}
          className="absolute inset-[-12%] w-[124%] h-[124%]"
        >
          <video
            ref={videoRef}
            src="/videos/hero-diamond.mp4"
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Cinematic Overlay Stack */}
      <motion.div 
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-midnight z-[1]" 
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A0E1A_85%)] opacity-95 z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 via-midnight/20 to-midnight z-[3]" />
      
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(201,169,110,0.06)_0%,_transparent_70%)] z-[4] pointer-events-none" />

      {/* Main Content */}
      <motion.div 
        style={{ y: contentY }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-16"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Delicate Top Label with animated lines */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-5 mb-10">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
              className="h-[1px] bg-gradient-to-r from-transparent to-gold/50" 
            />
            <p className="text-gold text-[9px] sm:text-[10px] tracking-[0.6em] uppercase font-semibold">
              {siteConfig.brandName}
            </p>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
              className="h-[1px] bg-gradient-to-l from-transparent to-gold/50" 
            />
          </motion.div>

          {/* Ultra-Premium Headline with shimmer */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-extralight text-cream leading-[1.05] tracking-wide mb-8 pb-4 gold-text-shadow"
          >
            Timeless Purity.
            <br />
            <span className="gold-shimmer-text italic font-light tracking-normal inline-block mt-2 pr-6 pb-6">
              Generations of Trust.
            </span>
          </motion.h1>

          {/* Elegant Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-pearl/60 text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase max-w-3xl mx-auto mb-16 font-light leading-relaxed"
          >
            Diamonds &bull; Gold &bull; Silver
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> &mdash; </span>
            Adorning Your Most Beautiful Moments
          </motion.p>

          {/* Cinematic CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6"
          >
            <a
              href="#collections"
              className="group relative px-14 py-5 bg-gold text-midnight text-[11px] font-bold tracking-[0.3em] uppercase overflow-hidden hover:bg-gold-soft transition-all duration-500 shadow-[0_0_50px_rgba(201,169,110,0.15)] btn-shimmer-hover"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="group px-14 py-5 border border-cream/15 bg-cream/[0.03] backdrop-blur-sm text-cream text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-cream/10 hover:border-gold/40 transition-all duration-500"
            >
              Book Appointment
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Animated Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-pearl/25 text-[7px] tracking-[0.5em] uppercase font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold/40 to-transparent"
        />
      </motion.div>

      {/* Trust Marquee at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-midnight/80 backdrop-blur-3xl border-t border-gold/20 overflow-hidden flex items-center z-20 shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
        <div className="flex whitespace-nowrap items-center animate-scroll-left">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-gold/90 text-[10px] tracking-[0.3em] uppercase font-bold px-12 drop-shadow-[0_0_8px_rgba(201,169,110,0.3)]">
                    {signal}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(201,169,110,0.8)]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
