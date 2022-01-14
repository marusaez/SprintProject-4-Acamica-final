import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { firestore, storage, auth, loginGoogle, logout } from "../firebase";
import avatarPlaceholder from "../images/avatarPlaceholder.jpg"

const Tweets = () => {
    const { user, tweet, setTweet, tweets, setTweets } = useAppContext();


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
  const likeTweet = (tweet) => {
    // console.log("likes", tweet)
    let newLikedBy = [...likedBy, uid];

    firestore
      .doc(`tweets/${tweet.id}`)
      .update({ likedBy: newLikedBy })
    //   .then(() => {
        // getAllTweets();
    //   })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const dislikeTweet = (id, uid, likedBy) => {
    const updatedLikedBy = likedBy.filter((userUid) => uid !== userUid);

    // actualizamos el tweet en firebase
    firestore.doc(`tweets/${id}`).update({ likedBy: updatedLikedBy });
};


  useEffect(() => {
    // getAllTweets()
    ///// MOSTRAR TWEETS
    const desuscribir = firestore
      .collection("tweets")
      .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          // return {
          //   message: doc.data().message,
          //   // uid: doc.data().user.uid,
          //   user: doc.data().user,
          //   likes: doc.data().likes,
          //   image: doc.data().image || false,
          //   id: doc.id,
          // };
          return {
            tweet: doc.data().tweet,
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

    // console.log(user)
    return (
        <div>
            <div>
        {user ? (
          <div>{user.photoURL ? <img src={user.photoURL} alt="Foto de perfil" /> : <img src={avatarPlaceholder} alt="Foto de perfil" />
              }
            {/* <img src={user.photoURL} alt="Foto de perfil" /> */}
            <h4>{user.displayName}</h4>
          </div>
        ) : (
          <div>
            <p>Inicia sesión con tu cuenta de Google para acceder a los tweets</p>
          </div>
        )}
      </div>
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
              <p>Usuario: {tweet.autor}</p>
              {/* {edit ? <Tweet tweet={tweet} /> : <p>{tweet.message}</p>} */}
              <p>{tweet.tweet}</p>
              {/* <p>{body.tweet}</p> */}
              <p>Likes: {tweet.likes}</p>
              {/* <button onClick={() => setEdit(!edit)}>Actualizar tweet</button> */}
              {user.uid === tweet.uid && <button onClick={() => deleteTweet(tweet.id)}>
                Eliminar tweet
              </button>}
             
              {/* <button onClick={() => deleteTweet(tweet.id)}>
                Eliminar tweet
              </button> */}
              
              <button onClick={() => likeTweet(tweet)}>Me gusta</button>
              <hr />
            </div>
          );
        })}
      </div>
        </div>
    )
}

export default Tweets
