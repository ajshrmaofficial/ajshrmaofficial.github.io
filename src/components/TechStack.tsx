import reactIcon from "../assets/svg/react.svg";
import reactnativeIcon from "../assets/svg/react-native.svg";
import nodejsIcon from "../assets/svg/nodejs.svg";
import socketioIcon from "../assets/svg/socket.io.svg";
import reactqueryIcon from "../assets/svg/react-query.svg";
import springIcon from "../assets/svg/spring.svg";
import cIcon from "../assets/svg/c.svg";
import linuxIcon from "../assets/svg/linux.svg";
import dockerIcon from "../assets/svg/docker.svg";
import bashIcon from "../assets/svg/bash.svg";

const techArray = [
  { name: "React", path: reactIcon },
  { name: "React Native", path: reactnativeIcon },
  { name: "NodeJS", path: nodejsIcon },
  { name: "Socket.io", path: socketioIcon },
  { name: "React Query", path: reactqueryIcon },
  { name: "Spring Boot", path: springIcon },
  { name: "C", path: cIcon },
  { name: "Linux", path: linuxIcon },
  { name: "Docker", path: dockerIcon },
  { name: "Bash", path: bashIcon },
];

function TechStack() {
  return (
    <div className="flex gap-2 lg:w-full justify-center flex-wrap">
      {techArray.map((tech) => (
        <img src={tech.path} alt={tech.name} key={tech.name} className="size-10 lg:size-10 border p-2 rounded-md cursor-pointer bg-offWhite hover:border-[#2b3a52]"/>
      ))}
    </div>
  );
}

export default TechStack;
