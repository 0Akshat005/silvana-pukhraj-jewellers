'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

const navLinks = [
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-midnight/95 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-gradient-to-b from-midnight/60 to-transparent'
        }`}
      >
        {/* Thin gold line at top when scrolled */}
        <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex flex-col items-start group">
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-[0.25em] text-gold transition-all duration-300 group-hover:text-gold-soft gold-text-shadow">
                SILVANA
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.2em] text-gold-soft/50 uppercase -mt-0.5 transition-colors duration-300 group-hover:text-gold-soft/70">
                by {siteConfig.brandName}
              </span>
            </a>

            {/* Center Nav Links - Desktop */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-[13px] tracking-[0.15em] uppercase text-pearl/70 hover:text-gold transition-colors duration-400 group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* Phone Icon */}
              <a
                href={`tel:+91${siteConfig.phone}`}
                className="hidden sm:flex items-center gap-2.5 text-pearl/60 hover:text-gold transition-colors duration-300"
                aria-label="Call us"
              >
                <div className="w-9 h-9 rounded-full border border-pearl/15 flex items-center justify-center hover:border-gold/40 transition-all duration-300">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-[13px] tracking-wide hidden xl:inline">{siteConfig.phone}</span>
              </a>

              {/* Enquire Now CTA */}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-midnight text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gold-soft transition-all duration-300 btn-shimmer-hover relative overflow-hidden"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Enquire Now
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-pearl/80 hover:text-gold transition-colors duration-300"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-midnight/[0.98] backdrop-blur-3xl flex flex-col"
          >
            {/* Decorative top gold line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            {/* Close Button */}
            <div className="flex justify-between items-center px-6 py-5">
              <span className="font-display text-2xl font-bold tracking-[0.25em] text-gold gold-text-shadow">
                SILVANA
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2.5 text-pearl/80 hover:text-gold transition-colors duration-300 border border-pearl/10 hover:border-gold/30"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-3xl sm:text-4xl font-light tracking-[0.15em] text-pearl/80 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex flex-col items-center gap-5 mt-10"
              >
                <a
                  href={`tel:+91${siteConfig.phone}`}
                  className="flex items-center gap-3 text-gold hover:text-gold-soft transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-lg tracking-wide font-light">{siteConfig.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-gold text-midnight text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gold-soft transition-all duration-300"
                >
                  Enquire Now
                </a>
              </motion.div>
            </div>

            {/* Bottom tagline */}
            <div className="pb-8 text-center">
              <p className="text-pearl/20 text-[10px] tracking-[0.3em] uppercase font-light">
                {siteConfig.tagline}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
