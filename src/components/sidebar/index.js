import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../spotify";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div>
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
      </div>
      <div
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        <div className="btn-body">
          <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
            <FaSignOutAlt />
            <p className="btn-title">Sign Out</p>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
