import { useState } from "react";
import { addPledge } from "../../utils/pledges";

export function PledgeForm({ onAdded }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [justAdded, setJustAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Your name is required.");
      return;
    }
    setError("");
    addPledge({ name, message });
    setName("");
    setMessage("");
    setJustAdded(true);
    onAdded?.();
    setTimeout(() => setJustAdded(false), 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-4">
      <div>
        <label htmlFor="pledge-name" className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/50">
          Your name
        </label>
        <input
          id="pledge-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Student"
          className="min-h-11 w-full border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink/40 focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="pledge-message" className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/50">
          Why does welfare matter to you? <span className="normal-case text-ink/30">(optional)</span>
        </label>
        <textarea
          id="pledge-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Say a word or two…"
          className="w-full border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink/40 focus:border-accent"
        />
      </div>

      {error && <p className="text-sm text-accent">{error}</p>}
      {justAdded && <p className="text-sm text-accent">Added to the wall — thank you.</p>}

      <button
        type="submit"
        className="min-h-11 self-start rounded-full bg-accent px-8 text-sm font-medium text-paper transition-colors hover:bg-ink"
      >
        Add My Name
      </button>
    </form>
  );
}
