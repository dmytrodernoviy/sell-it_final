import React from 'react'

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <React.Fragment>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </React.Fragment>
)