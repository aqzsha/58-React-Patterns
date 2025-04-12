import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    //
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handleSelect = (user) => {
    setSelectedUser(user);
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
      <h1>User List (God Component)</h1>

      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => handleSelect(user)}
            style={{ cursor: 'pointer', margin: '5px 0' }}
          >
            {user.name}
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div style={{ marginTop: '1rem' }}>
          <h2>Selected User</h2>
          <p>
            <strong>Name:</strong> {selectedUser.name}
          </p>
          <p>
            <strong>Email:</strong> {selectedUser.email}
          </p>
          <p>
            <strong>City:</strong> {selectedUser.address.city}
          </p>
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
