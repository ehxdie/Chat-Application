import React from 'react'

import { useNavigate } from "react-router-dom";



/* This component will keep track of the conversation a user is having*/
function Chats(props) {
  // Setting up navigation links to the chat area for each conversation
  const navigate = useNavigate();
  return (
    <div className='chat-box' onClick={() => {
      navigate("/ChatArea")
    }}>
        <div className='chat-icon'>{props.name[0]}</div>
        <div className='chat-name'>{props.name}</div>
        <div className='chat-lastmessage'>{props.lastMessage}</div>
        <div className='chat-timestap'>{props.timeStap}</div>
    </div>
  )
}

export default Chats