import React from 'react';
import UseCustomHook from './UseCustomHook';

const Maincustomhook = () => {
  const [firstName, bindingFirst, resetingFirst] = UseCustomHook('');
  const [lastName, bindingLast, resetingLast] = UseCustomHook('');
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`${firstName} ${lastName}`);
    resetingFirst();
    resetingLast();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='col-md-4 mb-3'>
          <label htmlFor='firstName' className='form-label'>
            FirstName:{' '}
          </label>
          <input
            type='text'
            {...bindingFirst}
            id='firstName'
            className='form-control'
            placeholder='Enter first name'
          />
        </div>
        <div className='col-md-4'>
          <label htmlFor='lastName' className='form-label'>
            LastName:{' '}
          </label>
          <input
            type='text'
            {...bindingLast}
            className='form-control'
            id='firstName'
            placeholder='Enter last name'
          />
        </div>
        <br />
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Maincustomhook;
