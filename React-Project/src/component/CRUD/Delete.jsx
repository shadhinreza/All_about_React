import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./UserProvider";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";


const Delete = () => {
  const [users, setUsers] = useContext(UserContext); 
  const { id } = useParams();

  const deleteUser = (id) => {
    const user = users.filter((user) => user.id != id);
    setUsers([...user]);
  };

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/">
            <Button className="me-2" variant="info">Cancel</Button>
            <Button onClick={() => deleteUser(id)} variant="danger">
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Delete;