'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Send, ChevronDown, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I am ${formData.name}. I am interested in ${formData.interest || 'your jewellery'}. ${formData.message}`.trim();
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-midnight overflow-hidden">
      {/* Luxurious background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,110,0.06)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,169,110,0.04)_0%,_transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20 sm:mb-28"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-gold/30" />
            <p className="text-gold text-[10px] sm:text-xs tracking-[0.5em] uppercase font-semibold">
              Get In Touch
            </p>
            <div className="w-8 h-[1px] bg-gold/30" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-extralight text-cream mb-6 tracking-wide gold-text-shadow">
            Visit Our <span className="text-gold italic font-light">Showroom</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Left: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold/30 group-hover:shadow-[0_0_15px_rgba(201,169,110,0.1)] transition-all duration-500">
                  <MapPin className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-pearl text-[11px] tracking-[0.25em] uppercase font-semibold mb-2">Address</h3>
                  <p className="text-pearl/50 text-sm leading-relaxed font-light">{siteConfig.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold/30 group-hover:shadow-[0_0_15px_rgba(201,169,110,0.1)] transition-all duration-500">
                  <Phone className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-pearl text-[11px] tracking-[0.25em] uppercase font-semibold mb-2">Phone</h3>
                  <a
                    href={`tel:+91${siteConfig.phone}`}
                    className="text-pearl/50 hover:text-gold text-sm transition-colors duration-300 font-light"
                  >
                    +91 {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Store Hours */}
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold/30 group-hover:shadow-[0_0_15px_rgba(201,169,110,0.1)] transition-all duration-500">
                  <Clock className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-pearl text-[11px] tracking-[0.25em] uppercase font-semibold mb-2">Store Hours</h3>
                  <div className="text-pearl/50 text-sm space-y-1 font-light">
                    <p>Mon - Sat: {siteConfig.storeHours.weekdays}</p>
                    <p>Sunday: {siteConfig.storeHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:+91${siteConfig.phone}`}
                className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 border border-gold/25 text-gold text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gold hover:text-midnight transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Real Google Map */}
            <div className="border border-cream/5 bg-midnight/50 h-64 sm:h-72 w-full overflow-hidden relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.259836371842!2d79.0988628!3d21.1022204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf2a6438f075%3A0xc32a4e23ec2d5e23!2sManewada%20Rd%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718826500000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.6)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-700 group-hover:[filter:grayscale(0)_contrast(1)_opacity(0.9)]"
              />
            </div>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative p-8 sm:p-14 glass-card shadow-[0_8px_40px_0_rgba(0,0,0,0.4)]">
              {/* Top gold line decoration */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/20" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/20" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/20" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/20" />

              <h3 className="font-display text-3xl sm:text-4xl font-extralight text-cream mb-3 tracking-wide">
                Send an <span className="text-gold italic font-light">Enquiry</span>
              </h3>
              <p className="text-pearl/40 text-sm mb-12 font-light">
                Tell us what you are looking for. Our consultants will get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="peer w-full bg-transparent border-b border-cream/15 text-pearl text-sm px-0 py-3.5 focus:border-gold focus:outline-none transition-colors duration-500 placeholder-transparent"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-pearl/40 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-[11px] peer-focus:text-gold/80 peer-focus:tracking-[0.2em]">
                    Your Name
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="peer w-full bg-transparent border-b border-cream/15 text-pearl text-sm px-0 py-3.5 focus:border-gold focus:outline-none transition-colors duration-500 placeholder-transparent"
                    placeholder="Phone Number"
                  />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-pearl/40 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-[11px] peer-focus:text-gold/80 peer-focus:tracking-[0.2em]">
                    Phone Number
                  </label>
                </div>

                {/* Interest Area */}
                <div className="relative">
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className={`w-full bg-transparent border-b border-cream/15 text-sm px-0 py-3.5 focus:border-gold focus:outline-none transition-colors duration-500 appearance-none cursor-pointer ${formData.interest ? 'text-pearl' : 'text-pearl/40'}`}
                  >
                    <option value="" disabled className="bg-midnight text-pearl/50">Select Area of Interest</option>
                    <option value="Gold Jewellery" className="bg-midnight text-pearl">Gold Jewellery</option>
                    <option value="Silver Jewellery" className="bg-midnight text-pearl">Silver Jewellery</option>
                    <option value="Gemstones" className="bg-midnight text-pearl">Gemstones</option>
                    <option value="Other" className="bg-midnight text-pearl">Other</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-pearl/25 pointer-events-none" />
                </div>

                {/* Message */}
                <div className="relative pt-2">
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="peer w-full bg-transparent border-b border-cream/15 text-pearl text-sm px-0 py-3.5 focus:border-gold focus:outline-none transition-colors duration-500 resize-none placeholder-transparent"
                    placeholder="Message"
                  />
                  <label htmlFor="message" className="absolute left-0 -top-1.5 text-pearl/40 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-1.5 peer-focus:text-[11px] peer-focus:text-gold/80 peer-focus:tracking-[0.2em]">
                    Tell us about the piece you are looking for...
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group relative w-full mt-4 flex items-center justify-center gap-3 px-8 py-5 bg-gold text-midnight text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-gold-soft transition-all duration-300 btn-shimmer-hover overflow-hidden"
                >
                  {submitted ? (
                    <span className="relative z-10">Opening WhatsApp...</span>
                  ) : (
                    <span className="relative z-10 flex items-center gap-3">
                      <Send className="w-4 h-4" />
                      Send Enquiry
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
