import "./myStyles.css";
import React from 'react';
import SidePanel from "./SidePanel";
import Workarea from "./Workarea";

function MainContainer() {
  return (
    <div className="main-container">
      <SidePanel />
      <Workarea />
    </div>
    
  )
}

export default MainContainer