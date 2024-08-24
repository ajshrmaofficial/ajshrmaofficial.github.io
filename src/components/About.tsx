import logo from "../assets/ajay sharma logo.png";
import { Container } from "./Container";

function About() {
  return (
    <Container name="about">
      <img src={logo} alt="logo" />
      <div>
        <h3>ABOUT ME</h3>
      </div>
    </Container>
  );
}

export default About;
