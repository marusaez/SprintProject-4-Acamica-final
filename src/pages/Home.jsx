import React from "react";
import GoogleLogin from "../components/GoogleLogin";

const Home = () => {
  return (
    <div>
      <div>logo devs united</div>
      {/* <div>{login ? ColorSelect : GoogleLogin}</div> */}
      <GoogleLogin/>
    </div>
  );
};

export default Home;
