import logoSrc from '../assets/png/ajay sharma logo.png';
import { useState } from 'react';
import menuIcon from '../assets/png/menu.png';
import closeIcon from '../assets/png/close.png';

const navBarContents = ['Home', 'About', 'Projects', 'Contact'];

function NavBar(){
    return(
        <nav className='flex flex-row justify-between items-center sm:px-10 sm:py-6 px-2 py-2 fixed w-full bg-white shadow-navBarShadow h-16 sm:h-20'>
            <img src={logoSrc} alt="Ajay Sharma"  className='h-10'/>
            <MobileNavMenu/>
            <ul className='lg:flex hidden flex-row gap-3 right-0'>
                {navBarContents.map(item=>(
                    <li key={item} className='hover:font-bold'><a href={`#${item.toLowerCase()}`}>{item}</a></li>
                ))}
            </ul>
        </nav>
    )
}

function MobileNavMenu(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="lg:hidden cursor-pointer">
            <img className='h-8' src={isOpen ? closeIcon : menuIcon} alt={isOpen ? "Close" : "Menu"} onClick={()=>setIsOpen(!isOpen)} />
            {isOpen && <ul className='flex flex-col items-center gap-3 absolute right-0 border w-1/3 bg-white rounded-md py-2'>
                {navBarContents.map(item=>(
                    <li key={item}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
                ))}
            </ul> 
            }
        </div>
    )
}

export default NavBar;
