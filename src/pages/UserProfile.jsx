import React, { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import UserFavs from "../components/UserFavs";
import UserPosts from "../components/UserPosts";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";


const UserProfile = () => {
  const { setUser, user, tweet } = useAppContext();

  const [posts, setPosts] = useState(true);
  const [favorites, setFavorites] = useState(false);

  const postsBtnHandler = () => {
    setPosts(true);
    setFavorites(false);
  };

  const favsBtnHandler = () => {
    setPosts(false);
    setFavorites(true);
  };

  return (
      <div>
        {!user?.displayName ? (
          <Navigate to="/" />
        ) : (
          <div>
            <ProfileHeader />
            <hr />
            <div>
              <button onClick={postsBtnHandler}>Posts</button>
              <button onClick={favsBtnHandler}>Favorites</button>
            </div>
            {posts ? <UserPosts /> : <UserFavs />}
          </div>
        )}
      </div>
  );
};

export default UserProfile;
