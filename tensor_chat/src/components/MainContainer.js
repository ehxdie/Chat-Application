import "./myStyles.css";
import React, { useState } from 'react';
import SidePanel from "./SidePanel";
import ChatArea from "./ChatArea";
import WelcomePage from "./WelcomePage";


function MainContainer() {
  /* Dummy data for the chatArea */
  const [conversations, setConversations] = useState([
    {
      name: "Test1",
      lastMessage: "Last message",
      timeStap: "today"
    },
  ])

  const Chatarea = conversations.map(item => {
    return (
      <ChatArea
        name={item.name}
        lastMessage={item.lastMessage}
        timeStap={item.timeStap} />
    )
  })

  /* Switching between the Chatarea and the welcome page */
  const [showChatArea, setshowChatArea] = useState(false);

  const handleClick = () => {
    setshowChatArea(true)
  };

  return (
    <div className="main-container">
      <SidePanel />
      {showChatArea? Chatarea: <WelcomePage 
      handleClick={handleClick}/>}
      
    </div>
    
  )
}

export default MainContainer