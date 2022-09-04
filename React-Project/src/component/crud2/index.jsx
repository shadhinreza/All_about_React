import React, {useState, useEffect} from 'react';
import axios from 'axios';

const URL = 'https://rest-api-without-db.herokuapp.com/users/';

const Index = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const getAllUsers = () => {
        axios.get(URL)
        .then(res => {
         if(!res.statusText){
             throw Error('Could not find data')
         }
         return res.data;
     })
     .then(data => {
         setUsers(data.users)
     })
     .catch(err => setError(err.message))
     .finally(() => {
         setIsLoading(false)
     })
    };
    
    useEffect(() => {
        getAllUsers();
    
    }, []);
    return (
        <div className='row'>
        <h2>User Management APP</h2>
          {isLoading && <h5>Loading...</h5>}
          {error && <h5>{error}</h5>}
          {users && 
            users.map(user => {
            const {id,username,email} = user;
              return(
              <article key={id} className='col-md-4 col-sm-6 bg-light p-5'>
                <p>{username}</p>
                <p>{email}</p>
                <button type='button' className='btn btn-info me-3'>Edit</button>
                <button type='button' className='btn btn-danger text-white'>Delete</button>
              </article>
              )
          })}
        </div>
    );
}

export default Index;
