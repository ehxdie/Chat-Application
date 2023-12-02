import React from 'react'

import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux/es/hooks/useSelector';



/* This component will keep track of the conversation a user is having*/
function Chats(props) {

  // Getting access to the application theme state
  const theme = useSelector((state) => state);


  // Setting up navigation links to the chat area for each conversation
  const navigate = useNavigate();

  return (
    <div className='chat-box' onClick={() => {
      navigate("/ChatArea")
    }}>
        <div className='chat-icon'>{props.name[0]}</div>
      <div className={theme ? 'chat-name' : 'chat-name-dark'}>{props.name}</div>
      <div className={theme ? 'chat-lastmessage' : 'chat-lastmessage-dark'}>{props.lastMessage}</div>
      <div className={theme ? 'chat-timestap' : 'chat-timestap-dark'}>{props.timeStap}</div>
    </div>
  )
}

export default Chats