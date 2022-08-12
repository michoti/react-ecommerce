import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
   const [auth, setAuth] = useState({});

   return (
      <AppContext.Provider value={{auth, setAuth}}>
        {children}
      </AppContext.Provider>
   )
}

export const useAuth = () => useContext(AppContext);

export default AppProvider;