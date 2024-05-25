import '../styles/App.css'
import ProfileBlob from './ProfileBlob';
import Typewriter from 'typewriter-effect';

function Home(){
    return(
        <div id='home' className='home'>
            <div className='hero-section'>
                <ProfileBlob/>
                <div className='hero-title'>
                <h1>Hey There 👋</h1>
                <div>
                <h2>I'm a</h2>
                <h2>
                <Typewriter
                    options={{
                    strings: ['Full Stack Developer', 'React Native Developer'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </h2>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
