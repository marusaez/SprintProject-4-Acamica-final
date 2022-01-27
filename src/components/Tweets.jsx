import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { firestore, storage, auth, loginGoogle, logout } from "../firebase";
import avatarPlaceholder from "../images/avatarPlaceholder.jpg";
import like from "../images/like.png";
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
  console.log(profileRoute);
  return (
    <div>
      {tweets.map((tweet, i) => {
        //   console.log(tweet)
        return (
          <div id={tweet.id} key={i}>
            {/* {tweet.image && (
                <img
                  width="100"
                  height="100"
                  src={tweet.image}
                  alt="profile picture"
                />
              )} */}
            {tweet.uid === user.uid ? (
              <Link to="/UserProfile" onClick={console.log(user.uid)}>
                {/* {" "} */}
                <p>Usuario: {tweet.autor}</p>
              </Link>
            ) : (
              <Link to="/PublicProfile" onClick={console.log(tweet.uid)}>
                {/* {" "} */}
                <p>Usuario: {tweet.autor}</p>
              </Link>
            )}
            {/* <Link to="/UserProfile"> */}
            {/* <p>Usuario: {tweet.autor}</p>
              </Link> */}

            {/* {edit ? <Tweet tweet={tweet} /> : <p>{tweet.message}</p>} */}
            <p>{tweet.tweet}</p>
            {/* <p>{body.tweet}</p> */}
            {/* <p>Likes: {tweet.likes}</p> */}
            {/* ////// LIKES///////// */}
            {/* <p>{showLike(tweet, user)}</p> */}
            {/* <button onClick={() => setEdit(!edit)}>Actualizar tweet</button> */}
            {user.uid === tweet.uid && (
              <button onClick={() => deleteTweet(tweet.id)}>
                Eliminar tweet
              </button>
            )}

            {/* <button onClick={() => deleteTweet(tweet.id)}>
                Eliminar tweet
              </button> */}

            {/* <button onClick={() => likeTweet(tweet)}>Me gusta</button> */}
            {/* ////// LIKES///////// */}
            <button>{showLike(tweet, user)}</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Tweets;
