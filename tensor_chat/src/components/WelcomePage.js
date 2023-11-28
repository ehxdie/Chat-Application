import React from 'react';
import logo from "../Images/illustration.svg";
import { useState } from 'react';
import { IconButton } from '@mui/material';


function WelcomePage(props) {
 
  return (
    <div className='welcome-page-container'>
      <img className = "illustration" src={logo} />
      <p className='welcome-page-text'>Connect easily with your friends and family over various countries</p>
      <IconButton>
        <button className='welcome-button' onClick={props.handleClick}>Start Messaging</button>
      </IconButton>
    </div>
  )
}

export default WelcomePage