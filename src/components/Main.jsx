import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import UserProfile from "../pages/UserProfile";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Timeline" element={<Timeline />} />
        <Route exact path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </main>
  );
};

export default Main;
