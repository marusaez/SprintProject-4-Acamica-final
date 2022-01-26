import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const PublicProfile = () => {
  const { setUser, user, tweet } = useAppContext();

  return (
    <div>
      {!user?.displayName ? (
        <Navigate to="/" />
      ) : (
        <div>
          <ProfileHeader />
          <h2>en construcción...</h2>
        </div>
      )}
    </div>
  );
};

export default PublicProfile;
