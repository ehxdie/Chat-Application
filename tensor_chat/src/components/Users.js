import React from 'react'
import "./myStyles.css";

function Users(props) {
  return (
      <div className='user-box'>
              <div className='user-icon'>{props.name[0]}</div>
              <div className='user-name'>{props.name}</div>
      </div>
  )
}

export default Users