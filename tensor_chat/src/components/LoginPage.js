import React from 'react'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import icon from "../Images/avatar.svg";
import { useNavigate } from 'react-router-dom';
function LoginPage(props){
  const navigate = useNavigate();
  return (
    
    <div className='login-container'>
        <img src={icon} className='login-icon'/>
        <input className='user-name' placeholder='Username'/>
        <input className='user-password' placeholder='Password'/>
      <button className='login-button' onClick={()=>{
        navigate("/ChatArea")
      }}>Login</button>
    </div>
  )
}

export default LoginPage