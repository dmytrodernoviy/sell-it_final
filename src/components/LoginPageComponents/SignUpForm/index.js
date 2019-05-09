import React from 'react'
import StyledForm from '../SignInForm/style';
import {Field, reduxForm} from 'redux-form'
import {renderField} from '../../../form-validation/renderFields'
import {required, email} from '../../../form-validation/constFieldValidate'

const SignUpForm = () => {
        return (
            <StyledForm >
                <Field name="username" 
                       component={renderField} 
                       type="text" 
                       label="UserName" 
                       validate={required}/>
                <Field name="Email" 
                       component={renderField} 
                       type="email" 
                       label="Email" 
                       validate={[required, email]}/>
                <Field name="Password" 
                       component={renderField} 
                       type="password" 
                       label="Password" 
                       validate={required}/>
                <button type="submit">Register</button>
            </StyledForm>
        )
}

export default reduxForm({
    form: 'signUpForm'
})(SignUpForm)