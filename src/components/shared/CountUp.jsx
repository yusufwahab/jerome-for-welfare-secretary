import { useInView } from "react-intersection-observer";
import { useCountUp } from "../../hooks/useCountUp";

/**
 * Big animated numeral. `target` is the numeric value to count up to;
 * `prefix`/`suffix` wrap the formatted number (e.g. suffix="%").
 */
export function CountUp({ target, prefix = "", suffix = "", duration = 1600, className }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const value = useCountUp(target, {
    start: inView,
    duration,
    format: (n) => n.toLocaleString("en-US"),
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
