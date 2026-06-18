"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sent";

// Where contact submissions are delivered.
const CONTACT_EMAIL = "vinamrapandey22@gmail.com";

const REASONS = [
  "Product role",
  "Brand role",
  "AI consulting",
  "Collaboration",
];

const inputClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-white/40";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  // No backend: build a pre-filled email and hand off to the visitor's mail
  // client. They just hit "Send" in their own app — keeps the site fully static.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const reason = (form.elements.namedItem("reason") as HTMLSelectElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const subject = `[Portfolio] ${reason} — ${name}`;
    const body = [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
      `Reaching out about: ${reason}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-white/60">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm text-white/60">
            Company / business name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Optional"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm text-white/60">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="reason" className="text-sm text-white/60">
            Reaching out about
          </label>
          <select
            id="reason"
            name="reason"
            required
            defaultValue=""
            className={`${inputClass} appearance-none`}
          >
            <option value="" disabled className="text-ink">
              Select one
            </option>
            {REASONS.map((reason) => (
              <option key={reason} value={reason} className="text-ink">
                {reason}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-white/60">
          Tell me about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Start your message…"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-1.5 rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
      >
        Send message
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          ↗
        </span>
      </button>

      {status === "sent" && (
        <p className="text-sm text-white/70">
          Your email app should have opened with the message ready — just hit
          send. If nothing happened, email me directly at {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  );
}
