import React from 'react';
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Tweet = ({tweet, i}) => {
    const {
        user,
        deleteTweet,
        showLike,
        setUid,
        setUidUsername,
        setUidProfilePic,
      } = useAppContext();

    const handleProfileRoute = (uid, username, profilePic) => {
        setUid(uid);
        setUidUsername(username);
        setUidProfilePic(profilePic);
      };

  return (
      <div className="Tweet" id={tweet.id} key={i}>
              <div className="TweetOne">
                <Link
                  to="/UserProfile"
                  onClick={() =>
                    handleProfileRoute(tweet.uid, tweet.autor, tweet.photo)
                  }
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
)};

export default Tweet;
