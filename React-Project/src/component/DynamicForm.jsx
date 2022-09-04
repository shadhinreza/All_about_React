import React, {useState} from 'react';

const formFields = {
  name: {
    type: 'text',
    placeholder: 'type your name',
    label: 'What is your name?',
  },
  email: {
    type: 'email',
    placeholder: 'example@gmail.com',
    label: 'What is your Eamil?',
  },
  phone: {
    type: 'tel',
    placeholder: 'type your phone no',
    label: 'What is your phone no?',
  },
};

const objt0obj = (obj) => {
    return Object.keys(obj).reduce((acc,cur) => {
       acc[cur] = {
        ...obj[cur],
        value: ''
       }
       return acc
    },{})
}

const objtoarray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

const DynamicForm = () => {
  const [formState, setFormState] = useState(objt0obj(formFields));
  const formdata = objtoarray(formState);
  const handleValue = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: { 
        ...formState[e.target.name],
        value: e.target.value
      }
    })
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.keys(formState).reduce((acc, cur) => {
        acc[cur] = formState[cur].value;
        return acc;
    },{})
    console.log(values)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {formdata.map((newobj, index) => (
        <div key={index}>
          <label htmlFor={newobj.label}>{newobj.label} </label>
          <input type={newobj.type} name={newobj.name} placeholder={newobj.placeholder} value={newobj.value} onChange={handleValue} />
        </div>
      ))}
      <button type='submit'>Submit</button>
    </form>
  );
};
export default DynamicForm;
