import React from "react";
import SubmitTweet from "../components/SubmitTweet";
import Tweets from "../components/Tweets";
import TimelineHeader from "../components/TimelineHeader";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Timeline = () => {
  const { setUser, user } = useAppContext();

  //   const logout = () => {
  //     auth.signOut();
  //     setUser(null);
  //   };

  return (
    <div>
        {!user?.displayName ? (
          <Navigate to="/" />
        ) : (
          <div>
            <TimelineHeader />
            <div className="Timeline">
            <SubmitTweet  />
            </div>
            <Tweets />
          </div>
        )}
    </div>
  );
};

export default Timeline;
