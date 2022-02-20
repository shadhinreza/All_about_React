import React from 'react';
import { Field, ErrorMessage } from 'formik';
import Texterror from './Texterror';

const Input = (props) => {
    const {label, name, ...test} = props
    return (
        <div className='col-md-4'>
            <label className='form-label' htmlFor={name}>{label} : </label>
            <Field className='form-control' id={name} name={name} {...test} />
            <ErrorMessage name={name} component={Texterror}/>
        </div>
    );
}

export default Input;
