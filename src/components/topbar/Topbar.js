import React from 'react'
import "./topbar.css"

import {Search, Person, Chat, Notifications} from "@material-ui/icons"

export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarleft">
                <span className='logo'>Lamasocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input  placeholder='search for friend, post or video' className="searchInput"></input>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem"> 
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div> 
                    <div className='topbarIconItem'> 
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div> 
                    <div className='topbarIconItem'> 
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div> 
                    <img src="/assets/Airbnb.jpeg" alt="" className="topbarImg"></img>
                </div>
            </div>
            
        </div>
    )
}