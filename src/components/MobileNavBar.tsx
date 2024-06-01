import { useState } from "react";

function MobileNavMenu(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="lg:hidden cursor-pointer absolute right-10">
            <h3 className="font-medium" onClick={()=>{setIsOpen(!isOpen)}}>{isOpen ? 'Close' : 'Menu'}</h3>
            {isOpen && <ul className='flex flex-col items-end gap-3'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul> 
            }
        </div>
    )
}

export default MobileNavMenu;
