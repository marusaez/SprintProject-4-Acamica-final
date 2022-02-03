import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatarPlaceholder from "../images/avatarPlaceholder.jpg";
import { useAppContext } from "../context/AppContext";
import { auth } from "../firebase";
import postsBttn from "../images/posts.svg";
import favoritesBttn from "../images/favorites.svg";

const ProfileInfo = () => {
  const {
    setUser,
    user,
    tweet,
    uid,
    posts,
    setPosts,
    favorites,
    setFavorites,
  } = useAppContext();

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

  // const postsFavs = (posts) => {
  //   if (!posts) {
  //     return (
  //       <>
  //         <img src={postsON} alt="shows posts" onClick={postsBtnHandler} />
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <img
  //           src={favoritesON}
  //           alt="shows favorites"
  //           onClick={favsBtnHandler}
  //         />
  //       </>
  //     );
  //   }
  // };
console.log(posts)
  return (
    <div className="ProfileInfo">
      {uid === user.uid ? (
        <img src={user.photoURL} alt="Foto de perfil" className="pictureInfo" />
      ) : (
        <img
          src={avatarPlaceholder}
          alt="Foto de perfil"
          className="pictureInfo"
        />
      )}
      <h2>{user.displayName}</h2>

      <div className="ProfileInfoBttns">
        {/* <button>{postsFavs(posts)}</button> */}
        {!posts ? (
          <button onClick={postsBtnHandler}>
            {/* posts */}
            <img src={postsBttn} alt="shows posts" width="300px" />
          </button>
        ) : (
          <button onClick={favsBtnHandler}>
            <img
              src={favoritesBttn}
              alt="shows favorites"
              width="300px"
            />
          </button>
        )}
        {/* {posts ? (
          <button onClick={postsBtnHandler}>Posts</button>
        ) : (
          <button onClick={favsBtnHandler}>Favorites</button>
        )} */}
        {/* <button onClick={postsBtnHandler}>Posts</button>
        <button onClick={favsBtnHandler}>Favorites</button> */}
      </div>
    </div>
  );
};

export default ProfileInfo;
