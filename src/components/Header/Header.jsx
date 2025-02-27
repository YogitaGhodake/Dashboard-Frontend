// import React from 'react'
import NotificationIcon from "../../assets/icons8-notification.svg";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ProfilePhoto from "../../assets/Ellipse 294.png";
import "../Dashboard/Dashboard.css";



const Header = () => {
  return (
    <>
         <div className="header">
          <div className="notification">
            <img src={NotificationIcon} alt="Notification Icon" />
            <div className="dot"></div>
          </div>
          <div className="profile-photo">
            <img src={ProfilePhoto} alt="Profile Photo" />
          </div>

          <div className="profile-info">
            <p className="bold-text">Lorem IPS</p>
            <p className="light-text">Manager</p>
          </div>
          <div className="more">
            <ArrowDropDownOutlinedIcon />
          </div>
        </div>
        <div className="line"></div>
    </>
  )
}

export default Header