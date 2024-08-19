import { createPortal } from "react-dom";
import useWindowManager from "../utility/hooks/useWindowManager";

function BottomBarIcon({logoPath, associatedComponent}: {logoPath: string, associatedComponent: React.JSX.Element}) {
    const {spawnWindow, destroyWindow} = useWindowManager();
    
    const spawnWindowFunc = ()=>{
        spawnWindow(associatedComponent)
    }

    const destroyWindowFunc = ()=>{
        destroyWindow(associatedComponent)
    }

    const TitleBarFloatingWindow = ()=>{
        const titleBarContainer = document.getElementById('floating-window-titlebar');
        if(!titleBarContainer) return null;
        return createPortal(
            <div>
                <p className="text-white">hallo</p>
            </div>, titleBarContainer
        )
    }

    return(
        <>
        <TitleBarFloatingWindow/>
        <div onClick={spawnWindowFunc} onDoubleClick={destroyWindowFunc} className='bg-cover rounded-lg aspect-square h-8 cursor-pointer' style={{backgroundImage: `url(${logoPath})`}}></div>
        </>
    )
}

export default BottomBarIcon;
