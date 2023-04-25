import React from "react";
import "./profile.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

export default function  Profile(){
    return(
        <div>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="./assets/Airbnb.jpeg" alt=""></img>
                            <img className="profileUserImg" src="./assets/1.jpg" alt=""></img>                 
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInforName">Krish Reddi</h4>
                            <h4 className="profileInfoDescription">Attitude Reflects Character</h4>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
         </div>
    )
}