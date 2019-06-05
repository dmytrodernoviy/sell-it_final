import React from 'react' 
import LoginPreloaderStyle from './style';

const LoginPreloader = () => 
    <LoginPreloaderStyle>
        <div className="loader">
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
        </div>
    </LoginPreloaderStyle>

export default LoginPreloader
