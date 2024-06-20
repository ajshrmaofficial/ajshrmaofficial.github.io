import React, { createContext, useState } from "react";

interface WindowMangerData{
    components: React.JSX.Element[];
    setComponents: React.Dispatch<React.SetStateAction<React.JSX.Element[]>>
  }
  
export const WindowMangerContext = createContext<WindowMangerData>({} as WindowMangerData);

export function WindowManagerProvider({children}: {children: React.ReactNode}): React.JSX.Element{
  const [components, setComponents] = useState<React.JSX.Element[]>([]);

    return(
        <WindowMangerContext.Provider value={{components, setComponents}}>
            {children}
        </WindowMangerContext.Provider>
    )
}