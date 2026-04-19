import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Process from "./components/Process";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo, { LogoFull } from "./components/Logo";

const NAV_ITEMS = ["Works", "Services", "Process", "About"];

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`New Enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // This utilizes the visitor's own email client (e.g. Gmail) to send the mail
    window.location.href = `mailto:pencilon.graphy@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <div className="relative font-sans selection:bg-brand-accent selection:text-white scroll-smooth bg-brand-black">
      <Cursor />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 px-6 md:px-12 py-8 ${scrolled || mobileMenuOpen ? "bg-brand-black/90 backdrop-blur-xl py-6 border-b border-white/5" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 group cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <LogoFull />
          </motion.div>

          <ul className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item, i) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-xs uppercase tracking-[0.18em] font-bold text-white/40 hover:text-brand-accent transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden sm:block px-8 py-3 border border-white/20 text-xs uppercase tracking-[0.2em] font-black hover:bg-brand-accent hover:border-brand-accent hover:text-black transition-all"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden text-white hover:text-brand-accent transition-colors p-4 -mr-4"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[85] bg-brand-black flex flex-col items-center justify-center p-12 md:hidden"
          >
            <ul className="space-y-12 text-center">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-display text-4xl font-black uppercase tracking-[-0.04em] hover:text-brand-accent transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}.
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="#contact"
                  className="font-display text-4xl font-black uppercase tracking-[-0.04em] text-brand-accent block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact.
                </a>
              </motion.li>
            </ul>
            
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end border-t border-white/10 pt-8">
              <div>
                <p className="text-[10px] font-black tracking-[0.2em] text-white/30 uppercase mb-2">Located In</p>
                <p className="text-xs font-bold uppercase tracking-widest leading-relaxed text-white/60">
                  Malappuram, Kerala<br />
                  India
                </p>
              </div>
              <LogoFull className="h-6 opacity-40" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        
        <div className="md:mt-[-40px] relative z-30">
          <Marquee 
            items={["Advertising", "Strategy First", "Malappuram HQ", "Creative Kinetic", "Brand Vision", "Identity Design"]} 
            speed={30}
          />
        </div>

        <Works />
        <Services />
        <Process />

        {/* CTA Section with Enquiry Form */}
        <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-brand-black relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="flex-1">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-8 block">Connect</span>
              <h2 className="font-display text-5xl md:text-[140px] font-black tracking-[-0.05em] mb-12 md:mb-16 uppercase leading-[0.9]">
                Start The <br />
                <span className="text-white/10">Project.</span>
              </h2>
              <div className="space-y-4 font-sans text-xs font-bold tracking-widest text-white/40 uppercase">
                <p>Ready to scale your impact?</p>
                <p>We're accepting new clients.</p>
              </div>
            </div>

            <div className="flex-1 max-w-xl">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col justify-center items-start border border-brand-accent/30 p-8 md:p-12 bg-brand-accent/5 backdrop-blur-xl"
                >
                  <h3 className="font-display text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-brand-accent">Enquiry Sent.</h3>
                  <p className="font-sans text-xs font-bold tracking-[0.2em] text-white/40 uppercase">We will contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <form className="space-y-10 md:space-y-12" onSubmit={handleSubmit}>
                  <div className="group relative">
                    <label className="text-xs font-black tracking-[0.25em] text-white/30 uppercase group-focus-within:text-brand-accent transition-colors block mb-2">
                      Full Name
                    </label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="ENTER YOUR NAME"
                      className="w-full bg-transparent border-b border-white/20 py-4 font-display text-xl md:text-2xl font-black tracking-tighter uppercase focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/10"
                    />
                  </div>

                  <div className="group relative">
                    <label className="text-xs font-black tracking-[0.25em] text-white/30 uppercase group-focus-within:text-brand-accent transition-colors block mb-2">
                      Email Address
                    </label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="HELLO@COMPANY.COM"
                      className="w-full bg-transparent border-b border-white/20 py-4 font-display text-xl md:text-2xl font-black tracking-tighter uppercase focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/10"
                    />
                  </div>

                  <div className="group relative">
                    <label className="text-xs font-black tracking-[0.25em] text-white/30 uppercase group-focus-within:text-brand-accent transition-colors block mb-2">
                      Message
                    </label>
                    <textarea 
                      required
                      name="message"
                      rows={1}
                      placeholder="TELL US ABOUT YOUR PROJECT"
                      className="w-full bg-transparent border-b border-white/20 py-4 font-display text-xl md:text-2xl font-black tracking-tighter uppercase focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/10 resize-none overflow-hidden"
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = "auto";
                        target.style.height = `${target.scrollHeight}px`;
                      }}
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="group flex items-center gap-6 font-display text-3xl md:text-6xl font-black uppercase tracking-tighter hover:text-brand-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
                    <ArrowRight size={32} className={`text-brand-accent transition-transform md:w-16 md:h-16 ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-4"}`} />
                  </button>

                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 font-sans text-xs font-bold tracking-widest uppercase"
                    >
                      {error}
                    </motion.p>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

