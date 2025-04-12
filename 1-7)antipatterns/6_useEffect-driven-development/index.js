import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [input, setInput] = useState('');
  const [length, setLength] = useState(0);

  // ❌ Неэффективный способ обновлять derived state через useEffect
  useEffect(() => {
    setLength(input.length);
  }, [input]);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
      <h1>useEffect-Driven Development</h1>
      <input
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '0.5rem', width: '200px' }}
      />
      <p>Length of input: {length}</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
