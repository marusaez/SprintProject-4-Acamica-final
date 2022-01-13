import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { firestore, storage, auth, loginGoogle, logout } from "../firebase";

const SubmitTweet = () => {
  const { user, setUser } = useAppContext();
  const [tweet, setTweet] = useState({
      tweet: "",
      autor: "",
      uid: "",
      mail: "",
      likes: 0,
    });
    
    // console.log(user)

  const createTweet = (e) => {
    // e.preventDefault();
    //verificar si existe usuario
    let newTweet = {
      tweet: e.target.value,
      uid: user.uid,
      email: user.email,
      autor: user.displayName,
    };
    setTweet(newTweet);
  };

  const uploadTweet = (e) => {
    e.preventDefault();
    // enviamos el tweet a la colección
    firestore.collection("tweets").add(tweet);
};



  return (

        <form className="SubmitTweet" onSubmit={uploadTweet}>
        {/* <form className="SubmitTweet" onSubmit={createTweet}> */}
        <textarea
            onChange={createTweet}
            type="text"
            name="tweet"
            defaultValue={tweet.tweet}
            placeholder="Escribe tu tweet..."
        />
        <hr />
        <input type="submit" value="Send" />
        <hr />
        {/* <Link to="/">Volver al Home</Link> */}
        {/* <button onClick={logout}>Logout</button> */}
        </form>
  );
};

export default SubmitTweet;
