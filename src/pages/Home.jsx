import React, { useEffect } from "react";
import GoogleLogin from "../components/GoogleLogin";
import Timeline from "../pages/Timeline";
import { useAppContext } from "../context/AppContext";
import { auth } from "../firebase";
import {Routes, Route, Navigate} from "react-router-dom"


const Home = () => {
  const { user, setUser } = useAppContext();

  return (
    <div className="Home">
      {/* <div>{user ? ColorSelect : <GoogleLogin/>}</div> */}
      {/* <div>{user?.displayName ? <Timeline /> : <GoogleLogin />}</div> */}
      <div>{user?.displayName ? <Navigate to="/Timeline" /> : <GoogleLogin />}</div>
      {/* <div>{user ? <Link to="/Timeline"></Link> : <GoogleLogin/>}</div> */}

      {/* <GoogleLogin/> */}
    </div>
  );
};

export default Home;
