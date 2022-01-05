import React, { createContext, useState, useEffect } from "react";
import { firestore, storage, auth, loginGoogle, logout } from "./firebase";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [body, setBody] = useState({
    tweet: "",
    autor: "",
    uid: "",
    mail: "",
    likes: 0,
  });


  return (
    <AppContext.Provider>
      {props.children}
    </AppContext.Provider>
    
  );
}
