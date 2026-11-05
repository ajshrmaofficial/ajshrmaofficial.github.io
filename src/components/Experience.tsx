import { experience } from "../data/content";
import { Section } from "./ui";

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-12">
        {experience.map((job) => (
          <article key={job.company}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-8">
              <div>
                <h3 className="font-display text-xl font-medium leading-snug">{job.company}</h3>
                <p className="font-display italic text-muted">{job.role}</p>
              </div>
              <p className="shrink-0 text-[0.95rem] text-muted sm:pt-1">{job.period}</p>
            </div>
            <ul className="mt-4 flex list-disc flex-col gap-2 pl-4 text-ink/80 marker:text-accent/50">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="mt-4 text-[0.95rem] text-muted">{job.stack}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
