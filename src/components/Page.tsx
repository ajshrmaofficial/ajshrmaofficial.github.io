import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";

function Page() {
  return (
    <div className="lg:w-5/6 mx-auto">
      <Home />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}

export default Page;
