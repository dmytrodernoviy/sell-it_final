import React, {Component} from 'react'
import SideBlockForms from '../../components/LoginPageComponents/SideBlockForms';
import Footer from '../../components/LoginPageComponents/Footer';
import LoginPageImage from '../../components/LoginPageComponents/LoginPageImage';

class LoginPage extends Component {
    render() {
        const {sign} = this.props.match.params
        return (
            <React.Fragment>
                <LoginPageImage />
                <SideBlockForms sign={sign}/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default LoginPage
    