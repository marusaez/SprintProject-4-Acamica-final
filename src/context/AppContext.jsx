import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [tweet, setTweet] = useState({
    tweet: "",
    uid: "",
    autor: "",
    email: "",
    likes: 0,
    id: ""
  });
  const [tweets, setTweets] = useState([]);
  
  
  useEffect(() => {

    auth.onAuthStateChanged((user) => {
      console.log("este es el useEffect")
        const {displayName, email, photoURL, uid} = user
        setUser({displayName, email, photoURL, uid});
        console.log([{displayName, email, photoURL, uid}])
      });
      // return console.log(user)
  }, []);
  
  // useEffect(() => {
  //   // auth.onAuthStateChanged((user) => {
  //     console.log(auth.currentUser)
  //     if (!auth.currentUser) return;
  //     console.log(auth.currentUser)
  //       const {displayName, email, photoURL, uid} = user
  //       setUser({displayName, email, photoURL, uid});
  //       console.log([{displayName, email, photoURL, uid}])
  //     // });
  //     // return console.log(user)
  // }, [auth.currentUser]);

  return (
    <AppContext.Provider value={{user, setUser, tweet, setTweet, tweets, setTweets}}>
      {children}
    </AppContext.Provider>
    
  );
}

export default AppProvider;
