import React from "react";
import { Box, Card, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";
import { ImportContacts, ImportContactsTwoTone, InvertColors } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Card
      sx={{
        height: "calc(100vh - 60px)",
        width: "80px",
        backgroundColor: "rgba(255,255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "10px",
      }}
    >
            <NavLink
        to=""
        style={{ textDecoration: "none", width: "100%" }}
      >
        {({ isActive }) => (
          <IconButton
            sx={{
              color: isActive ? "blue" : "black",
              margin: "10px 0",
              py: "15px",
              px: 0,
              width: "100%",
              borderRadius: 0,
              ...(isActive && {
                background:
                  "linear-gradient(to right, #0069d7 4px, rgb(0 ,105, 215,0.2) 4px);",
              }),
            }}
          >
            <HomeIcon />
          </IconButton>
        )}
      </NavLink>
      <NavLink
        to="/Location-1"
        style={{ textDecoration: "none", width: "100%" }}
      >
        {({ isActive }) => (
          <IconButton
            sx={{
              color: isActive ? "blue" : "black",
              margin: "10px 0",
              py: "15px",
              px: 0,
              width: "100%",
              borderRadius: 0,
              ...(isActive && {
                background:
                  "linear-gradient(to right, #0069d7 4px, rgb(0 ,105, 215,0.2) 4px);",
              }),
            }}
          >
            <ImportContacts/>
          </IconButton>
        )}
      </NavLink>
      <NavLink
        to="/Location-2"
        style={{ textDecoration: "none", width: "100%" }}
      >
        {({ isActive }) => (
          <IconButton
            sx={{
              color: isActive ? "blue" : "black",
              margin: "10px 0",
              py: "15px",
              px: 0,
              width: "100%",
              borderRadius: 0,
              ...(isActive && {
                background:
                  "linear-gradient(to right, #0069d7 4px, rgb(0 ,105, 215,0.2) 4px);",
              }),
            }}
          >
            <PersonIcon />
          </IconButton>
        )}
      </NavLink>
      <NavLink
        to="/Location-3"
        style={{ textDecoration: "none", width: "100%" }}
      >
        {({ isActive }) => (
          <IconButton
            sx={{
              color: isActive ? "blue" : "black",
              margin: "10px 0",
              py: "15px",
              px: 0,
              width: "100%",
              borderRadius: 0,
              ...(isActive && {
                background:
                  "linear-gradient(to right, #0069d7 4px, rgb(0 ,105, 215,0.2) 4px);",
              }),
            }}
          >
            <MailIcon />
          </IconButton>
        )}
      </NavLink>
      <NavLink
        to="/Location-4"
        style={{ textDecoration: "none", width: "100%" }}
      >
        {({ isActive }) => (
          <IconButton
            sx={{
              color: isActive ? "blue" : "black",
              margin: "10px 0",
              py: "15px",
              px: 0,
              width: "100%",
              borderRadius: 0,
              ...(isActive && {
                background:
                  "linear-gradient(to right, #0069d7 4px, rgb(0 ,105, 215,0.2) 4px);",
              }),
            }}
          >
            <SettingsIcon />
          </IconButton>
        )}
      </NavLink>
      <NavLink
        to="/Location-5"
        style={{ textDecoration: "none", width: "100%" }}
      >
        {({ isActive }) => (
          <IconButton
            sx={{
              color: isActive ? "blue" : "black",
              margin: "10px 0",
              py: "15px",
              px: 0,
              width: "100%",
              borderRadius: 0,
              ...(isActive && {
                background:
                  "linear-gradient(to right, #0069d7 4px, rgb(0 ,105, 215,0.2) 4px);",
              }),
            }}
          >
            <ImportContactsTwoTone />
          </IconButton>
        )}
      </NavLink>
      <NavLink
        to="/Location-6"
        style={{ textDecoration: "none", width: "100%" }}
      >
        {({ isActive }) => (
          <IconButton
            sx={{
              color: isActive ? "blue" : "black",
              margin: "10px 0",
              py: "15px",
              px: 0,
              width: "100%",
              borderRadius: 0,
              ...(isActive && {
                background:
                  "linear-gradient(to right, #0069d7 4px, rgb(0 ,105, 215,0.2) 4px);",
              }),
            }}
          >
            <InvertColors />
          </IconButton>
        )}
      </NavLink>
    </Card>
  );
};

export default Navbar;
