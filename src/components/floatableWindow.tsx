import React from "react";
import Draggable from "react-draggable";

function FloatableWindow({children, styleString}: {children: React.ReactNode, styleString: string}){
    const nodeRef = React.useRef(null);
    
    return(
        <Draggable bounds='parent' nodeRef={nodeRef}>
            <div ref={nodeRef} className={styleString}>
                <div id="floating-window-titlebar"></div>
                {children}
            </div> 
        </Draggable>
    )
}

export default FloatableWindow;
