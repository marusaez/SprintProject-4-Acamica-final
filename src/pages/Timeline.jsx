import React from "react";
import { useAppContext } from "../context/AppContext";
import SubmitTweet from "../components/SubmitTweet";
import Tweets from "../components/Tweets";

const Timeline = () => {
  return (
    <div>
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
