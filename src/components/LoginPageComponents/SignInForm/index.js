import React from 'react'
import StyledForm from './style';
import {Field, reduxForm} from 'redux-form'
import {renderField} from '../../../form-validation/renderFields'
import {required, email} from '../../../form-validation/constFieldValidate'
import {connect} from 'react-redux'
import { logInRequest } from '../../../action-creators/authorize';

const mapStateToProps = state => ({
    authorized: state.authorized
})

const SignInForm = props => {
        const { handleSubmit, submitting, authorized} = props

        const submit = (values) => {
            props.dispatch(logInRequest({
                email: values.email, 
                password: values.password}))
            }

        return (
            <StyledForm onSubmit={handleSubmit(submit)}>
                <Field name="email" 
                       component={renderField} 
                       type="email" 
                       label={"Email"}
                       validate={[required, email]}/>
                <Field name="password" 
                       component={renderField} 
                       type="password" 
                       label="password" 
                       validate={required}/>
                {authorized.errorLogin && <strong>{authorized.errorLogin.non_field_errors[0]}</strong>}
                <button type="submit" disabled={submitting}>Login</button>
            </StyledForm>
        )
} 
    
const SignInReduxForm = reduxForm({
    form: 'signInForm'
})(SignInForm)

export default connect(mapStateToProps)(SignInReduxForm)