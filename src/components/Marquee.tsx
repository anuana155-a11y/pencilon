import { motion } from "motion/react";

interface MarqueeProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
}

export default function Marquee({ items, speed = 20, direction = "left" }: MarqueeProps) {
  return (
    <div className="flex overflow-hidden whitespace-nowrap bg-brand-paper py-3 md:py-4 text-black border-y border-black/10">
      <motion.div
        className="flex gap-16 md:gap-32 items-center"
        animate={{
          x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-16 md:gap-32 hover:text-brand-accent transition-colors duration-300">
            <span
              className="font-display text-[11px] font-black uppercase tracking-[0.25em] md:text-sm"
            >
              {item}
            </span>
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
