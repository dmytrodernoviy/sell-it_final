import React from 'react'
import UserPageStyle from './style';
import {connect} from 'react-redux'
import Button from '../LoginPageComponents/Button';
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'

const mapStateToProps = state => ({
    authorized: state.authorized
})

const UserPage = ({authorized}) => 
   <UserPageStyle>
        <div>
            <div className="user-photo" />
            <span>UserName: {authorized.userData.username || "Unknown"}</span>
            <span>Email: {authorized.userData.email || "Unknown"}</span>
            <span>First Name: {authorized.userData.first_name || "Unknown"}</span>
            <span>Last Name: {authorized.userData.last_name || "Unknown"}</span>
            <span>Location: {authorized.userData.location || "Unknown"}</span>
            <span>Color Scheme: {authorized.userData.color_scheme || "Unknown"}</span>
            <span>Language: {authorized.userData.language || "Unknown"}</span>
            <Link to="/" >
                <Button width="100%" title="Return" />
            </Link>
        </div>
    </UserPageStyle>

UserPage.propTypes = {
    authorized: propTypes.object
}

export default connect(mapStateToProps)(UserPage)