import useWindowManager from "../utility/hooks/useWindowManager";

function BottomBarIcon({logoPath, associatedComponent}: {logoPath: string, associatedComponent: React.JSX.Element}) {
    const {spawnWindow, destroyWindow} = useWindowManager();
    
    const spawnWindowFunc = ()=>{
        spawnWindow(associatedComponent)
    }

    const destroyWindowFunc = ()=>{
        destroyWindow(associatedComponent)
    }

    return(
        <div onClick={spawnWindowFunc} onDoubleClick={destroyWindowFunc} className='bg-cover rounded-lg aspect-square h-8 cursor-pointer' style={{backgroundImage: `url(${logoPath})`}}></div>
    )
}

export default BottomBarIcon;
