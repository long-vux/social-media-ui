import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { formatDistanceToNow } from 'date-fns';
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({});
  
  // check if user is liked
  useEffect(() =>{
    setIsLiked(post.likes.includes(currentUser._id))
  },[post.likes, currentUser._id])

  // fetch user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/users?userId=${post.userId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [post.userId]);

  // handle like
  const likeHandler = async () => {
    try{
      await axios.put(`http://localhost:8800/api/posts/${post._id}/like`, {userId: currentUser._id})
      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                user?.profilePicture
                  ? user.profilePicture 
                  : `${PF}/noProfileImg.jpg`}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {user ? user.username : "Unknown"}
            </span>
            <span className="postDate">{formatDistanceToNow(new Date(post.createdAt))} ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">{post?.desc}</div>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment || 0} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
