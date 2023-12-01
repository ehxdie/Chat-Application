import React from 'react';
import "./myStyles.css";
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Users from './Users';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';


import { useState } from 'react';
import SidePanel from './SidePanel';

function GroupList() {
    /* Setting up dummy data for the user c preview */
    const [userStatus, setUserStatus] = useState([
        {
            name: "Group1",

        },
        {
            name: "Group2",

        },
        {
            name: "Group2",

        },
        {
            name: "Group2",

        },



    ])

    /* Setting up a variable that set the <chat/> props */

    const User = userStatus.map(item => {
        return (
            <>
                <Users
                    name={item.name}
                />

            </>

        )
    })

    return (
        <>
            <SidePanel />
            <div className='user-group-container'>
                <div className='user-group-header'>
                    <ContactsOutlinedIcon className='contacts-logo' />
                    Available Groups
                </div>

                <div className='sp-search'>
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <input placeholder='Search' className='search-box'></input>
                </div>

                <div className='users'>{User}</div>

            </div>
        </>

    )
}

export default GroupList