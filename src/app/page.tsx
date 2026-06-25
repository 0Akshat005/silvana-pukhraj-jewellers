import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Collections from "@/components/Collections";
import FeaturedVideo from "@/components/FeaturedVideo";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Offers />
      <Collections />
      <FeaturedVideo />
      <About />
      <Gallery />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
