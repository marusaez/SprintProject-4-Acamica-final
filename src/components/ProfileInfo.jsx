import React from "react";
import { useAppContext } from "../context/AppContext";
import { auth } from "../firebase";
import postsBttn from "../images/posts.svg";
import favoritesBttn from "../images/favorites.svg";

const ProfileInfo = () => {
  const { setUser, posts, setPosts, setFavorites, uidUsername, uidProfilePic } =
    useAppContext();

  const logout = () => {
    auth.signOut();
    setUser(null);
  };

  const postsBtnHandler = () => {
    setPosts(true);
    setFavorites(false);
  };

  const favsBtnHandler = () => {
    setPosts(false);
    setFavorites(true);
  };

  return (
    <div className="ProfileInfo">
      <img src={uidProfilePic} alt="Profile picture" className="pictureInfo" />

      <h2>{uidUsername}</h2>

      <div className="ProfileInfoBttns">
        {!posts ? (
          <button onClick={postsBtnHandler}>
            <img src={favoritesBttn} alt="shows posts" width="300px" />
          </button>
        ) : (
          <button onClick={favsBtnHandler}>
            <img src={postsBttn} alt="shows favorites" width="300px" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
