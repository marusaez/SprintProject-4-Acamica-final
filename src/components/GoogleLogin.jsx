import React, { useEffect } from "react";
import { firestore, auth, loginGoogle, logout } from "../firebase";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import pageLogo from "../images/logo big.svg";
import googleSignin from "../images/google sign in.svg";

const GoogleLogin = () => {
  const { user, setUser } = useAppContext();

  return (
    <div className="GoogleLogin">
      {/* <div>logo devs united</div> */}
      <div>
        <img src={pageLogo} alt="page logo" width="400" height="500" />
      </div>
      <div>
        <h1 className="title">Welcome!</h1>
        <p className="text">The place where developeres from all around the world share thoughts, ideas, get inspired and so much more.</p>
        {/* <button onClick={loginGoogle}>Login con Google</button> */}
        <img src={googleSignin} alt="google sign in" className="signIn" onClick={loginGoogle}/>
        <p className="text loginBottom1">© 2020 Devs_United - <span className="loginBottom2">BETA</span></p>
      </div>
    </div>
  );
};

export default GoogleLogin;
