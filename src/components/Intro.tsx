import { profile } from "../data/content";
import ProfileBlob from "./ProfileBlob";
import { ExternalLink } from "./ui";

function Intro() {
  return (
    <section id="top" className="flex flex-col-reverse gap-10 py-12 md:flex-row md:items-center md:justify-between md:gap-12 md:py-20">
      <div>
        <p className="text-accent">Hello, I'm</p>
        <h1 className="mt-1 font-display text-5xl font-medium tracking-tight md:text-6xl">{profile.name}</h1>
        <p className="mt-3 font-display text-xl italic text-muted">{profile.title}</p>
        <p className="mt-8 max-w-lg">{profile.intro}</p>
        <p className="mt-8 flex gap-6 text-[0.95rem]">
          <ExternalLink href={profile.resume}>Resume (PDF)</ExternalLink>
          <ExternalLink href={`mailto:${profile.email}`}>Email me</ExternalLink>
        </p>
      </div>
      <ProfileBlob />
    </section>
  );
}

export default Intro;
