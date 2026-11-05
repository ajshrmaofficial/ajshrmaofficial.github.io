const links = ["Experience", "Projects", "Skills", "Education", "Recognition", "Contact"];

function Header() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 py-8">
      <a href="#top" className="font-display text-xl font-medium leading-snug">
        Ajay Sharma
      </a>
      <nav aria-label="Sections">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-muted">
          {links.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="transition-colors hover:text-accent">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
