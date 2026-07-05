import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Image that drifts slightly slower than scroll (~0.85x) for depth.
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
export function ParallaxImage({ src, alt, className }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const isTouch = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  const disabled = reducedMotion || isTouch;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], disabled ? [0, 0] : ["-6%", "6%"]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.img src={src} alt={alt} style={{ y }} className="h-full w-full object-cover" />
    </div>
  );
}
