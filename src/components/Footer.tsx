import { siteConfig } from '@/config/site';
import { Phone, MapPin, Heart, Clock, Diamond } from 'lucide-react';

const quickLinks = [
  { label: 'Collections', href: '#collections' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const collectionLinks = [
  { label: 'Gold Chains', href: '#collections' },
  { label: 'Sterling Silver', href: '#collections' },
  { label: 'Silver Watches', href: '#collections' },
  { label: 'Gemstones', href: '#collections' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050810] pt-0 pb-0 overflow-hidden">
      {/* Decorative golden gradient top border */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-64 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-14 mb-16 sm:mb-20">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <a href="#" className="inline-block mb-6 group">
              <span
                className="font-display text-4xl font-bold tracking-[0.25em] text-gold block transition-all duration-500"
                style={{
                  textShadow:
                    '0 0 20px rgba(201,169,110,0.25), 0 0 40px rgba(201,169,110,0.1)',
                }}
              >
                {siteConfig.subBrand}
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-gold/40 uppercase mt-1">
                by {siteConfig.brandName}
              </span>
            </a>
            <p className="text-pearl/35 text-sm leading-[1.8] mb-6 max-w-xs">
              {siteConfig.description}
            </p>
            <div className="pt-2">
              <p 
                className="text-2xl text-gold/80 mb-1.5 leading-snug"
                style={{ 
                  fontFamily: "'Noto Serif Devanagari', 'Yatra One', 'Cormorant Garamond', serif", 
                  fontWeight: 400,
                  textShadow: '0 0 12px rgba(201,169,110,0.15)'
                }}
              >
                सत्यम्। शुद्धम्। सुन्दरम्।
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-[1px] bg-gold/30" />
                <p className="text-pearl/30 text-[8px] tracking-[0.35em] uppercase font-semibold">
                  Truth. Purity. Beauty.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-pearl text-[10px] tracking-[0.3em] uppercase font-semibold mb-7 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-gold/30" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group relative inline-block text-pearl/40 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.label}
                    {/* Gold underline sliding from left on hover */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-400 ease-out" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="lg:col-span-3">
            <h4 className="text-pearl text-[10px] tracking-[0.3em] uppercase font-semibold mb-7 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-gold/30" />
              Collections
            </h4>
            <ul className="space-y-4">
              {collectionLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group relative inline-block text-pearl/40 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-400 ease-out" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-pearl text-[10px] tracking-[0.3em] uppercase font-semibold mb-7 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-gold/30" />
              Contact
            </h4>
            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full border border-gold/15 bg-gold/[0.04] flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.08] hover:scale-110 hover:shadow-[0_0_12px_rgba(201,169,110,0.15)]">
                  <Phone className="w-3.5 h-3.5 text-gold/70" />
                </div>
                <div>
                  <a
                    href={`tel:+91${siteConfig.phone}`}
                    className="text-pearl/60 hover:text-gold text-sm transition-colors duration-300 block"
                  >
                    +91 {siteConfig.phone}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pearl/30 hover:text-gold text-xs mt-0.5 transition-colors duration-300 block"
                  >
                    WhatsApp Available
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full border border-gold/15 bg-gold/[0.04] flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.08] hover:scale-110 hover:shadow-[0_0_12px_rgba(201,169,110,0.15)]">
                  <MapPin className="w-3.5 h-3.5 text-gold/70" />
                </div>
                <p className="text-pearl/40 text-sm leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>

              {/* Store Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full border border-gold/15 bg-gold/[0.04] flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.08] hover:scale-110 hover:shadow-[0_0_12px_rgba(201,169,110,0.15)]">
                  <Clock className="w-3.5 h-3.5 text-gold/70" />
                </div>
                <div className="text-sm space-y-1">
                  <p className="text-pearl/40">
                    <span className="text-pearl/55">Mon - Fri:</span>{' '}
                    {siteConfig.storeHours.weekdays}
                  </p>
                  <p className="text-pearl/40">
                    <span className="text-pearl/55">Saturday:</span>{' '}
                    {siteConfig.storeHours.saturday}
                  </p>
                  <p className="text-pearl/40">
                    <span className="text-pearl/55">Sunday:</span>{' '}
                    {siteConfig.storeHours.sunday}
                  </p>
                </div>
              </div>

              {/* Instagram with hover glow */}
              <div className="flex items-start gap-3.5">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-gold/15 bg-gold/[0.04] flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.08] hover:scale-110 hover:shadow-[0_0_12px_rgba(201,169,110,0.15)]"
                >
                  <svg
                    className="w-3.5 h-3.5 text-gold/70"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pearl/50 hover:text-gold text-sm transition-colors duration-300 self-center"
                >
                  {siteConfig.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Diamond/Gem Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-pearl/[0.07] to-pearl/[0.07]" />
          <div className="flex items-center gap-3 px-2">
            <div className="w-1 h-1 rotate-45 bg-gold/20" />
            <Diamond className="w-4 h-4 text-gold/30" />
            <div className="w-1 h-1 rotate-45 bg-gold/20" />
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-pearl/[0.07] to-pearl/[0.07]" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8">
          <p className="text-pearl/20 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} {siteConfig.brandName}. All
            rights reserved.
          </p>
          <p className="text-pearl/15 text-xs tracking-wide flex items-center gap-1.5">
            Made with
            <span className="inline-flex animate-pulse">
              <Heart className="w-3 h-3 text-gold/40 fill-gold/40" />
            </span>
            care in Nagpur
          </p>
        </div>
      </div>
    </footer>
  );
}
