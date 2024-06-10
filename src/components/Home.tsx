import Container from "./Container";
import ProfileBlob from "./ProfileBlob";
import Typewriter from "typewriter-effect";
import '../styles/App.css'

function Home() {
  return (
    <Container>
      <div className="flex justify-center w-1/2">
          <ProfileBlob />
      </div>
      <div className="flex flex-col items-center justify-center w-1/2">
        <h1 className="text-3xl font-bold">Hey There 👋</h1>   
        <div className="flex w-full gap-2 justify-center">
          <h2 className="text-2xl font-bold">
            I'm a 
          </h2>
          <Typewriter
            options={{
              strings: ["Full Stack Developer", "React Native Developer"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriter",
            }}
          />
        </div>
      </div>
    </Container>
  );
}

export default Home;
