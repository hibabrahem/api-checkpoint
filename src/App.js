import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => setUsers(response.data))

    }, []);

    return (
        <div>
            <h1>Hello</h1>
            {users.map(user => <div style={{ display: 'flex', gap: '10px' }}><h2 key={user.id}>{user.name}</h2> <h2>{user.email}</h2></div>)}
        </div>
    );
}

export default App;
