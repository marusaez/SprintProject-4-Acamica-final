import React from "react";
import { firestore, auth, loginGoogle, logout } from "../firebase";


const GoogleLogin = () => {
  return (
    <div>
      <h2>Bienvenida</h2>
      <button onClick={loginGoogle}>Login con Google</button>

    </div>
  );
};

export default GoogleLogin;
