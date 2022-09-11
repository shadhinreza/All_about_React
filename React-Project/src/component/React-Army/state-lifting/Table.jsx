import React,{useState} from 'react';

const Table = ({indexState}) => {
    const [filter, setFilter] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const handleFilter = (e) => {
        setFilter(e.target.value);
    }
    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }
    const searchCallBack = (indexState) => indexState.name.includes(searchValue.toLowerCase() || indexState.email.includes(searchValue.toLowerCase()));

    let filterContacts = [];
    if(filter === 'all'){
        filterContacts = searchValue ? indexState.filter(searchCallBack) : indexState;
    }else{
        filterContacts= indexState.filter(contact => contact.group === filter && searchCallBack(indexState));
    }
    
    if(searchValue){
        filterContacts = filterContacts.filter(contact => contact.name.includes(searchValue.toLowerCase()) || contact.email.includes(searchValue.toLowerCase()))
    }
    const style = {
        display: 'flex',
        justifyContent: 'spaceBetween',
        gap: '1rem',
        marginTop: '30px'
    }
    return (
        <>
            <div style={style}>
                Filters: 
                <select class="form-select" value={filter} onChange={handleFilter}>
                    <option selected value="all">All</option>
                    <option value="none">None</option>
                    <option value="office">Office</option>
                    <option value="employer">Employer</option>
                </select>
                <input id="search-input" type="search" class="form-control" placeholder='Search...' value={searchValue} onChange={handleSearch} />
            </div>
            <br />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Group</th>
                    </tr>
                </thead>
                <tbody> 
                    {filterContacts.map((trBody,index) => (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{trBody.name}</td>
                        <td>{trBody.email}</td>
                        <td>{trBody.group}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </>
    );
}

export default Table;
