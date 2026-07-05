import { useState } from "react";

const CONTACT_EMAIL = "campaign@ofuowoicho.example"; // placeholder — replace with the real campaign inbox

// NOTE FOR PRODUCTION: this form currently submits via a `mailto:` link,
// which just opens the visitor's own email client with the message
// pre-filled — it does not send anything server-side, and it will not work
// reliably on visitors without a configured desktop mail client. For a real
// in-page submission (no mail client required), wire this up to a form
// backend such as Formspree, or a custom API endpoint. Flagging rather than
// silently pretending this is a live submission.
export function ContactForm() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Your name is required.";
    if (!form.contact.trim()) next.contact = "Email or WhatsApp number is required.";
    if (!form.message.trim()) next.message = "Say a little about what's on your mind.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Campaign message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nReach me at: ${form.contact}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/50">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={update("name")}
          className="min-h-11 w-full border border-line bg-paper px-4 py-3 text-ink focus:border-accent"
        />
        {errors.name && <p className="mt-1 text-sm text-accent">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact" className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/50">
          Email or WhatsApp
        </label>
        <input
          id="contact"
          type="text"
          value={form.contact}
          onChange={update("contact")}
          className="min-h-11 w-full border border-line bg-paper px-4 py-3 text-ink focus:border-accent"
        />
        {errors.contact && <p className="mt-1 text-sm text-accent">{errors.contact}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/50">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          className="w-full border border-line bg-paper px-4 py-3 text-ink focus:border-accent"
        />
        {errors.message && <p className="mt-1 text-sm text-accent">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="min-h-11 self-start rounded-full bg-accent px-8 text-sm font-medium text-paper transition-colors hover:bg-ink"
      >
        Send Message
      </button>
    </form>
  );
}
