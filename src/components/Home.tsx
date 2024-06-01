import Container from "./Container";
import ProfileBlob from "./ProfileBlob";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <Container>
      <div className="flex justify-center w-1/2">
          <ProfileBlob />
      </div>
      <div className="flex flex-col items-center justify-center w-1/2">
        <h1>Hey There 👋</h1>   
        <div className="flex w-full gap-2">
          <h2 className="">
            I'm a 
          </h2>
          <Typewriter
            options={{
              strings: ["Full Stack Developer", "React Native Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </Container>
  );
}

export default Home;
