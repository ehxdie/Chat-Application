import React from 'react'
import "./myStyles.css"
import { IconButton } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function ChatArea(props) {
  return (
    <div className='chatArea-container'>

        <div className='chatArea-header'>
          <div className='chat-icon'>{props.name[0]}</div>
          <div className='header-text'>
            <div className='chat-name'>{props.name}</div>
            <div className='chat-timestap'>{props.timeStap}</div>
          </div>  
          <IconButton>
            <DeleteOutlineOutlinedIcon/>
          </IconButton>
        </div>

        <div className='chatArea-messages'>messages</div>

        <div className='chatArea-input'>
          <input placeholder='T ype a message' className='search-box'/> 
          <IconButton>
            <SendOutlinedIcon/>
          </IconButton>
        </div>

    </div>
    )
}

export default ChatArea