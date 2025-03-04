import React, { useState, useEffect, useRef } from "react";
import Loader from "../../components/ui/Loader";
import "./header.css";
import "./header.mobile.css";
import headerLogo from "../../assets/headerLogo.svg";
import BufferLogo from "../../assets/CalendarIcon.png";
import notificationIcon from "../../assets/notification.svg";
import axios, { AxiosRequestConfig } from "axios";
import { Avatar } from "@mui/material";
import { SupervisorAccountOutlined } from "@mui/icons-material";

const Header: React.FC = () => {
  let title = "";
  const loading = false;

  const [showLogout, setShowLogout] = useState(false);
  const [userDetails, setUserDetails] = useState({ photo: "" });
  const jobTitle = "User";

  const logoutwrapperRef = useRef(null);
  const profileRef = useRef(null);







  return (
    <>
      <div id="header">
        <div id="header-logo">
        <SupervisorAccountOutlined color="secondary"/>
        </div>

        <div id="header-title">
          {/* <img
            src={
                BufferLogo
            }
            id="webapp-logo"
            alt={"Title"}
          /> */}
          <div id="webapp-title">{"Sustain"}</div>
        </div>

        <div id="header-account">
          {loading && <Loader />}
          <img
            src={notificationIcon}
            id="notifications-icon"
            alt="Notifications"
          />
          {/* Shows profile pic of user if present. Else, it shows first character of username. */}
          <div
            id="user-icon"
            data-testid="userIcon"
            ref={profileRef}
            onClick={() => {
              setShowLogout(!showLogout);
            }}
          >
            {userDetails.photo === "" ? (
              <div id="profile-name"><Avatar sx={{ width: "34.13px", height: "34.13px" }}/></div>
            ) : (
              <img src={userDetails.photo} id="profile-pic" alt="" />
            )}
          </div>
        </div>
      </div>
      {showLogout ? (
        <div id="profile-popup" ref={logoutwrapperRef}>
          <div id="user-name" className="profile-popup-details">
            {"Generic user"}
          </div>
          <div id="user-email" className="profile-popup-details">
            {"genericuser@tiger.com"}
          </div>
          {jobTitle && (
            <div id="user-email" className="profile-popup-details">
              {jobTitle}
            </div>
          )}
          <div
            id="logout-button"
            className="profile-popup-details"
            title="Logout"
          >
            Logout
          </div>
        </div>
      ) : null}
    </>
  );
};

export default React.memo(Header);
