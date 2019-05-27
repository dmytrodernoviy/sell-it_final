import React, {Component} from 'react'
import SideBlockForms from '../../components/LoginPageComponents/SideBlockForms';
import LoginPageImage from '../../components/LoginPageComponents/LoginPageImage';
import { match } from 'react-router-dom';

interface LoginPageForm {
    sign: string;
}

class LoginPage extends Component<{match: match<LoginPageForm>}> {
    render() {
        const {sign} = this.props.match.params
        return (
            <React.Fragment>
                <LoginPageImage />
                <SideBlockForms sign={sign}/>
            </React.Fragment>
        )
    }
}

export default LoginPage
    