import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Timeline from '../pages/Timeline'
// import UserTweets from "../pages/UserTweets"
// import UserFavs from "../pages/UserFavs"
// import UserPublic from "../pages/UserPublic"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Timeline" element={<Timeline/>}/>
                {/* <Route exact path="/UserTweets" element={<UserTweets/>}/> */}
                {/* <Route exact path="/UserFavs" element={<UserFavs/>}/> */}
                {/* <Route exact path="/UserPublic" element={<UserPublic/>}/> */}
            </Routes>
        </main>
    )
}

export default Main;
