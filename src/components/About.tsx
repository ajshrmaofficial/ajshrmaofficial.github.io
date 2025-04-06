import educationLogo from '../assets/png/education.png';
import experienceLogo from '../assets/png/experience.png';

function About() {
  return (
    <div id="about" className="min-h-svh flex flex-col items-center justify-center gap-8 pt-20">
      <h2 className="lg:text-6xl text-4xl font-bold">ABOUT ME</h2>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-4 px-4">
        <div className="w-full lg:w-2/6 h-40 border border-black rounded-3xl flex flex-col justify-center items-center">
          <img src={experienceLogo} alt="" className='w-8' />
          <p className='font-black text-xl'>Experience</p>
          <p className='text-gray-600'>11 months</p>
          <p className='text-gray-600'>Full Stack Developer</p>
        </div>
        <div className="w-full lg:w-2/6 h-40 border border-black rounded-3xl flex flex-col justify-center items-center">
        <img src={educationLogo} alt="" className='w-8' />
          <p className='font-black text-xl'>Education</p>
          <p className='text-gray-600'>B.Tech Bachelors Degree</p>
          <p className='text-gray-600'>Computer Science and Engineering</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-3 text-xl p-3">
        <p>
        👋 Hey there! I'm <b>Ajay Sharma</b>, a <b>Full Stack Developer</b> based
          in New Delhi.
        </p>
        <p>
          At 23, I'm wrapping up my{" "}
          <b>B.Tech in Computer Science and Engineering</b><br/> but my passion for
          coding has been running strong for years.
        </p>
        <p>
          I love working with React, Node.js and Spring Boot to build robust
          web applications.
        </p>
        <p>
          <b>Mobile development?</b> That's where <b>React Native</b> comes in
          handy.
        </p>
        <p>
          I'm also pretty comfortable with libraries like <b>Socket.io</b> and&nbsp;  
          <b>Redux</b> to add that extra functionality when needed.
        </p>
        <p>
          When I'm not coding, you might find me tinkering with <b>Linux</b> -
          it's a bit of a hobby.
        </p>
        <p>
          Oh, and Docker 🐳? It's become an essential part of my project workflow.
        </p>
        <p>
          I enjoy the challenge of creating efficient, scalable solutions,
          whether it's for the web or mobile.<br/> Always eager to learn and grow in
          this ever-evolving tech world! 🚀
        </p>
      </div>
    </div>
  );
}

export default About;
