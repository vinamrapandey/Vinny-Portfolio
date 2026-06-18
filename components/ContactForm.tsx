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

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  // No backend: build a pre-filled email and hand off to the visitor's mail
  // client. They just hit "Send" in their own app — keeps the site fully static.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const reason = (form.elements.namedItem("reason") as HTMLSelectElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const subject = `[Portfolio] ${reason} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Reaching out about: ${reason}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-md border border-white/10 bg-surface px-4 py-2.5 text-ink outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-md border border-white/10 bg-surface px-4 py-2.5 text-ink outline-none focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="text-sm text-muted">
          Reaching out about
        </label>
        <select
          id="reason"
          name="reason"
          required
          defaultValue=""
          className="mt-2 w-full rounded-md border border-white/10 bg-surface px-4 py-2.5 text-ink outline-none focus:border-accent"
        >
          <option value="" disabled>
            Select one
          </option>
          {REASONS.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-md border border-white/10 bg-surface px-4 py-2.5 text-ink outline-none focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-accent px-6 py-3 font-medium text-canvas transition-opacity hover:opacity-90"
      >
        Send message
      </button>

      {status === "sent" && (
        <p className="text-sm text-accent">
          Your email app should have opened with the message ready — just hit
          send. If nothing happened, email me directly at {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  );
}
