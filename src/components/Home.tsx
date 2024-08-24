import {Container} from "./Container";
import ProfileBlob from "./ProfileBlob";

function Home() {
  return (
    <Container name="home">
      <div className="flex justify-center w-1/2">
          <ProfileBlob />
      </div>
      <div className="flex flex-col items-center justify-center gap-6 w-1/2">
        <h1 className="text-6xl font-bold">Hey There 👋</h1>   
        
      </div>
    </Container>
  );
}

export default Home;
