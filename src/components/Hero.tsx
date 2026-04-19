import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const rotate = useTransform(scrollY, [0, 500], [0, -10]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 md:px-12">
      {/* Background Kinetic Logo */}
      <motion.div
        style={{ y: y1, rotate }}
        className="pointer-events-none absolute -right-[15%] -top-[10%] -z-10 select-none origin-bottom-right"
      >
        <Logo className="h-[800px] w-[800px] opacity-[0.03]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="max-w-5xl font-display text-8xl font-black leading-[0.85] tracking-[-0.05em] md:text-[160px] uppercase"
        >
          Beyond<br />
          The Digital<br />
          <span className="text-brand-accent">Frontier.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 flex flex-col items-start gap-12 md:flex-row md:items-center"
        >
          <p className="max-w-sm font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/50 leading-relaxed">
            Located in Malappuram, Kerala. <br />
            Crafting enduring visual languages <br />
            for the next generation of brands.
          </p>

          <button className="group relative flex items-center gap-4 overflow-hidden border-b-2 border-brand-accent pb-2 font-display text-lg font-bold uppercase tracking-tighter transition-all hover:gap-6">
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5 text-brand-accent" />
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-12 right-12 hidden md:block"
      >
        <div className="text-right">
          <p className="font-display text-4xl font-bold">110+</p>
          <p className="font-sans text-xs uppercase tracking-widest text-white/40">Projects Delivered</p>
        </div>
      </motion.div>
    </section>
  );
}
