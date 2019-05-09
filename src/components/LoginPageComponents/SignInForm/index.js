import React from 'react'
import StyledForm from './style';
import {Field, reduxForm} from 'redux-form'
import {renderField} from '../../../form-validation/renderFields'
import {required, email} from '../../../form-validation/constFieldValidate'

const SignInForm = () => {
        return (
            <StyledForm >
                <Field name="email" 
                       component={renderField} 
                       type="email" 
                       label={"Email"}
                       validate={[required, email]}/>
                <Field name="Password" 
                       component={renderField} 
                       type="password" 
                       label="Password" 
                       validate={required}/>
                <button type="submit">Login</button>
            </StyledForm>
        )
} 
    
export default reduxForm({
    form: 'signInForm'
})(SignInForm)