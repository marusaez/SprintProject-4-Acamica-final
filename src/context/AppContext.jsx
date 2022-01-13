import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        const {displayName, email, photoURL, uid} = user
        setUser({displayName, email, photoURL, uid});
        console.log(user)
      });
      // return console.log(user)
  }, []);
  
  return (
    <AppContext.Provider value={{user, setUser}}>
      {children}
    </AppContext.Provider>
    
  );
}

export default AppProvider;
