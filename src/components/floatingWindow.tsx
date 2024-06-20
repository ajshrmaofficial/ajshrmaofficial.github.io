import Draggable from "react-draggable";
import { ReactNode } from "react";

function FloatingWindow({children}: {children: ReactNode}){

    return(
        <Draggable bounds='parent'>
            {children}
        </Draggable>
    )
}

export default FloatingWindow;