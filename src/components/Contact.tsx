import { contact } from "../data/content";
import { ExternalLink, Section } from "./ui";

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <ul className="flex flex-col gap-3">
        {contact.map((item) => (
          <li key={item.label} className="flex flex-col gap-1 sm:flex-row sm:gap-8">
            <span className="text-muted sm:w-40">{item.label}</span>
            <ExternalLink href={item.href}>{item.text}</ExternalLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Contact;
