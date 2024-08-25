import {Container} from "./Container";
import ProfileBlob from "./ProfileBlob";

function Home() {
  return (
    <Container name="home">
      <div className="flex justify-center w-1/2">
          <ProfileBlob />
      </div>
      <div className="flex flex-col items-center justify-center gap-6 w-1/2">
        <h2 className="lg:text-4xl text-2xl font-bold">Hey There 👋</h2>   
        <h1 className="text-6xl font-bold">I'm Ajay Sharma</h1>
        <a className="border-2 border-gray-400 lg:p-3 p-1 font-bold lg:text-lg text-md hover:border-black" href="/files/Ajay Sharma Resume V4.pdf"  target="_blank" rel="noopener noreferrer"><h2>Download Resume</h2></a>
      </div>
    </Container>
  );
}

export default Home;
