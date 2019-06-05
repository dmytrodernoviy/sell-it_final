import React, {Component} from 'react'
import SideBlockForms from '../../components/LoginPageComponents/SideBlockForms';
import LoginPageImage from '../../components/LoginPageComponents/LoginPageImage';
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import { PreloaderApp } from '../../components/common/PreloaderApp';

const mapStateToProps = state => ({
    loading: state.authorized.loading,
    loadingApp: state.authorized.loadingApp
})

class LoginPage extends Component {
    render() {
        const {sign} = this.props.match.params
        const {loadingApp, loading} = this.props
        return (
            <React.Fragment>
                {loadingApp 
                   ? <PreloaderApp /> 
                   : <React.Fragment>
                        <LoginPageImage />
                <SideBlockForms sign={sign} loading={loading}/>
                       </React.Fragment>
                }
                
            </React.Fragment>
        )
    }
}

LoginPage.propTypes = {
    sign: propTypes.string,
    loading: propTypes.bool,
    loadingApp: propTypes.bool
}

export default connect(mapStateToProps)(LoginPage)
    