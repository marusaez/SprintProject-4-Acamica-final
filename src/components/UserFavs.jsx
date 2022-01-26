import React, {useEffect} from "react";
import { useAppContext } from "../context/AppContext";
import { firestore, storage, auth, loginGoogle, logout } from "../firebase";


const UserFavs = () => {
    const { user, setUser, tweet, setTweet, tweets, setTweets, deleteTweet, showLike } = useAppContext();

    return (
      <div>
        {tweets.map((tweet, i) => {
            const userFavorites = tweet.likedBy.findIndex((favorite) => user.uid === favorite);
            console.log(userFavorites)
            
           if (userFavorites >= 0) {
                
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
              {/* <p>Usuario: {user.uid === tweet.uid && tweet.autor}</p> */}
              <p>Usuario: {tweet.autor}</p>
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
          )};
        })}
      </div>
    );
  };
export default UserFavs;
