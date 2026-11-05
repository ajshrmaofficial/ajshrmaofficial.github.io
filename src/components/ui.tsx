import type { ReactNode } from "react";

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
    >
      {children}
    </a>
  );
}

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8 py-12 md:grid md:grid-cols-[9rem_1fr] md:gap-8">
      <h2 className="mb-6 font-display text-xl italic text-accent md:mb-0">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
