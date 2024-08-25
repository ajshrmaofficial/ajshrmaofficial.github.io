import logoSrc from '../assets/ajay sharma logo.png';
import { useState } from 'react';

const navBarContents = ['Home', 'About', 'Projects', 'Contact'];

function NavBar(){
    return(
        <nav className='flex flex-row justify-between items-center sm:px-10 sm:py-6 px-2 py-2 fixed w-full bg-white shadow-navBarShadow h-16 sm:h-20'>
            {/* <h3 className='text-lg font-black'>Ajay Sharma</h3> */}
            <img src={logoSrc} alt="Ajay Sharma"  className='h-10'/>
            <MobileNavMenu/>
            <ul className='lg:flex hidden flex-row gap-3 right-0'>
                {navBarContents.map(item=>(
                    <li className='hover:font-bold'><a href={`#${item.toLowerCase()}`}>{item}</a></li>
                ))}
            </ul>
        </nav>
    )
}

function MobileNavMenu(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="lg:hidden cursor-pointer absolute right-10">
            <h3 className="font-medium" onClick={()=>{setIsOpen(!isOpen)}}>{isOpen ? 'Close' : 'Menu'}</h3>
            {isOpen && <ul className='flex flex-col items-end gap-3'>
                {navBarContents.map(item=>(
                    <li><a href={`#${item.toLowerCase()}`}>{item}</a></li>
                ))}
            </ul> 
            }
        </div>
    )
}

export default NavBar;
