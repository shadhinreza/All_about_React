import React,{useContext} from 'react';
import { Table,ButtonGroup,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {UserContext} from './UserProvider';

const Tabledata = () => {
  const [users] = useContext(UserContext);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Sallery</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => (
            <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.position}</td>
            <td>{user.sallery}</td>
            <td>
                <ButtonGroup aria-label="Basic example">
                <Link to={`read/${user.id}`}>
                    <Button className='me-2' variant="success">View</Button>
                </Link>
                <Link to={`edit/${user.id}`}>
                    <Button className='me-2' variant="primary">Edit</Button>
                </Link>
                <Link to={`delete/${user.id}`}>
                    <Button variant="danger">Delete</Button>
                  </Link>
                </ButtonGroup>
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabledata;
