import React from "react";
import { useAppContext } from "../context/AppContext";
import Tweet from "./Tweet";

const UserPosts = () => {
  const { tweets, uid } = useAppContext();

  return (
    <div className="Tweets">
      {tweets.map((tweet, i) => {
        if (uid === tweet.uid) {
          return <Tweet tweet={tweet} i={i} />;
        }
      })}
    </div>
  );
};
export default UserPosts;
