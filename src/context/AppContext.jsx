import React, { createContext, useContext, useState, useEffect } from "react";
import { firestore, auth } from "../firebase";
import like from "../images/like.svg";
import dislike from "../images/dislike.svg";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tweet, setTweet] = useState({
    tweet: "",
    uid: "",
    autor: "",
    email: "",
    likes: 0,
    id: "",
  });
  const [tweets, setTweets] = useState([]);
  const [profileRoute, setProfileRoute] = useState("");
  const [uid, setUid] = useState("");
  const [posts, setPosts] = useState(true);
  const [favorites, setFavorites] = useState(false);
  const [uidUsername, setUidUsername] = useState("");
  const [uidProfilePic, setUidProfilePic] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      const { displayName, email, photoURL, uid } = user;
      setUser({ displayName, email, photoURL, uid });
    });
  }, []);

  const deleteTweet = (id) => {
    if (window.confirm("Do you really want to delete this message?")) {
      firestore
        .collection("tweets")
        .doc(id)
        .delete()
        .catch((err) => {
          console.error(err.message);
        });
    }
  };

  //// LIKES /////
  const likeTweet = (tweet, user) => {
    let addLikedBy = [...tweet.likedBy, user.uid];

    firestore
      .doc(`tweets/${tweet.id}`)
      .update({ likedBy: addLikedBy })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const dislikeTweet = (tweet, user) => {
    const updatedLikedBy = tweet.likedBy.filter(
      (userUid) => user.uid !== userUid
    );

    //// ACTUALIZAR TWEET EN FIREBASE //////
    firestore.doc(`tweets/${tweet.id}`).update({ likedBy: updatedLikedBy });
  };

  const showLike = (tweet, user) => {
    if (tweet.likedBy && user) {
      const liked = tweet.likedBy.findIndex(
        (userLike) => user.uid === userLike
      );

      //// NO HA DADO LIKE ////
      if (liked < 0) {
        return (
          <>
            <span onClick={() => likeTweet(tweet, user)} className="dislikes">
              <img height="12px" src={dislike} alt="" />
              <p> {tweet.likedBy.length}</p>
            </span>
          </>
        );
      } else {
        //// YA HA DADO LIKE ////
        return (
          <>
            <span onClick={() => dislikeTweet(tweet, user)} className="likes">
              <img height="12px" src={like} alt="" />
              <p> {tweet.likedBy.length}</p>
            </span>
          </>
        );
      }
    }
  };

  useEffect(() => {
    ///// MOSTRAR TWEETS ////////
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
            likedBy: doc.data().likedBy,
          };
        });
        setTweets(tweets);
      });
    return () => desuscribir();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        tweet,
        setTweet,
        tweets,
        setTweets,
        deleteTweet,
        showLike,
        profileRoute,
        setProfileRoute,
        uid,
        setUid,
        posts,
        setPosts,
        favorites,
        setFavorites,
        uidUsername,
        setUidUsername,
        uidProfilePic,
        setUidProfilePic,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
