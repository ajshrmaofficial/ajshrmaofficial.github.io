import React, { useContext } from "react";
import { WindowMangerContext } from "../context/windowManagerContext";

function useWindowManager(){
    const {components, setComponents} = useContext(WindowMangerContext);

    const spawnWindow = (window: React.JSX.Element)=> {
        if(window){
            setComponents(prevComponents => {
                if(!prevComponents.includes(window)){
                    return [...prevComponents, window];
                }
                return prevComponents;
            });
        }
    }

    const maximizeWindow = (window: React.JSX.Element)=>{
        if(window)
        return window;
    }

    const destroyWindow = (window: React.ReactNode)=>{
        if(window){
            setComponents(prevComponents => prevComponents.filter(item => item !== window));
        }
    }

    return {spawnWindow, maximizeWindow, destroyWindow, components};
}

export default useWindowManager;
