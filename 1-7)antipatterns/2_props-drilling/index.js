import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const user = { name: 'Alice', email: 'alice@example.com' };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
      <h1>Props Drilling Example</h1>
      <Parent user={user} />
    </div>
  );
};

const Parent = ({ user }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '1rem' }}>
      <h2>Parent Component</h2>
      <Child user={user} />
    </div>
  );
};

const Child = ({ user }) => {
  return (
    <div
      style={{
        border: '1px solid lightgray',
        padding: '1rem',
        marginTop: '1rem',
      }}
    >
      <h3>Child Component</h3>
      <GrandChild user={user} />
    </div>
  );
};

const GrandChild = ({ user }) => {
  return (
    <div
      style={{ border: '1px dashed gray', padding: '1rem', marginTop: '1rem' }}
    >
      <h4>Grandchild Component</h4>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
