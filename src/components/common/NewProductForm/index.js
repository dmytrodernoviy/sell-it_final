import React from 'react'
import NewProductFormStyle from './style';
import {renderField} from '../../../form-validation/renderFields'
import {required, number} from '../../../form-validation/constFieldValidate'
import {Field, reduxForm} from 'redux-form'
import Button from '../../LoginPageComponents/Button';
import {connect} from 'react-redux'
import { requestProductAdd } from '../../../action-creators/productItemActionCreator';

const mapStateToProps = state => ({
        authorized: state.authorized
})

const NewProductForm = props => {
const { handleSubmit, submitting} = props

const submit = (values) => {
    props.dispatch(requestProductAdd({
        theme: values.theme, 
        text: values.text,
        price: values.price,
        currency: values.currency,
        contract_price: values.contract_price,
        location: values.location}))
    }

    return (
        <NewProductFormStyle onSubmit={handleSubmit(submit)} >

        <Field  name="theme" 
                component={renderField} 
                type="text" 
                label={"Theme"}
                validate={required}/>
        <Field  name="text" 
                component={renderField} 
                type="text" 
                label={"Text"}
                validate={required}
                />
        <Field  name="price" 
                component={renderField} 
                type="text" 
                label={"Price"}
                validate={[required, number]}
                />
        <Field  name="currency" 
                component={renderField} 
                type="text" 
                label={"Currency"}/>
        <Field  name="contract_price" 
                component={renderField} 
                type="text" 
                label={"Contract Price"}
                validate={[required, number]}
                />
        <Field  name="location" 
                component={renderField} 
                type="text" 
                label={"Location"}/>

        <Button width={"240px"} title={"Add product"} disabled={submitting}></Button>
    </NewProductFormStyle>
    )
}

const newProductReduxForm = reduxForm({
    form: 'newProductForm'
})(NewProductForm)

export default connect(mapStateToProps)(newProductReduxForm)