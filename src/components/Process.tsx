import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    content: "We start by diving deep into your brand, audience, and goals. This research-heavy phase ensures every creative decision we make is backed by a solid strategic foundation."
  },
  {
    number: "02",
    title: "Conceptualization",
    content: "Our creative team brainstorms multiple directions, pushing boundaries to find the perfect visual and emotional hook that will differentiate you in the market."
  },
  {
    number: "03",
    title: "Design & Development",
    content: "We bring concepts to life using the latest technology and design principles. Whether it's a branding system or a digital interface, precision is our standard."
  },
  {
    number: "04",
    title: "Launch & Optimization",
    content: "Deployment is just the beginning. We monitor performance and iterate based on real feedback to ensure long-term success and continuous improvement."
  }
];

export default function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-brand-paper text-black md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-32">
        <div>
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-4 block">Our Process</span>
          <h2 className="font-display text-6xl font-black tracking-[-0.04em] mb-8 max-w-sm uppercase leading-[0.85]">Systematic<br />Excellence.</h2>
          <p className="font-sans text-black/60 max-w-md text-sm font-semibold tracking-wider leading-relaxed">
            A research-heavy approach designed to take your brand from concept to cultural impact.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="border-b border-black/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-10 group"
              >
                <div className="flex items-center gap-8 text-left">
                  <span className="font-display text-[10px] font-bold text-black/30 group-hover:text-brand-accent transition-colors tracking-widest">
                    {step.number}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-black tracking-tighter uppercase transition-colors group-hover:text-brand-accent">
                    {step.title}
                  </h3>
                </div>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} className="text-brand-accent" />}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-10 pl-16 max-w-lg font-sans text-black/50 leading-relaxed text-sm font-medium tracking-wide uppercase">
                      {step.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
