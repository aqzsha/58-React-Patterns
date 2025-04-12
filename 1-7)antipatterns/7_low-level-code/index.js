import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  useEffect(() => {
    // ❌ Низкоуровневая манипуляция DOM
    const box = document.querySelector('#box');
    box.innerHTML = '<strong>Modified!</strong>';
    box.setAttribute('style', 'background: yellow; padding: 10px');
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
      <h1>Low-Level DOM Manipulation (Anti-pattern)</h1>
      <div id="box">Original Content</div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
