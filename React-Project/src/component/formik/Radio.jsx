import React from 'react';
import {Field, ErrorMessage } from 'formik';
import Texterror from './Texterror';


const Radio = (props) => {
    const {label, name, options, ...test} = props
    return (
        <div className='col-md-5'>
            <label className='form-label' htmlFor={name}>{label} :  </label>
            <Field name={name} {...test}>
                {({field}) => {
                    return options.map(option =>{
                        return(
                            <div key={option.key} className='form-check form-check-inline mt-3 ms-1'>
                                <input type="radio" id={option.value} 
                                {...field} value={option.value} className='form-check-input' checked={field.value === option.value}/>
                                 <label className='form-check-label' htmlFor={option.value}>{option.key}</label>               
                            </div>
                        )
                    })
                }}
            </Field>
            <ErrorMessage name={name} component={Texterror}/>
        </div>
    );
}

export default Radio;
