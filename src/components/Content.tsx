import Home from "./Home";
import '../styles/App.css'
import About from "./About";

function Content(){
    return(
        <div className="content">
            <Home/>
            <About/>
        </div>
    )
}

export default Content;
