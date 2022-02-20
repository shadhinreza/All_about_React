import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Formikcontrol from './Formikcontrol';

const FormikContainer = () => {
  const dropdwon = [
    { key: 'Select an option', value: '' },
    { key: 'Bangladesh', value: 'Bangladesh' },
    { key: 'India', value: 'India' },
    { key: 'Nepal', value: 'Nepal' },
    { key: 'Pakisthan', value: 'Pakisthan' },
  ];
  const radioOptions = [
    { key: 'Male', value: 'Male' },
    { key: 'Female', value: 'Female' },
    { key: 'Other', value: 'Other' },
  ];
  const initialValues = { email: '', textarea: '', country: '', gender: '' };
  const validationSchema = Yup.object({
    email: Yup.string().email('Valid Email').required('Required'),
    textarea: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <Formikcontrol
            control='input'
            name='email'
            type='email'
            label='Email'
          />
          <Formikcontrol
            control='textarea'
            name='textarea'
            className='form-control'
            label='Message'
          />
          <Formikcontrol
            control='select'
            name='country'
            className='form-control'
            label='Country'
            options={dropdwon}
          />
          <Formikcontrol
            control='radio'
            name='gender'
            label='Gender'
            options={radioOptions}
          />
          <button
            className='mt-3 btn btn-primary'
            type='submit'
            //disabled={!(formik.dirty && formik.isValid)}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
