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


function SidePanel() {
  return (
    <div className='side-panel'>
        {/* The header section of the side panel*/}
        <div className='sp-header'>
            {/*The <IconButton> makes the account.. icon clickable 
            the account */ }
            <div>
                  <IconButton>
                      <AccountCircleIcon />
                  </IconButton>
            </div>
            
            <div>
                  <IconButton>
                      <PersonAddAltOutlinedIcon />
                  </IconButton>
                  <IconButton>
                      <GroupAddOutlinedIcon />
                  </IconButton>
                  <IconButton>
                      <AddCircleOutlineOutlinedIcon />
                  </IconButton>
                  <IconButton>
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
        <div className='sp-chatsection'> <Chats/>  </div>
    </div>
    
  )
}

export default SidePanel