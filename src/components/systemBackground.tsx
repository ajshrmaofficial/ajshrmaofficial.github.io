import backgroundImage from '../assets/mustang.jpg'

function SystemBackground(){    
    return(
        <div className='h-screen bg-cover' style={{backgroundImage: `url(${backgroundImage})`}}/>       
    )
}

export default SystemBackground;
