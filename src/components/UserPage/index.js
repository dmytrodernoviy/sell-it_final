import React from 'react'
import UserPageStyle from './style';

const UserPage = () => 
    <UserPageStyle>
        <div>
            <div className="user-photo" />
            <span>UserName</span>
            <span>Email</span>
            <span>Location</span>
            <span>Language</span>
        </div>
    </UserPageStyle>

export default UserPage