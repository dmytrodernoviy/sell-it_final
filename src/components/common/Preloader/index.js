import React from 'react'
import PreloaderStyle from './style';

const Preloader = () => 
    <PreloaderStyle>
        <div className="caption">
            <div className="cube-loader">
                <div className="cube loader-1"></div>
                <div className="cube loader-2"></div>
                <div className="cube loader-4"></div>
                <div className="cube loader-3"></div>
            </div>
        </div>
    </PreloaderStyle>

export default Preloader