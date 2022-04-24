import React from 'react'
import './Feed.css';
import TweetBox from './TweetBox';
import FlipMove from 'react-flip-move';
import Post from './Post';


function Feed() {
    return (
        <div className="feed">
            <div className="title">

                <h2  >Home</h2>
            </div>
            {/* Header */}

            <TweetBox />

            <FlipMove>
                <Post />
                <Post />
                <Post />
                <Post />

            </FlipMove>


            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}



        </div >
    )
}

export default Feed
