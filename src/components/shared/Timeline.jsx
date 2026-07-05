import clsx from "clsx";

export function TimelineNav({ items, activeId, onSelect }) {
  return (
    <ol className="space-y-7">
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => onSelect?.(item.id)}
              className={clsx(
                "block text-left transition-colors duration-300",
                isActive ? "text-accent" : "text-ink/35 hover:text-ink/60"
              )}
            >
              <p className="font-tabular text-xs uppercase tracking-wider">{item.year}</p>
              <p className="mt-1 font-display text-base leading-tight">{item.role}</p>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
