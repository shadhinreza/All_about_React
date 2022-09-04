import React from 'react';

const ListItem = (props) => {
    return (
            <li 
            style={{listStyleType:'none',alignItems:'center', display:'flex', width:'90%'}}
            >
            <input checked={props.checked} type="checkbox" style={{ marginRight:'5px'}}/>
            <p style={{marginBottom:'3px'}}>{props.title}</p>
            <button style={{marginLeft: 'auto',marginTop:'8px'}}>Delete</button>
            </li>
        );
}

export default ListItem;
