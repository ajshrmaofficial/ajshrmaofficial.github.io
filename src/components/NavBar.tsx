import MobileNavMenu from './MobileNavBar';

function NavBar(){
    return(
        <nav className='flex flex-row justify-between px-10 py-6 fixed w-full bg-white shadow-navBarShadow'>
            <h3 className='text-lg font-black'>Ajay Sharma</h3>
            <MobileNavMenu/>
            <ul className='lg:flex hidden flex-row gap-3 right-0'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
