import { useEffect } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${PF}/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username, PF]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture 
                  ? `${PF}/${user.coverPicture}` 
                  : `${PF}/coverImg.jpg`
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                  ? `${PF}/${user.profilePicture}`
                  : `${PF}/noProfileImg.jpg`
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
