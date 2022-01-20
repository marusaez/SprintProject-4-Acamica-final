import React, { useEffect } from "react";
import GoogleLogin from "../components/GoogleLogin";
import Timeline from "../pages/Timeline";
import { useAppContext } from "../context/AppContext";
import { auth } from "../firebase";


const Home = () => {
  const { user, setUser } = useAppContext();

  return (
    <div>
      {/* <div>{user ? ColorSelect : <GoogleLogin/>}</div> */}
      <div>{user?.displayName ? <Timeline /> : <GoogleLogin />}</div>
      {/* <div>{user ? <Link to="/Timeline"></Link> : <GoogleLogin/>}</div> */}

      {/* <GoogleLogin/> */}
    </div>
  );
};

export default Home;
