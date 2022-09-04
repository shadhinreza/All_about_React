import React, {useState,useContext} from 'react';
import {Form,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {UserContext} from './UserProvider'


const Createuser = () => {
    const [Newusers, setnewUser] = useState({
        id:'',
        name: '',
        position: '',
        sallery: ''
      });
    const [users, setUsers] = useContext(UserContext)
    const {id,name,position,sallery} = Newusers;
    const ChangeValue = (e) => {
        const name = e.target.name;
        setnewUser((preValue) => {
           return { ...preValue, [name]: e.target.value}
        })
    }
    const addUser = (e) => {
        e.preventDefault();
        setUsers([...users, Newusers])
        
        setnewUser({id:'', name:'', position:'', sallery:''})
    }
  return (
    <div className='offset-2 col-md-6'>
      <Form onSubmit={addUser}>
        <Form.Group className='mb-3' controlId='formUserId'>
          <Form.Label>ID: </Form.Label>
          <Form.Control type='text' name='id' placeholder='Enter your Id' onChange={ChangeValue} value={id} required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formUserName'>
          <Form.Label>Name: </Form.Label>
          <Form.Control type='text' name='name' placeholder='Enter your Name' onChange={ChangeValue} value={name} required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formUserPosition'>
          <Form.Label>Position: </Form.Label>
          <Form.Control type='text' name='position' placeholder='Enter your position' value={position} onChange={ChangeValue} required />
        </Form.Group>  
        <Form.Group className='mb-3' controlId='formBasicSellery'>
          <Form.Label>Sallery</Form.Label>
          <Form.Control type='text' name='sallery' placeholder='Enter sallery amount' value={sallery} onChange={ChangeValue} required />
        </Form.Group>
        <Button variant='primary' className='me-2' type='submit'>
          Create User
        </Button>
        <Link to='/'>
        <Button variant='info' type='button'>
          Back to Home
        </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Createuser;
