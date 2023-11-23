import React from 'react';
import "./myStyles.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
function SidePanel() {
  return (
    <div className='side-panel'>
        {/* The header section of the side panel*/}
        <div className='sp-header'>
            {/*The <IconButton> makes the account.. icon clickable*/}
            <IconButton>
                  <AccountCircleIcon/>
            </IconButton>
            <IconButton>
                <PersonAddAltOutlinedIcon/>
            </IconButton>
            <IconButton>
                <GroupAddOutlinedIcon/>
            </IconButton>
            <IconButton>
                <AddCircleOutlineOutlinedIcon/>
            </IconButton>
            <IconButton>
                <DarkModeOutlinedIcon/>
            </IconButton>

        </div>

        {/* The search section of the side panel*/}
        <div className='sp-search'>search</div>

        {/* The chat section of the side panel*/}
        <div className='sp-chatsection'>chat section</div>
    </div>
    
  )
}

export default SidePanel