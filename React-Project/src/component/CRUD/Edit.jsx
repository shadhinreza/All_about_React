import React, {useState,useContext,useEffect } from 'react';
import { UserContext } from './UserProvider';
import {Form,Button} from 'react-bootstrap'
import { Link,useParams } from 'react-router-dom';

const Edit = () => {
  const [users, setUsers] = useContext(UserContext);
  const {id} = useParams();
  const user = users.filter(user => user.id == id);
  const [editValue, setEditValue] = useState({
    name : '',
    position: '',
    sallery: ''
  })
  const {name, position, sallery} = editValue;
 
  const ValueChangeHandler = (e) =>{
    const name = e.target.name;
    setEditValue((preValue) => {
      return { ...preValue, [name]: e.target.value}
   })
  }
  useEffect(() => {
    user[0].name = name;
    user[0].position = position;
    user[0].sallery = sallery;
    
  }, [name,position,sallery]);
  const editedUser = (e) => {
    e.preventDefault();
    setUsers([...users]);
  }
  return (
    <div className='offset-3 col-md-6'>
      <Form>
        <Form.Group className='mb-3' controlId={user[0].id}>
          <Form.Label>ID: {user[0].id} </Form.Label>
        </Form.Group>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder={user[0].name}
            onChange={ValueChangeHandler}
            value={name}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='position'>
          <Form.Label>Position: </Form.Label>
          <Form.Control
            type='text'
            name='position'
            placeholder={user[0].position}
            value={position}
            onChange={ValueChangeHandler}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='sallery'>
          <Form.Label>Sallery:</Form.Label>
          <Form.Control
            type='text '
            name='sallery'
            placeholder={user[0].sallery}
            value={sallery}
            onChange={ValueChangeHandler}
            required
          />
        </Form.Group>
        <Link to='/'>
        <Button onSubmit={() => editedUser} variant='primary' className='me-2' type='submit'>
          Save
        </Button>
          <Button variant='info' type='button'>
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Edit;
