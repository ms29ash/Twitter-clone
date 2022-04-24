import React from 'react'
import SideBarTweet from './SideBarTweet'
import './TrendingSideBar.css'

function TrendingSideBar() {
    return (
        <div className="trendingSideBar">
            <h3>What's happening</h3>
            <SideBarTweet />
            <SideBarTweet />
            <SideBarTweet />
            <SideBarTweet />
        </div>
    )
}

export default TrendingSideBar
