import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';





function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__options">
                <TwitterIcon className="sidebar__twittericon" />
                <SidebarOption active text="Home" Icon={HomeIcon} />
                <SidebarOption text="Explore" Icon={SearchIcon} />
                <SidebarOption text="Notification" Icon={NotificationsNoneIcon} />
                <SidebarOption text="Messages" Icon={MailOutlinedIcon} />
                <SidebarOption text="Bookmarks" Icon={BookmarkBorderOutlinedIcon} />
                <SidebarOption text="Lists" Icon={ListAltIcon} />
                <SidebarOption text="Profile" Icon={PermIdentityIcon} />
                <SidebarOption text="More" Icon={MoreHorizIcon} />
                <Button variant="outlined" className="sidebar__tweet" >Tweet</Button>

            </div>
        </div>
    )
}

export default Sidebar


