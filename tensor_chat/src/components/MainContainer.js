import "./myStyles.css";
import React, { useState } from 'react';
import SidePanel from "./SidePanel";
import ChatArea from "./ChatArea";
import WelcomePage from "./WelcomePage";
import CreateGroups from "./CreateGroups";
import LoginPage from "./LoginPage";
import UserList from "./UserList";
import { Link, Route, Routes } from 'react-router-dom';
import GroupList from "./GroupList";

import Users from "./Users";





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
  const [showLoginPage, setshowLoginPage] = useState(false);

  const handleClick = () => {
    setshowLoginPage(true)
  };

  /* Switching between login page and chat area*/
  const [showChatArea, setshowChatArea] = useState(false);

  const handleClick1 = () => {
    setshowChatArea(true)
    
  };


  return (
    <div className="main-container">
    
      {/* <SidePanel /> 
      {showLoginPage ? <LoginPage handleClick={handleClick1}/>: <WelcomePage 
      handleClick={handleClick}/>}  
      <CreateGroups/> 
      {showChatArea ? Chatarea : null} 
      <User_groups/> */}
  
      {/*Setting up the routing*/}
      <Routes>
          <Route path='/' element={<WelcomePage />}/>  
          <Route path='/LoginPage' element={<LoginPage/>}/>
          <Route path="/ChatArea" element={Chatarea}/>
          <Route path="/UserList" element={<UserList/>} />
        <Route path="/GroupList" element={<GroupList />} />
          <Route path="/Groups" element={<CreateGroups/>} />
        

      </Routes>
      
    </div>
    
  )
}

export default MainContainer