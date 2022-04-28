import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete the user?')
        if (proceed) {
            console.log('deleting the user: ', id)
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <h2>This is home</h2>
            <h4>Available users: {users.length}</h4>
            <ol>
                {
                    users.map(user => <li key={user._id}>{user.name}:: {user.email}
                        <button onClick={() => handleUserDelete(user._id)}>X</button>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default Home;