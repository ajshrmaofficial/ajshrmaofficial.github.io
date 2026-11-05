import { skills } from "../data/content";
import { Section } from "./ui";

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="flex flex-col gap-7">
        {skills.map((skill) => (
          <div key={skill.group} className="flex flex-col gap-1">
            <dt className="text-[0.95rem] text-muted">{skill.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-5 gap-y-1 text-ink/80">
                {skill.items.map((item) => (
                  <li key={item} className="whitespace-nowrap">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export default Skills;
