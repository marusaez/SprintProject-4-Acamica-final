import React from "react";
import GoogleLogin from "../components/GoogleLogin";
import { useAppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { user } = useAppContext();

  return (
    <main className="Home">
      <div>
        {user?.displayName ? <Navigate to="/Timeline" /> : <GoogleLogin />}
      </div>
    </main>
  );
};

export default Home;
