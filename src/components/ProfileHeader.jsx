import React from "react";
import { Link } from "react-router-dom";
import avatarPlaceholder from "../images/avatarPlaceholder.jpg";
import { useAppContext } from "../context/AppContext";
import { auth } from "../firebase";

const ProfileHeader = () => {
  const { setUser, user } = useAppContext();

  const logout = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <div>
      <Link to="/Timeline">Timeline</Link>
      <button onClick={logout}>Logout</button>
      <Link to="/UserTweets">
        {user.photoURL ? (
          <img src={user.photoURL} alt="Foto de perfil" />
        ) : (
          <img src={avatarPlaceholder} alt="Foto de perfil" />
        )}
      </Link>
    </div>
  );
};

export default ProfileHeader;
