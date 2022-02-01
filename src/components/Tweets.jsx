import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { firestore, storage, auth, loginGoogle, logout } from "../firebase";
import avatarPlaceholder from "../images/avatarPlaceholder.jpg";
// import like from "../images/like.png";
import { Link } from "react-router-dom";

const Tweets = () => {
  const {
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
  } = useAppContext();

  //     const deleteTweet = (id) => {
  //     firestore
  //       .collection("tweets")
  //       .doc(id)
  //       .delete()
  //     //   .then(() => {
  //         //   getAllTweets();
  //     //   })
  //       .catch((err) => {
  //         console.error(err.message);
  //       });
  //   };

  //   //// LIKES
  //   const likeTweet = (tweet, user) => {
  //     // console.log("likes", tweet)
  //     let addLikedBy = [...tweet.likedBy, user.uid];

  //     firestore
  //       .doc(`tweets/${tweet.id}`)
  //       .update({ likedBy: addLikedBy })
  //     //   .then(() => {
  //         // getAllTweets();
  //     //   })
  //       .catch((err) => {
  //         console.error(err.message);
  //       });
  //   };

  //   const dislikeTweet = (tweet, user) => {
  //     const updatedLikedBy = tweet.likedBy.filter((userUid) => user.uid !== userUid);

  //     // actualizamos el tweet en firebase
  //     firestore.doc(`tweets/${tweet.id}`).update({ likedBy: updatedLikedBy });
  // };

  // const showLike = (tweet, user) => {
  //     if (tweet.likedBy && user) {
  //         const liked = tweet.likedBy.findIndex((userLike) => user.uid === userLike);

  //         // la persona no le ha dado like
  //         if (liked < 0) {
  //             return (
  //                 <>
  //                     <span
  //                         onClick={() => likeTweet(tweet, user)}
  //                         className="likes"
  //                     >
  //                         {/* <span>X</span> */}
  //                         <img height="12px" src={dislike} alt="" />
  //                         {/* <img height="12px" src="dislike.png" alt="" /> */}
  //                         <span>{tweet.likedBy.length}</span>
  //                     </span>
  //                 </>
  //             );
  //         } else {
  //             // si la persona ya le dio like
  //             return (
  //                 <>
  //                     <span
  //                         onClick={() => dislikeTweet(tweet, user)}
  //                         className="likes"
  //                     >
  //                         {/* <img height="12px" src={corazon} alt="" /> */}
  //                         <img height="12px" src={like} alt="" />
  //                         <span>{tweet.likedBy.length}</span>
  //                     </span>
  //                 </>
  //             );
  //         }
  //     }
  //     // else {
  //     //     return (
  //     //         <>
  //     //             <span
  //     //                 onClick={() => likeTweet(id, likes, user.uid, tweet.likedBy)}
  //     //                 className="likes"
  //     //             >
  //     //                 <img height="13px" src={corazon} alt="" />
  //     //                 <span>{likes ? likes : 0}</span>
  //     //             </span>
  //     //         </>
  //     //     );
  //     // }
  // };

  //   useEffect(() => {
  //     // getAllTweets()
  //     ///// MOSTRAR TWEETS
  //     const desuscribir = firestore
  //       .collection("tweets")
  //       .onSnapshot((snapshot) => {
  //         const tweets = snapshot.docs.map((doc) => {
  //           // return {
  //           //   message: doc.data().message,
  //           //   // uid: doc.data().user.uid,
  //           //   user: doc.data().user,
  //           //   likes: doc.data().likes,
  //           //   image: doc.data().image || false,
  //           //   id: doc.id,
  //           // };
  //           return {
  //             tweet: doc.data().tweet,
  //             uid: doc.data().uid,
  //             autor: doc.data().autor,
  //             email: doc.data().email,
  //             likes: doc.data().likes || 0,
  //             id: doc.id,
  //             likedBy: doc.data().likedBy
  //           };
  //         });
  //         setTweets(tweets);
  //       });
  //       return () => desuscribir();
  //     }, []);

  //     console.log(user)

  //   const handleProfileRoute = () => {
  //     tweets.map((tweet, i) => {
  //         if (tweet.uid === user.uid) {
  //             setProfileRoute(user.uid)
  //         } else {
  //             setProfileRoute(tweet.uid)
  //     }
  //     })
  //     }

  const handleProfileRoute = (uid) => {
    setUid(uid);
  };

  return (
    <div className="Tweets">
      {tweets.map((tweet, i) => {
        return (
          <div className="Tweet" id={tweet.id} key={i}>
            <div className="TweetOne">
              <Link
                to="/UserProfile"
                onClick={() => handleProfileRoute(tweet.uid)}
              >
                {/* /////// FOTO USUARIO //////// */}
                <img
                  className="profilePicTweet"
                  src={tweet.photo}
                  alt="profile picture"
                />
              </Link>
            </div>
            <div className="TweetTwo">
              <div className="NameTrash">
                {/* /////// NOMBRE USUARIO //////// */}
                <Link
                  to="/UserProfile"
                  onClick={() => handleProfileRoute(tweet.uid)}
                >
                  <p>{tweet.autor}</p>
                </Link>
                {/* /////////// ELIMINA TWEET //////////// */}
                <p>
                  {user.uid === tweet.uid && (
                    <i
                      class="far fa-trash-alt"
                      onClick={() => deleteTweet(tweet.id)}
                    ></i>
                    // <button onClick={() => deleteTweet(tweet.id)}>
                    //   Eliminar tweet
                    // </button>
                  )}
                </p>
              </div>
              <div className="MessageLike">
                {/* ///// MENSAJE TWEET /////// */}
                <p>{tweet.tweet}</p>

                {/* ////// LIKES///////// */}
                <button>{showLike(tweet, user)}</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tweets;
