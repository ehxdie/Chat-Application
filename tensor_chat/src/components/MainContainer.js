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

  const Chatrea = conversations.map(item => {
    return (
      <ChatArea
        name={item.name}
        lastMessage={item.lastMessage}
        timeStap={item.timeStap} />
    )
  })

  return (
    <div className="main-container">
      <SidePanel />
      {/*{Chatrea}*/}

      <WelcomePage/>
    </div>
    
  )
}

export default MainContainer