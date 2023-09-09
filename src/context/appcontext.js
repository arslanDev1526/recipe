import { createContext, useContext, useState } from "react";


const AppContext = createContext();

export function AppProvider({children}) { 
    const [handleSubmit, setHandleSubmit] = useState(() =>{});
    return ( 

        <AppContext.Provider value={{handleSubmit, setHandleSubmit}}> 
        
        {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){ 
    return useContext(AppContext)
}
