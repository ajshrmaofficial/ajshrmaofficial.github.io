import useWindowManager from "../utility/hooks/useWindowManager";
import backgroundImage from '../assets/mustang.jpg'

function Desktop(){
    const {components} = useWindowManager();
    return(<>
    <div className='h-screen w-screen bg-cover' style={{backgroundImage: `url(${backgroundImage})`}}>
        {components}
    </div>
    </>
    )
}

export default Desktop;
