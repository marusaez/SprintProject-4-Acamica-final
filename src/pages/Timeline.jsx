import React from "react";
import { useAppContext } from "../context/AppContext";
import SubmitTweet from "../components/SubmitTweet";
import Tweets from "../components/Tweets";
import { auth } from "../firebase";

const Timeline = () => {
  const { setUser, user } = useAppContext();

  const logout = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <div>
      {/* <button onClick={() => auth.signOut(setUser(null))}>Logout</button> */}
      {/* <button onClick={() => auth.signOut(setUser(null))}>Logout</button> */}
      <button onClick={logout}>Logout</button>
      <div>
        <SubmitTweet />
      </div>
      <div>
        <Tweets />
      </div>
    </div>
  );
};

export default Timeline;
