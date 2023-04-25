import React from "react";
import './post.css';
import {InsertLinkOutlined, MoreVert} from "@material-ui/icons";
import {Users} from '../../dummyData';

export default function Post({p}){
    //    const user = Users.filter(u=>u.id===props.id)
    var flag=true;
    const [like,setLike] = React.useState(p.like)
    const [isLiked, setIsLiked] = React.useState(true)

    function handleClick(){
        setLike(isLiked ? like + 1 : like - 1)
        setIsLiked(!isLiked)
    }

   
    return(
        <div className="post">
            <div  className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((u) => u.id===p?.userId)[0].profilePicture} alt=""></img>
                        <span className="postUserName">{Users.filter((u) => u.id===p?.userId)[0].username}</span>
                        <span className="postDate">{p.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postTextDiv">
                   {p.desc && <span className="postText">{p.desc} :)</span>}
                    </div>
                    <img  className="PostImg" src="./assets/1.jpg" alt=""></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="./assets/like.png" alt=""  onClick={handleClick}></img>
                        <img className="likeIcon" src="./assets/comment.png" alt=""></img>
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomright">
                        <span className="postCommentCounter">{p.comment} comments</span>
                    </div>
                </div>
            </div>
           
        </div>
    )
}