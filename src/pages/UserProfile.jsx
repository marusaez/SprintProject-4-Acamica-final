import React, { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import UserFavs from "../components/UserFavs";
import UserPosts from "../components/UserPosts";

const UserProfile = () => {
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

  console.log(posts);
  console.log(favorites);
  return (
    <div>
      <ProfileHeader />
      <hr />
      <div>
        <button onClick={postsBtnHandler}>Posts</button>
        <button onClick={favsBtnHandler}>Favorites</button>
      </div>
      {posts ? <UserPosts /> : <UserFavs />}
    </div>
  );
};

export default UserProfile;
