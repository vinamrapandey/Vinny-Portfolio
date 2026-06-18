"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Product Manager",
  "Brand Strategist",
  "AI Consultant",
  "Full-Stack Builder",
];

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_MS = 1600;

export default function RoleRotator() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">(
    "typing"
  );

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (phase === "typing") {
      if (text.length < currentRole.length) {
        const t = setTimeout(
          () => setText(currentRole.slice(0, text.length + 1)),
          TYPE_SPEED
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("holding"), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("deleting"), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(
          () => setText(text.slice(0, -1)),
          DELETE_SPEED
        );
        return () => clearTimeout(t);
      }
      setRoleIndex((i) => (i + 1) % ROLES.length);
      setPhase("typing");
    }
  }, [text, phase, roleIndex]);

  return (
    <span className="inline-flex items-center text-accent">
      <span>{text}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[1em] w-[2px] translate-y-[0.1em] animate-pulse bg-accent"
      />
    </span>
  );
}
