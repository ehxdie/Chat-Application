import React from 'react';
import "./myStyles.css";
import { IconButton, toggleButtonClasses } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Chats from './Chats';
import { useState } from 'react';

import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';
import { useDispatch } from'react-redux';



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
           />
        )
    })

   /* Setting up toogle button to change to dark mode */
//    const [theme, setTheme] = useState(true);

//    const handleClick = () => {
//        setTheme(!theme);
//    };

   /* Setting up toogle button to change to dark mode using react-dom */
   const theme = useSelector(state => state);

   // This handles the dispatching of the toggle theme action
   const dispatch = useDispatch();
   
   const handleClick = () => {
        dispatch(toggleTheme())
    }
    
  
  return (
    <div className='side-panel'>
        {/* The header section of the side panel*/}

        <div className={"sp-header" + (theme? "": "-dark")}>
            {/*The <IconButton> makes the account.. icon clickable 
            the account */ }
            <div>
                  <IconButton onClick={() => {
                      navigate("/ChatArea")
                  }}>
                      <AccountCircleIcon className={theme? "icons": "icons-dark"}/>
                  </IconButton>
            </div>
            
            <div>
                  <IconButton onClick={() => {
                      navigate("/UserList")
                  }} >
                      <PersonAddAltOutlinedIcon className={theme ? "icons" : "icons-dark"} />
                  </IconButton>
                  <IconButton onClick={() => {
                      navigate("/GroupList")
                  }} >
                      <GroupAddOutlinedIcon className={theme ? "icons" : "icons-dark"} />
                  </IconButton>
                  <IconButton onClick={() => {
                      navigate("/Groups")
                  }}>
                      <AddCircleOutlineOutlinedIcon className={theme ? "icons" : "icons-dark"} />
                  </IconButton>
                  <IconButton onClick={handleClick}>
                      {theme && <DarkModeOutlinedIcon />} {!theme &&  <WbSunnyOutlinedIcon className="icons-dark"/>}
                  </IconButton>

            </div>
            
        </div>

        {/* The search section of the side panel*/}
          <div className={"sp-search" + (theme ? "" : "-dark")}>
            <IconButton>
                  <SearchOutlinedIcon className={theme ? "icons" : "icons-dark"} />
            </IconButton>
            <input placeholder='Search' className='search-box'></input>
        </div>

        {/* The chat section of the side panel*/}
          <div className={"sp-chatsection" + (theme ? "" : "-dark")} >{Chat}</div>
    </div>
    
  )
}

export default SidePanel