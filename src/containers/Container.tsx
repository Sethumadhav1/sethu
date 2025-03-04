import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Navigation from "./navigationMenu/Navigation";
import Login from "../pages/Login";
import { useState } from "react";

const Container = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(Boolean(sessionStorage.getItem("sst_login_id")))
  if (isLoggedIn){

    return (
      <div id="vct">
        <Header />
        <div id="page-content">
          <Navigation />
          <div
            id="content-parent"
            // className={`${offline && "offline-content"}`}
          >
            {/* <OfflineMessage /> */}
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
  else return(<Login setIsLoggedIn={setIsLoggedIn}/>)
};

export default Container;
