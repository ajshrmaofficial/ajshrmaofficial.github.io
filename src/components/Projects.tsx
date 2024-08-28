import ProjectTile from "./ProjectTile";
import TechStack from "./TechStack";

const projectsArr = [
  {
    repoOwner: "ajshrmaofficial",
    repository: "guftgu",
    description:
      "Guftgu is a real-time chat application. It uses React for the frontend, Node.js and Express for the backend, and Socket.io for real-time communication. It features user authentication, private messaging, and group chats.",
    liveLink: "",
    repoLink: "https://github.com/ajshrmaofficial/guftgu",
  },
  {
    repoOwner: "ajshrmaofficial",
    repository: "code-pencil",
    description: "A CodePen-inspired web app built with React. Features syntax highlighting via CodeMirror, enabling interactive code editing and previewing.",
    liveLink: "https://codepencil-ajayshrma.vercel.app",
    repoLink: "https://github.com/ajshrmaofficial/code-pencil",
  },
  {
    repoOwner: "ajshrmaofficial",
    repository: "flyingKing",
    description: "A React Native mobile game inspired by Flappy Bird. Built without animation libraries, featuring custom physics and AsyncStorage for high scores.",
    liveLink: "",
    repoLink: "https://github.com/ajshrmaofficial/flyingKing",
  },
  {
    repoOwner: "ajshrmaofficial",
    repository: "musify",
    description: "React-based Spotify client with Node.js backend. Shows top 20 songs, enables search and playback. Uses Spotify Web API for data.",
    liveLink: "https://musify-ajayshrma.vercel.app",
    repoLink: "https://github.com/ajshrmaofficial/musify",
  },
  {
    repoOwner: "ajshrmaofficial",
    repository: "Spring-Cart",
    description: "Simple e-commerce site using ReactJS and Spring Boot with REST APIs, JWT authentication, and Spring Security.",
    liveLink: "",
    repoLink: "https://github.com/ajshrmaofficial/Spring-Cart",
  },
  {
    repoOwner: "ajshrmaofficial",
    repository: "The-Dear-Diary",
    description: "Diary management app in C with GTK, supports multiple users, encrypted entries, and basic auth.",
    liveLink: "",
    repoLink: "https://github.com/ajshrmaofficial/The-Dear-Diary",
  },
];

function Projects() {
  return (
    <div id="projects" className="min-h-svh flex flex-col items-center justify-center gap-8 pt-20">
        <h2 className="lg:text-6xl text-4xl font-bold">PROJECTS</h2>
        <TechStack/>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 justify-center items-center">
        {projectsArr.map((project) => (
          <ProjectTile {...project} key={project.repository} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
