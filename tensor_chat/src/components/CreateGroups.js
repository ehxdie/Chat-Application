import { IconButton } from '@mui/material'
import React from 'react'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import SidePanel from './SidePanel';


function CreateGroups() {
  return (
    <>
    <SidePanel/>
    <div className='createGroups-container'> 
        <input placeholder='Enter Group Name' className='group-name'/>
        <IconButton>
            <DoneOutlinedIcon/>
        </IconButton>
    </div>
    </>
  )
}

export default CreateGroups