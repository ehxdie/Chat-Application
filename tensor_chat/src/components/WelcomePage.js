import React from 'react';
import logo from "../Images/illustration.svg";
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function WelcomePage(props) {
  
  const navigate = useNavigate();
  return (
    <div className='welcome-page-container'>
      <img className = "illustration" src={logo} />
      <p className='welcome-page-text'>Connect easily with your friends and family over various countries</p>
      <IconButton>
        <button className='welcome-button' onClick={()=> {
          navigate("/LoginPage")
        }}>Start Messaging</button>
      </IconButton>
    </div>
  )
}

export default WelcomePage