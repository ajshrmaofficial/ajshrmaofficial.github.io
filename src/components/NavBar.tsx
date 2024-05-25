import '../styles/App.css'

function NavBar(){
    return(
        <nav className='navbar'>
            <h3>Ajay Sharma</h3>
            <ul className='navlinks'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
