import React from 'react'
import './TweetBox.css'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Button from '@mui/material/Button';


function TweetBox() {
    return (
        <div className="tweetBox">
            <div className="tweet__input">

                <img src="https://pbs.twimg.com/profile_images/1391253831346888708/r7t3vNZy_400x400.jpg" alt="" />
                {/* <textarea type="textarea" placeholder="What's happening?" wrap="soft" /> */}
                <span className="tweet__write" data-text="true" data-placeholder="What
                's happening ?" contentEditable ></span>
            </div>
            <div className="tweetBox__options">
                <div className="tweetBox__icons">

                    <InsertPhotoOutlinedIcon />
                    <GifBoxOutlinedIcon />
                    <EmojiEmotionsOutlinedIcon />
                    <InsertInvitationOutlinedIcon />
                    <LocationOnOutlinedIcon />
                </div>
                <Button>Tweet</Button>
            </div>

        </div>
    )
}

export default TweetBox
