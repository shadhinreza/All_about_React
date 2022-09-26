import React from 'react';
//import { useState, useEffect } from 'react';
import useFetchData from './useFetchData';

const IndexfetchData = () => {
    const users = useFetchData('https://jsonplaceholder.typicode.com/users', (data) => data.map(item => ({id: item.id, name: item.name})))
    const posts = useFetchData('https://jsonplaceholder.typicode.com/posts')

 


    // const [users, setUsers] = useState([]);
    // const [userLoading, setUserLoading] = useState(false);
    // const [userError, setUserError] = useState('');
    // const [posts, setPosts] = useState([]);
    // const [postsLoading, setPostsLoading] = useState(false);
    // const [postsError, setPostsError] = useState('');

    // useEffect(() => {
    //     fetchUser();
    //     fetchPosts();

    // }, []);

    // const fetchUser = async () => {
    //     setUserLoading(true);
    //     try{
    //         let response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     let data = await response.json()
    //     setUsers(data)
    //     setUserLoading(false);
    //     setUserError('');
    //     }
    //     catch(err){
    //         setUserError(err.message);
    //         setUserLoading(false)
    //     }
    // }
    // const fetchPosts = async () => {
    //     setPostsLoading(true);
    //     try{
    //         let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     let data = await response.json()
    //     setPosts(data)
    //     setPostsLoading(false);
    //     setPostsError('');
    //     }
    //     catch(err){
    //         setPostsError(err.message);
    //         setPostsLoading(false)
    //     }
    // }
    return (
        <div style={{
            width: '800px',
            display: 'flex',
            gap: 2,
            justifyContent: 'space-between',
            marginLeft: '50px'
        }}>
        <div>
            <h1>Users</h1>
            <hr />
            {users.loading && <h3>Loading...</h3>}
            {users.err && <h3>{users.err}</h3>}
            {Array.isArray(users.data) && users.data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </div>
        <div>
            <h1>Posts</h1>
            <hr />
            {posts.loading && <h3>Loading...</h3>}
            {posts.err && <h3>{posts.err}</h3>}
            {Array.isArray(posts.data) && posts.data.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </div>
        <div>
            <h1>Comments</h1>
            <hr />
        </div>
            
        </div>
    );
}

export default IndexfetchData;
