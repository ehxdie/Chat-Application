import React from 'react'


/* This component will keep track of the conversation a user is having*/
function Chats(props) {
  return (
    <div className='chat-box'>
        <div className='chat-icon'>{props.name[0]}</div>
        <div className='chat-name'>{props.name}</div>
        <div className='chat-lastmessage'>{props.lastMessage}</div>
        <div className='chat-timestap'>{props.timeStap}</div>
    </div>
  )
}

export default Chats