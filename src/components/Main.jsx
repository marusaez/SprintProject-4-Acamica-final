import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Timeline from '../pages/Timeline'
import UserProfile from "../pages/UserProfile"
import PublicProfile from "../pages/PublicProfile"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Timeline" element={<Timeline/>}/>
                <Route exact path="/UserProfile" element={<UserProfile/>}/>
                {/* <Route exact path="/PublicProfile" element={<PublicProfile/>}/> */}
            </Routes>
        </main>
    )
}

export default Main;
