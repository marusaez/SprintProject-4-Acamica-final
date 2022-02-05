import React from "react";
import { useAppContext } from "../context/AppContext";
import Tweet from "./Tweet";

const Tweets = () => {
  const {
    tweets,
  } = useAppContext();


  return (
    <div className="Tweets">
      {tweets.map((tweet, i) => {
        return <Tweet tweet={tweet} i={i} />;
      })}
    </div>
  );
};

export default Tweets;
