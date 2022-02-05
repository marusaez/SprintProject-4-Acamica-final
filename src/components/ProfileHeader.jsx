import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { auth } from "../firebase";
import logoutBttn from "../images/logout.svg";
import DevsUnited from "../images/Devs_United.svg";
import smallLogo from "../images/logo small.svg";
import back from "../images/back.svg";

const ProfileHeader = () => {
  const { setUser } = useAppContext();

  const logout = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <header className="TimelineHeader">
      <Link to="/Timeline" className="backBttn">
        <img src={back} alt="back" />
        <span> TIMELINE</span>
      </Link>

      <img src={smallLogo} alt="Devs United logo" className="logoHeader" />
      <img src={DevsUnited} alt="Devs United text" className="logoHeader" />
      <img src={logoutBttn} alt="logout" className="logout" onClick={logout} />
    </header>
  );
};

export default ProfileHeader;
