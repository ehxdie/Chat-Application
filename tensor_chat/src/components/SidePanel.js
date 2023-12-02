import React from 'react';
import "./myStyles.css";
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Chats from './Chats';
import { useState } from 'react';

import { useNavigate } from "react-router-dom";



function SidePanel() {

    // Setting up the navigation using the side panel
    const navigate = useNavigate();
    /* Setting up dummy data for the chat preview*/
    const [conversations, setConversations] = useState([
        {
            name: "Test1",
            lastMessage: "Last message",
            timeStap: "today"
        },
        {
            name: "Test2",
            lastMessage: "Last message",
            timeStap: "today"
        }
    ])

    /* Setting up a variable that set the <chat/> props*/

    const Chat = conversations.map(item => {
        return (
            <Chats 
            name = {item.name}
            lastMessage={item.lastMessage}
            timeStap={item.timeStap}
            key = {item.name}
            onClick={() => {
                    navigate("/ChatArea")
                }}/>
        )
    })

   
    
  
  return (
    <div className='side-panel'>
        {/* The header section of the side panel*/}
        <div className='sp-header'>
            {/*The <IconButton> makes the account.. icon clickable 
            the account */ }
            <div>
                  <IconButton onClick={() => {
                      navigate("/ChatArea")
                  }}>
                      <AccountCircleIcon />
                  </IconButton>
            </div>
            
            <div>
                  <IconButton onClick={() => {
                      navigate("/UserList")
                  }} >
                      <PersonAddAltOutlinedIcon />
                  </IconButton>
                  <IconButton onClick={() => {
                      navigate("/GroupList")
                  }} >
                      <GroupAddOutlinedIcon />
                  </IconButton>
                  <IconButton onClick={() => {
                      navigate("/Groups")
                  }}>
                      <AddCircleOutlineOutlinedIcon />
                  </IconButton>
                  <IconButton onClick={()=> {

                  }}>
                      <DarkModeOutlinedIcon />
                  </IconButton>

            </div>
            
        </div>

        {/* The search section of the side panel*/}
        <div className='sp-search'>
            <IconButton>
                <SearchOutlinedIcon />
            </IconButton>
            <input placeholder='Search' className='search-box'></input>
        </div>

        {/* The chat section of the side panel*/}
          <div className='sp-chatsection' >{Chat}</div>
    </div>
    
  )
}

export default SidePanel