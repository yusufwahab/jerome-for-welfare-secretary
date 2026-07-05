import { motion } from "framer-motion";
import { X } from "lucide-react";

/**
 * Full-screen shared-element lightbox. The grid tile that opens it must use
 * a matching `layoutId={`achievement-${item.id}`}` on its image wrapper for
 * the morph transition to work.
 */
export function Lightbox({ item, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <motion.div
        layoutId={`achievement-${item.id}`}
        className="relative w-full max-w-3xl overflow-hidden bg-paper"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.image} alt={item.alt} className="h-auto max-h-[70vh] w-full object-cover" />
        <div className="p-6 md:p-8">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-accent">{item.category}</p>
          <h3 className="font-display text-2xl text-ink">{item.title}</h3>
          <p className="mt-2 text-ink/70">{item.caption}</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full bg-paper/90 p-2 text-ink transition-colors hover:bg-accent hover:text-paper"
        >
          <X size={20} />
        </button>
      </motion.div>
    </motion.div>
  );
}
