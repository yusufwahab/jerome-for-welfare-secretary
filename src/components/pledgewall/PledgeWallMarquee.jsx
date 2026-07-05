import { useReducedMotion } from "../../hooks/useReducedMotion";

function PledgeCard({ pledge }) {
  return (
    <div className="w-64 shrink-0 border border-line bg-paper p-5">
      <p className="font-display text-base text-ink">{pledge.name}</p>
      {pledge.message && <p className="mt-2 text-sm text-ink/60">“{pledge.message}”</p>}
    </div>
  );
}

export function PledgeWallMarquee({ pledges }) {
  const reducedMotion = useReducedMotion();

  if (pledges.length === 0) {
    return <p className="text-center text-ink/50">Be the first to add your name to the wall.</p>;
  }

  if (reducedMotion) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pledges.map((pledge) => (
          <PledgeCard key={pledge.id} pledge={pledge} />
        ))}
      </div>
    );
  }

  const track = [...pledges, ...pledges];

  return (
    <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]">
        {track.map((pledge, i) => (
          <PledgeCard key={`${pledge.id}-${i}`} pledge={pledge} />
        ))}
      </div>
    </div>
  );
}
