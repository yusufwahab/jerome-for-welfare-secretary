import clsx from "clsx";

export function PullQuote({ children, className, size = "md", border = "accent", light = false }) {
  return (
    <blockquote
      className={clsx(
        "border-l-2 pl-6 md:pl-8 font-display italic leading-snug",
        border === "accent-soft" ? "border-accent-soft" : "border-accent",
        light ? "text-paper" : "text-ink",
        size === "lg" ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl",
        className
      )}
    >
      {children}
    </blockquote>
  );
}
