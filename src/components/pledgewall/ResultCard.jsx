import { forwardRef } from "react";

export const ResultCard = forwardRef(function ResultCard({ pillar }, ref) {
  return (
    <div
      ref={ref}
      className="mx-auto flex aspect-[4/5] w-full max-w-sm flex-col justify-between bg-ink p-8 text-paper"
    >
      <div>
        <p className="font-display text-sm tracking-wide text-accent-soft">OJJ · Pledge Wall</p>
        <p className="mt-1 text-xs uppercase tracking-wider text-paper/50">Welfare, taken seriously.</p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wider text-paper/60">You're</p>
        <h2 className="mt-2 font-display text-4xl leading-tight text-paper">{pillar.resultTitle}</h2>
        <p className="mt-4 text-sm leading-relaxed text-paper/70">{pillar.resultCopy}</p>
      </div>

      <div className="border-t border-paper/20 pt-4">
        <p className="text-xs text-paper/50">Take the quiz — link in bio</p>
      </div>
    </div>
  );
});
