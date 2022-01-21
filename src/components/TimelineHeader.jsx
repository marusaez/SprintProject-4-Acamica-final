import React from "react";
import { Link } from "react-router-dom";
import avatarPlaceholder from "../images/avatarPlaceholder.jpg"
import { useAppContext } from "../context/AppContext";
import { auth } from "../firebase";

const TimelineHeader = () => {
    const { setUser, user } = useAppContext();

    const logout = () => {
      auth.signOut();
      setUser(null);
    };

  return (
    <div>
      <Link to="/UserProfile">
        {user.photoURL ? (
          <img src={user.photoURL} alt="Foto de perfil" />
        ) : (
          <img src={avatarPlaceholder} alt="Foto de perfil" />
        )}
      </Link >
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default TimelineHeader;
