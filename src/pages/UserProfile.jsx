import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import UserFavs from "../components/UserFavs";
import UserPosts from "../components/UserPosts";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import ProfileInfo from "../components/ProfileInfo";

const UserProfile = () => {
  const { setUser, user, tweet, posts } = useAppContext();

  return (
    <main>
      {!user?.displayName ? (
        <Navigate to="/" />
      ) : (
        <div>
          <ProfileHeader />
          <ProfileInfo />
          <div>{posts ? <UserPosts /> : <UserFavs />}</div>
        </div>
      )}
    </main>
  );
};

export default UserProfile;
