import React from "react";
import { useAppContext } from "../context/AppContext";
import Tweet from "./Tweet";

const UserFavs = () => {
  const { tweets, uid } = useAppContext();

  return (
    <div className="Tweets">
      {tweets.map((tweet, i) => {
        const userFavorites = tweet.likedBy.findIndex(
          (favorite) => uid === favorite
        );
        if (userFavorites >= 0) {
          return <Tweet tweet={tweet} i={i} />;
        }
      })}
    </div>
  );
};
export default UserFavs;
