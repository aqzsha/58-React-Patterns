import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';

// "Оптимизированная" функция, но без необходимости
const heavyComputation = (num) => {
  console.log('Running heavy computation...');
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += num * Math.random();
  }
  return result;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // Оптимизация без надобности — useMemo для быстрой функции
  const computed = useMemo(() => heavyComputation(count), [count]);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
      <h1>Premature Optimization</h1>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <p style={{ marginTop: '1rem' }}>
        <input
          placeholder="Type something"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </p>

      <p>Computed value (uselessly memoized): {computed.toFixed(2)}</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
