import { motion } from "motion/react";
import { Palette, Share2, Rocket, ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01 // BRANDING",
    title: "Identity Systems",
    description: "Crafting enduring visual languages that define market leaders and withstand time.",
  },
  {
    num: "02 // DIGITAL",
    title: "Performance Ads",
    description: "Data-driven strategies designed for high-conversion and brand resonance.",
  },
  {
    num: "03 // SOCIAL",
    title: "Kinetic Content",
    description: "High-speed social creatives for the modern scrolling digital consumer.",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 md:py-32 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 h-[220px] flex flex-col justify-between group hover:bg-brand-accent/10 transition-colors duration-500"
            >
              <div>
                <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/40 block mb-2">{service.num}</span>
                <h3 className="font-display text-2xl font-bold tracking-tight uppercase">{service.title}</h3>
              </div>
              
              <div className="flex justify-between items-end">
                <p className="text-xs uppercase tracking-widest text-white/50 max-w-[180px] leading-relaxed">
                  {service.description}
                </p>
                <ArrowUpRight className="h-5 w-5 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
