import React from "react";
import { loginGoogle } from "../firebase";
import bigLogo from "../images/logo big.svg";
import googleSignin from "../images/google sign in.svg";

const GoogleLogin = () => {
  return (
    <div className="GoogleLogin">
      <div>
        <img src={bigLogo} alt="page logo" width="400" height="500" />
      </div>
      <div>
        <h1 className="title">Welcome!</h1>
        <p className="text">
          The place where developeres from all around the world share thoughts,
          ideas, get inspired and so much more.
        </p>
        <img
          src={googleSignin}
          alt="google sign in"
          className="signIn"
          onClick={loginGoogle}
        />
        <p className="text loginBottom1">
          © 2020 Devs_United - <span className="loginBottom2">BETA</span>
        </p>
      </div>
    </div>
  );
};

export default GoogleLogin;
