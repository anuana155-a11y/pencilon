import { motion } from "motion/react";

interface MarqueeProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
}

export default function Marquee({ items, speed = 20, direction = "left" }: MarqueeProps) {
  return (
    <div className="flex overflow-hidden whitespace-nowrap bg-brand-paper py-1 text-black md:py-1.5 border-y border-black/10">
      <motion.div
        className="flex gap-12 md:gap-24 items-center"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12 md:gap-24">
            <span
              className="font-display text-[10px] font-black uppercase tracking-[0.2em] md:text-xs"
            >
              {item}
            </span>
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
