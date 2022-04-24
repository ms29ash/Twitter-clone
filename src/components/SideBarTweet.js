import React from 'react'
import './SideBarTweet.css'

function SideBarTweet() {
    return (
        <div className="SideBarTweet">
            <div className="SideBarTweet__text">
                <div className="SideBarTweet__head">

                    <p className="SideBarTweet__category">Cricket</p>
                    <p>●</p>
                    <p className="SideBarTweet__tag">LIVE</p>
                </div>
                <h3>IPL 2022: KL Rahul's ton helps Lucknow set a target of 169 for Mumbai</h3>
                <p className="SideBarTweet__details">11.6K Tweets</p>
            </div>
            <img src="https://pbs.twimg.com/media/FRFG_gnaIAEZEsy?format=jpg&name=small" alt="" />

        </div>
    )
}

export default SideBarTweet
