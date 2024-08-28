// import reactIcon from "../assets/svg/react.svg";
// import reactnativeIcon from "../assets/svg/react-native.svg";
// import nodejsIcon from "../assets/svg/nodejs.svg";
// import socketioIcon from "../assets/svg/socket.io.svg";
// import reactqueryIcon from "../assets/svg/react-query.svg";
// import springIcon from "../assets/svg/spring.svg";
// import cIcon from "../assets/svg/c.svg";
// import linuxIcon from "../assets/svg/linux.svg";
// import dockerIcon from "../assets/svg/docker.svg";
// import bashIcon from "../assets/svg/bash.svg";

// const techMap = new Map([
//     [ "React", reactIcon ],
//       [ "React Native", reactnativeIcon ],
//       [ "NodeJS", nodejsIcon ],
//       [ "Socket.io", socketioIcon ],
//       [ "React Query", reactqueryIcon ],
//       [ "Spring Boot", springIcon ],
//       [ "C", cIcon ],
//       [ "Linux", linuxIcon ],
//       [ "Docker", dockerIcon ],
//       [ "Bash", bashIcon ],
// ]);

type ProjectTileType = {
  repoOwner: string;
  repository: string;
  description: string;
  liveLink: string;
  repoLink: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

function ProjectTile({repoOwner, repository, description, liveLink, repoLink}: ProjectTileType) {
  return (
    <div className="box-border flex flex-col lg:w-1/4 w-11/12 text-center border p-3 gap-3 rounded-3xl hover:shadow-lg bg-white">
      <p className="font-bold">{repoOwner}/{repository}</p>
      <p className="text-gray-600">{truncateText(description, 115)}</p>
      <div className="flex justify-between">
        {/* <TechStack techArray={techArr} /> */}
        <a href={liveLink} className={`border p-2 lg:w-1/5 rounded-xl bg-[#2b3a52] text-white font-bold hover:shadow-lg ${!liveLink ? 'pointer-events-none' : 'pointer-events-auto'}`}>
          Visit
        </a>
        <a href={repoLink} className="border p-2 lg:w-1/5 rounded-xl bg-[#2b3a52] text-white font-bold hover:shadow-lg">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectTile;
