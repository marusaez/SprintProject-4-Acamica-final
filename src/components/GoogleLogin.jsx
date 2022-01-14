import React, { useEffect } from "react";
import { firestore, auth, loginGoogle, logout } from "../firebase";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";


const GoogleLogin = () => {
  const { user, setUser } = useAppContext();

  return (
    <div>
      <h2>Bienvenida</h2>
      <button onClick={loginGoogle}>Login con Google</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default GoogleLogin;
