import React from 'react'
import StyledForm from '../SignInForm/style';
import {Field, reduxForm} from 'redux-form'
import {renderField} from '../../../form-validation/renderFields'
import {required, email} from '../../../form-validation/constFieldValidate'
import {connect} from 'react-redux'
import { registeredRequest } from '../../../action-creators/authorize';

const mapStateToProps = state => ({
    authorized: state.authorized
})

const SignUpForm = props => {
    const { handleSubmit, submitting, authorized} = props

    const submit = (values) => {
        props.dispatch(registeredRequest({
            username: values.username,
            email: values.email, 
            password1: values.password_1,
            password2: values.password_2}))
        }

        return (
            <StyledForm onSubmit={handleSubmit(submit)}>
                <Field name="username" 
                       component={renderField} 
                       type="text" 
                       label="User Name" 
                       validate={required}/>
                <Field name="email" 
                       component={renderField} 
                       type="email" 
                       label="Email" 
                       validate={[required, email]}/>
                <Field name="password_1" 
                       component={renderField} 
                       type="password" 
                       label="Password" 
                       validate={required}/>
                <Field name="password_2" 
                       component={renderField} 
                       type="password" 
                       label="Confirm password" 
                       validate={required}/>
                {authorized.errorRegister && <strong>{authorized.errorRegister}</strong>}
                <button type="submit" disabled={submitting}>Register</button>
            </StyledForm>
        )
}

const SignUpReduxForm = reduxForm({
    form: 'signUpForm'
})(SignUpForm)

export default connect(mapStateToProps)(SignUpReduxForm)