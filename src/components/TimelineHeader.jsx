import React from "react";
import { Link } from "react-router-dom";
import avatarPlaceholder from "../images/avatarPlaceholder.jpg"
import { useAppContext } from "../context/AppContext";
import { auth } from "../firebase";
import logoutBttn from "../images/logout.svg";
import DevsUnited from "../images/Devs_United.svg";
import smallLogo from "../images/logo small.svg";

const TimelineHeader = () => {
    const { setUser, user, tweet } = useAppContext();

    const logout = () => {
      auth.signOut();
      setUser(null);
    };

  return (
    <div className="TimelineHeader">
      <Link to="/UserProfile">
        {user.photoURL ? (
          <img src={user.photoURL} alt="Foto de perfil" className="logoHeader profilePic"/>
        ) : (
          <img src={avatarPlaceholder} alt="Foto de perfil" className="logoHeader profilePic" />
        )}
      </Link >
      <img src={smallLogo} alt="Devs United logo" className="logoHeader"/>
      <img src={DevsUnited} alt="Devs United text" className="logoHeader"/>
      <img src={logoutBttn} alt="logout" className="logout" onClick={logout}/>
      {/* <button onClick={logout}>Logout</button> */}
    </div>
  );
};

export default TimelineHeader;
