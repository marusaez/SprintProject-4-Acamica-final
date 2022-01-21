import React from "react";
import SubmitTweet from "../components/SubmitTweet";
import Tweets from "../components/Tweets";
import TimelineHeader from "../components/TimelineHeader";

const Timeline = () => {
//   const { setUser, user } = useAppContext();

//   const logout = () => {
//     auth.signOut();
//     setUser(null);
//   };

  return (
    <div>
        <TimelineHeader/>
        <hr />
      {/* <div> */}
        <SubmitTweet />
      {/* </div> */}
      {/* <div> */}
        <Tweets />
      {/* </div> */}
    </div>
  );
};

export default Timeline;
