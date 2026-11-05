import { otherWork, projects } from "../data/content";
import { ExternalLink, Section } from "./ui";

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <article key={project.name}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-medium leading-snug">{project.name}</h3>
              {project.note && (
                <span className="rounded border border-ink/15 px-1.5 py-0.5 text-xs text-muted">
                  {project.note}
                </span>
              )}
            </div>
            <p className="mt-2 text-ink/80">{project.summary}</p>
            <ul className="mt-4 flex list-disc flex-col gap-2 pl-4 text-ink/80 marker:text-accent/50">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="mt-4 text-[0.95rem] text-muted">{project.stack}</p>
            <p className="mt-4 text-[0.95rem]">
              <ExternalLink href={project.repo}>Source</ExternalLink>
            </p>
          </article>
        ))}

        <div>
          <h3 className="font-display text-xl font-medium leading-snug">Other work</h3>
          <ul className="mt-3 divide-y divide-ink/10">
            {otherWork.map((item) => (
              <li key={item.name} className="flex flex-col gap-1 py-4">
                <span>
                  <ExternalLink href={item.href}>{item.name}</ExternalLink>
                </span>
                <span className="text-[0.95rem] text-muted">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Projects;
