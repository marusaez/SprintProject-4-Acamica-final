import React, { createContext, useContext, useState, useEffect } from "react";
// import { auth } from "../firebase";
import { firestore, storage, auth, loginGoogle, logout } from "../firebase";
import like from "../images/like.svg"
import dislike from "../images/dislike.svg"


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
  const [profileRoute, setProfileRoute] = useState("")
  const [uid, setUid] = useState("")



  useEffect(() => {

    auth.onAuthStateChanged((user) => {
      console.log("este es el useEffect")
        const {displayName, email, photoURL, uid} = user
        setUser({displayName, email, photoURL, uid});
        // console.log([{displayName, email, photoURL, uid}])
      });
      // return console.log(user)
  }, []);
  
  const deleteTweet = (id) => {
    firestore
      .collection("tweets")
      .doc(id)
      .delete()
    //   .then(() => {
        //   getAllTweets();
    //   })
      .catch((err) => {
        console.error(err.message);
      });
  };

  //// LIKES
  const likeTweet = (tweet, user) => {
    // console.log("likes", tweet)
    let addLikedBy = [...tweet.likedBy, user.uid];

    firestore
      .doc(`tweets/${tweet.id}`)
      .update({ likedBy: addLikedBy })
    //   .then(() => {
        // getAllTweets();
    //   })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const dislikeTweet = (tweet, user) => {
    const updatedLikedBy = tweet.likedBy.filter((userUid) => user.uid !== userUid);

    // actualizamos el tweet en firebase
    firestore.doc(`tweets/${tweet.id}`).update({ likedBy: updatedLikedBy });
};

const showLike = (tweet, user) => {
    if (tweet.likedBy && user) {
        const liked = tweet.likedBy.findIndex((userLike) => user.uid === userLike);

        // la persona no le ha dado like
        if (liked < 0) {
            return (
                <>
                    <span
                        onClick={() => likeTweet(tweet, user)}
                        className="dislikes"
                    >
                        {/* <span>X</span> */}
                        <img height="12px" src={dislike} alt="" />
                        {/* <img height="12px" src="dislike.png" alt="" /> */}
                        <p> {tweet.likedBy.length}</p>
                    </span>
                </>
            );
        } else {
            // si la persona ya le dio like
            return (
                <>
                    <span
                        onClick={() => dislikeTweet(tweet, user)}
                        className="likes"
                    >
                        {/* <img height="12px" src={corazon} alt="" /> */}
                        <img height="12px" src={like} alt="" />
                        <p> {tweet.likedBy.length}</p>
                    </span>
                </>
            );
        }
    } 
    // else {
    //     return (
    //         <>
    //             <span
    //                 onClick={() => likeTweet(id, likes, user.uid, tweet.likedBy)}
    //                 className="likes"
    //             >
    //                 <img height="13px" src={corazon} alt="" />
    //                 <span>{likes ? likes : 0}</span>
    //             </span>
    //         </>
    //     );
    // }
};

  useEffect(() => {
    // getAllTweets()
    ///// MOSTRAR TWEETS
    const desuscribir = firestore
      .collection("tweets")
      .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            tweet: doc.data().tweet,
            photo: doc.data().photo,
            uid: doc.data().uid,
            autor: doc.data().autor,
            email: doc.data().email,
            likes: doc.data().likes || 0,
            id: doc.id,
            likedBy: doc.data().likedBy
          };
        });
        setTweets(tweets);
      });
      return () => desuscribir();
    }, []);

    // console.log(tweets)
  return (
    <AppContext.Provider value={{user, setUser, tweet, setTweet, tweets, setTweets, deleteTweet, showLike, profileRoute, setProfileRoute, uid, setUid}}>
      {children}
    </AppContext.Provider>
    
  );
}

export default AppProvider;
