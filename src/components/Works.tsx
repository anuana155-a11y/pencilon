import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "Vivid Vision",
    category: "Branding",
    image: "https://picsum.photos/seed/agency1/800/1000"
  },
  {
    title: "Kinetic Sport",
    category: "Social Creative",
    image: "https://picsum.photos/seed/agency2/800/1000"
  },
  {
    title: "Neo Pulse",
    category: "Digital Strategy",
    image: "https://picsum.photos/seed/agency3/800/1000"
  },
  {
    title: "Arc Light",
    category: "Identity",
    image: "https://picsum.photos/seed/agency4/800/1000"
  }
];

export default function Works() {
  return (
    <section id="works" className="py-24 px-6 md:px-12 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-4 block">Case Studies</span>
            <h2 className="font-display text-7xl md:text-9xl font-black tracking-[-0.05em] uppercase leading-[0.8]">Selected<br />Works.</h2>
          </div>
          <p className="max-w-xs font-sans text-xs font-semibold uppercase tracking-widest text-white/40 leading-relaxed">
            Exploring the intersection of high-concept design and commercial performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {works.map((work, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-8">
                <img 
                  src={work.image} 
                  alt={work.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/20 transition-colors duration-500 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    className="w-24 h-24 bg-brand-paper rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight className="text-brand-black h-8 w-8" />
                  </motion.div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-4xl font-black tracking-tighter uppercase mb-2 group-hover:text-brand-accent transition-colors">
                    {work.title}
                  </h3>
                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                    {work.category}
                  </span>
                </div>
                <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
                  ( 2026 )
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
