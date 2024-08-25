import reactIcon from "../assets/react.svg";
import reactnativeIcon from "../assets/react-native.svg";
import nodejsIcon from "../assets/nodejs.svg";
import socketioIcon from "../assets/socket.io.svg";
import reactqueryIcon from "../assets/react-query.svg";
import springIcon from "../assets/spring.svg";
import cIcon from "../assets/c.svg";
import linuxIcon from "../assets/linux.svg";
import dockerIcon from "../assets/docker.svg";
import bashIcon from "../assets/bash.svg";
// import { useState } from "react";

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

function TechStack(): React.JSX.Element {
    // const [showTagName, setShowTagName] = useState('');
  return (
    <div className="flex gap-2">
      {techArray.map((tech) => (
        <div className="">
            <img src={tech.path} alt={tech.name} key={tech.name} className="w-14 h-14 border p-2 rounded-md cursor-pointer z-50 bg-offWhite"/>
        </div>
      ))}
    </div>
  );
}

export default TechStack;
