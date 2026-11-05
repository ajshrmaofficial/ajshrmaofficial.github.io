import { recognition } from "../data/content";
import { Section } from "./ui";

function Recognition() {
  return (
    <Section id="recognition" title="Recognition">
      <ul className="flex flex-col gap-6">
        {recognition.map((item) => (
          <li key={item.date} className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-8">
            <div>
              <p className="font-display text-xl font-medium leading-snug">{item.title}</p>
              <p className="text-ink/80">{item.detail}</p>
            </div>
            <p className="shrink-0 text-[0.95rem] text-muted">{item.date}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Recognition;
