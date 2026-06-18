"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const REASONS = [
  "Product role",
  "Brand role",
  "AI consulting",
  "Collaboration",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)
      .value;
    const reason = (form.elements.namedItem("reason") as HTMLSelectElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `[Portfolio] ${reason} — ${name}`,
          name,
          email,
          reason,
          message,
        }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message ?? "Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
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
        disabled={status === "sending"}
        className="rounded-md bg-accent px-6 py-3 font-medium text-canvas transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-accent">
          Thanks — I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-amber">
          Something went wrong. Try emailing me directly instead.
        </p>
      )}
    </form>
  );
}
