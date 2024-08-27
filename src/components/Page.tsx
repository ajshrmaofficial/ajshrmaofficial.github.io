import About from "./About";
import Home from "./Home";
import Projects from "./Projects";

function Page() {
  return (
    <div className="lg:w-5/6 mx-auto">
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default Page;
