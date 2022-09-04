import React, {useState, createContext } from 'react';
import {Users} from './UserData.js'

export const UserContext = createContext();


export const UserProvider = (props) => {
    const [users, setUsers] = useState(Users);
    return (
        <UserContext.Provider value={[users, setUsers]}>
          {props.children}
        </UserContext.Provider>
      );
}

