import { education } from "../data/content";
import { Section } from "./ui";

function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-8">
        <div>
          <h3 className="font-display text-xl font-medium leading-snug">{education.school}</h3>
          <p className="font-display italic text-muted">{education.degree}</p>
        </div>
        <p className="shrink-0 text-[0.95rem] text-muted sm:pt-1">{education.period}</p>
      </div>
      <p className="mt-4 text-ink/80">{education.extra}</p>
    </Section>
  );
}

export default Education;
