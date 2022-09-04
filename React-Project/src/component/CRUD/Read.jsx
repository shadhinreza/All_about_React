import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './UserProvider';
import { Card,Button } from 'react-bootstrap';

const Read = () => {
  const [users] = useContext(UserContext);
  const { id } = useParams();
  const user = users.filter(user => (user.id == id));
  return (
    <div className='offset-4 col-md-4'>
      <Card style={{ width: '20rem' }}>
        <Card.Body className='bg-light'>
          <Card.Title>ID : {user[0].id}</Card.Title>
          <Card.Text>
            Name : {user[0].name}
          </Card.Text>
          <Card.Text>
            Position : {user[0].position}
          </Card.Text>
          <Card.Text>
            Sallery : {user[0].sallery}
          </Card.Text>
          <Link to='/'>
          <Button variant="info">Back to home</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Read;
