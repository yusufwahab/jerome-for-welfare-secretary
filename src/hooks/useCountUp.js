import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Animates a numeric count from 0 to `target` once `start` becomes true.
 * Returns the current value formatted as a string via `format`.
 */
export function useCountUp(target, { start = false, duration = 1600, format } = {}) {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    if (reducedMotion) {
      setValue(target);
      return;
    }

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration, reducedMotion]);

  const rounded = Math.round(value);
  return format ? format(rounded) : rounded;
}
