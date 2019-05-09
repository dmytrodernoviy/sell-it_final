import React from 'react'
import NewProductFormStyle from './style';
import {renderField} from '../../../form-validation/renderFields'
import {required, number} from '../../../form-validation/constFieldValidate'
import {Field, reduxForm} from 'redux-form'
import Button from '../../LoginPageComponents/Button';

const NewProductForm = () => 
    <NewProductFormStyle>
            <Field  name="theme" 
                    component={renderField} 
                    type="text" 
                    label={"Theme"}
                    validate={required}/>
            <Field  name="category" 
                    component={renderField} 
                    type="text" 
                    label={"Category"}
                    validate={required}/>
            <Field  name="text" 
                    component={renderField} 
                    type="text" 
                    label={"Text"}
                    validate={required}/>
            <Field  name="price" 
                    component={renderField} 
                    type="text" 
                    label={"Price"}
                    validate={[required, number]}/>
            <Button width={"240px"} title={"Add product"}></Button>
    </NewProductFormStyle>

export default reduxForm({
    form: 'newProductForm'
})(NewProductForm)