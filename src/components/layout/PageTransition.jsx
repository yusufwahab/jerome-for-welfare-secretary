import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const EASE = [0.22, 1, 0.36, 1];

export function PageTransition() {
  const location = useLocation();
  const outlet = useOutlet();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div key={location.pathname}>{outlet}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: EASE }}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
}
