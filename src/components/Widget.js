import React from 'react'
import './Widget.css'
import SearchIcon from '@mui/icons-material/Search';
import TrendingSideBar from './TrendingSideBar';

function Widget() {
    return (
        <div className="widget">
            <div className="search">
                <SearchIcon />

                <input type="text" placeholder="Search Twitter" />
            </div>

            <TrendingSideBar />
            <TrendingSideBar />
            <div className="follow__suggestion">
                Follow
            </div>

        </div>
    )
}

export default Widget
