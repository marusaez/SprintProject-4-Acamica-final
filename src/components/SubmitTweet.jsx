import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { firestore, storage, auth, loginGoogle, logout } from "../firebase";
import avatarPlaceholder from "../images/avatarPlaceholder.jpg"
import { Link } from "react-router-dom";


const SubmitTweet = () => {
  const { user, tweet, setTweet } = useAppContext();
  //   const [tweet, setTweet] = useState({
  //       tweet: "",
  //       autor: "",
  //       uid: "",
  //       mail: "",
  //       likes: 0,
  //     });

  // console.log(user)

  const createTweet = (e) => {
    // e.preventDefault();
    //verificar si existe usuario
    let newTweet = {
      tweet: e.target.value,
      photo: user.photoURL,
      uid: user.uid,
      email: user.email,
      autor: user.displayName,
      likedBy: [],
    };
    setTweet(newTweet);
  };

  const uploadTweet = (e) => {
    e.preventDefault();
    // enviamos el tweet a la colección
    firestore.collection("tweets").add(tweet);
    setTweet({ ...tweet, tweet: "" });
  };

  return (
    <div>
      {user ? (
        <div>
        <Link to="/UserProfile">
        {user.photoURL ? (
          <img src={user.photoURL} alt="Foto de perfil" />
        ) : (
          <img src={avatarPlaceholder} alt="Foto de perfil" />
        )}
      </Link >
          {/* <img src={user.photoURL} alt="Foto de perfil" /> */}
          {/* <h4>{user.displayName}</h4> */}
        </div>
      ) : (
        <div>
          <p>Inicia sesión con tu cuenta de Google para acceder a los tweets</p>
        </div>
      )}
      <form className="SubmitTweet" onSubmit={uploadTweet}>
        {/* <form className="SubmitTweet" onSubmit={createTweet}> */}
        <textarea
          onChange={createTweet}
          type="text"
          name="tweet"
          // defaultValue={tweet.tweet}
          value={tweet.tweet}
          placeholder="What's happening?"
        />
        <br />
        <input type="submit" value="Post" />
        <hr />
        {/* <Link to="/">Volver al Home</Link> */}
        {/* <button onClick={logout}>Logout</button> */}
      </form>
    </div>
  );
};

export default SubmitTweet;
