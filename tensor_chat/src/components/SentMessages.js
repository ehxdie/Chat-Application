import React from 'react'
import "./myStyles.css"

function SentMessages() {
    var props1 = { name: "YOU", message: "This is a sample text message" };
  return (
    <div className='self-message-container'> 
        <div className='message-box'>
          <p className='chat-message'>{props1.message}</p>
          <p className='self-timestap'>12:00 am</p>
        </div>
    </div>
  )
}

export default SentMessages