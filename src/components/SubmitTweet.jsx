import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { firestore } from "../firebase";
import avatarPlaceholder from "../images/avatarPlaceholder.jpg";
import { Link } from "react-router-dom";

const SubmitTweet = () => {
  const { user, tweet, setTweet,  setUid,
    setUidUsername,
    setUidProfilePic} = useAppContext();
  const [progress, setProgress] = useState(0);

  const tweetProgressHandler = () => {
    let tweetProgress = (tweet.tweet.length / 100) * 100;
    setProgress(tweetProgress);
  };

  const createTweet = (e) => {
    let newTweet = {
      tweet: e.target.value,
      photo: user.photoURL,
      uid: user.uid,
      email: user.email,
      autor: user.displayName,
      likedBy: [],
    };
    setTweet(newTweet);
    tweetProgressHandler();
  };

  const uploadTweet = (e) => {
    e.preventDefault();
    setProgress(0);
    // enviamos el tweet a la colección
    firestore.collection("tweets").add(tweet);
    setTweet({ ...tweet, tweet: "" });
  };

  const handleProfileRoute = (uid, username, profilePic) => {
    setUid(uid);
    setUidUsername(username);
    setUidProfilePic(profilePic);
  };

  return (
    <div className="SubmitTweet">
      <div>
        <Link to="/UserProfile"
        onClick={() =>
          handleProfileRoute(user.uid, user.displayName, user.photoURL)
        }>
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile picture"
              className="profilePicSub"
            />
          ) : (
            <img
              src={avatarPlaceholder}
              alt="Profile picture"
              className="profilePicSub"
            />
          )}
        </Link>
      </div>
      <form className="SubmitForm">
        <input
          className="SubmitTextarea"
          onChange={createTweet}
          type="text"
          name="tweet"
          value={tweet.tweet}
          placeholder="What's happening?"
          maxlength="200"
          autocomplete="off"
        />
        <div className="progress">
          {progress >= 0 && <progress max="200" value={progress} />}

          <div className="tweetLenght">
            <p className="lenghtCount">{tweet.tweet.length}</p>
            <p className="maxLenght">200 max.</p>
          </div>
        </div>
        <input
          type="button"
          value=""
          alt="post button"
          className="postOff"
          onClick={uploadTweet}
        />
      </form>
    </div>
  );
};

export default SubmitTweet;
