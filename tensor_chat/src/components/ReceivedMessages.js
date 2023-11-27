import React from 'react'
import "./myStyles.css";

function ReceivedMessages() {
    var props1 = { name: "Randomuser", message: "This is a sample text message" } 
         
  return (
    <div className='other-message-container'>
              <div className='chat-icon'>{props1.name[0]}</div>
              <div className='message-box'>
                  <p className='chat-name'>{props1.name}</p>
                  <p className='chat-message'>{props1.message}</p>
                  <p className='self-timestap'>12:00 am</p>
              </div>  
    </div>
  )
}

export default ReceivedMessages