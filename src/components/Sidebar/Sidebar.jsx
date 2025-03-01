// import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Dashboard logo" />
        <span className="logo-text"> LOGO </span>
      </div>

      <div className="sidebar-menu">
        <a>
          <DashboardIcon style={{ color: "white", fontSize:"2.5rem", marginRight:"0.4rem" }}/>        
            Dashboard
        </a>
        <a className="active-portfolio">
          <CampaignRoundedIcon style={{ color: "white" }} /> Portfolio
        </a>
        <a>
          <DesignServicesOutlinedIcon style={{ color: "white" }} />
          Inputs
        </a>
        <a>
          <ContactsIcon style={{ color: "white" }} />
          Profile
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
