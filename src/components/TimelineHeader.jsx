import React from "react";
import { Link } from "react-router-dom";
import avatarPlaceholder from "../images/avatarPlaceholder.jpg";
import { useAppContext } from "../context/AppContext";
import { auth } from "../firebase";
import logoutBttn from "../images/logout.svg";
import DevsUnited from "../images/Devs_United.svg";
import smallLogo from "../images/logo small.svg";

const TimelineHeader = () => {
  const { setUser, tweet, user, setUid, setUidUsername, setUidProfilePic } =
    useAppContext();

  const logout = () => {
    auth.signOut();
    setUser(null);
  };

  const handleProfileRoute = (uid, username, profilePic) => {
    setUid(uid);
    setUidUsername(username);
    setUidProfilePic(profilePic);
  };

  return (
    <header className="TimelineHeader">
      <Link
        to="/UserProfile"
        onClick={() => handleProfileRoute(user.uid, user.displayName, user.photoURL)}
      >
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile picture"
            className="logoHeader profilePic"
          />
        ) : (
          <img
            src={avatarPlaceholder}
            alt="Profile picture"
            className="logoHeader profilePic"
          />
        )}
      </Link>
      <img src={smallLogo} alt="Devs United logo" className="logoHeader" />
      <img src={DevsUnited} alt="Devs United text" className="logoHeader" />
      <img src={logoutBttn} alt="logout" className="logout" onClick={logout} />
    </header>
  );
};

export default TimelineHeader;
