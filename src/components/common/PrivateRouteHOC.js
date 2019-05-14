import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router'

export default function requireAuth (WrappedComponent) {

    class Authentication extends Component {
  
      render () {
  
        if (!this.props.authenticated) {
          return <Redirect to="/login-page/sign-in"/>
        }
  
        return <WrappedComponent { ...this.props }/>
      }
    }
  
    const mapStateToProps = state => ({
        authenticated: state.authorized.isLogin
    })
      
    return connect(mapStateToProps)(Authentication);
  }
