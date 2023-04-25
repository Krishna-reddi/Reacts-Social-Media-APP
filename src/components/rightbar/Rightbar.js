import React from "react"
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../../components/online/Online'
import Profile from "../../pages/profile/Profile"

export default function Rightbar({Profile}){

    const HomeRightbar=()=>{
        return(
        <>
            
                <div className="rightbarContainer">
                    <img className="birthdayImg" src="./assets/gift.jpeg" alt=""></img>
                    <span className="birthdayText"><b>Krisha</b> and <b>3 other friends</b> have a birthday today</span>
                </div>
                <img className="rightbarAd" src="./assets/ad.jpeg" alt=""></img>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                   {Users.map(user=>(
                        <Online
                        id={user.id}
                        user={user}
                        />
                    ))
                   }
                </ul>
            
        </>
        )
        }
    
    const ProfileRightbar = ()=>{
        return(
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                     <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">RelationShip:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="./assets/1.jpg" alt=""></img>
                    <span className="rightbarFolloingName">Krish reddi</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="./assets/1.jpg" alt=""></img>
                    <span className="rightbarFolloingName">Krish reddi</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="./assets/1.jpg" alt=""></img>
                    <span className="rightbarFolloingName">Krish reddi</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="./assets/1.jpg" alt=""></img>
                    <span className="rightbarFolloingName">Krish reddi</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="./assets/1.jpg" alt=""></img>
                    <span className="rightbarFolloingName">Krish reddi</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="./assets/1.jpg" alt=""></img>
                    <span className="rightbarFolloingName">Krish reddi</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
              {Profile ? <ProfileRightbar/> :<HomeRightbar/>}
           </div>
        </div>
    )
}