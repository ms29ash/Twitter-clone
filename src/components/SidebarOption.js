import React from 'react'
import './SidebarOption.css'



function SidebarOption({ active, text, Icon }) {
    return (
        <div className={`sidebarOption ${active && "sidebarOption__active"}`}  >
            {/* <TwitterIcon /> */}
            <Icon />
            <h2>
                {text}
            </h2>

        </div>
    )
}

export default SidebarOption
