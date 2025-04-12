import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';

// === Создание контекста (глобального состояния) ===
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // глобальная тема
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// === Компоненты ===
const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(AppContext);
  return (
    <div style={{ marginBottom: '1rem' }}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme (currently {theme})
      </button>
    </div>
  );
};

const Header = () => {
  const { theme } = useContext(AppContext); // использует тему
  return (
    <h1 style={{ color: theme === 'dark' ? 'white' : 'black' }}>Header</h1>
  );
};

const Footer = () => {
  const { theme } = useContext(AppContext); // зависит от темы без нужды
  return (
    <p style={{ color: theme === 'dark' ? 'gray' : 'black' }}>
      I'm the footer. I don't care about theme but I’m coupled to it.
    </p>
  );
};

// === Главный компонент ===
const App = () => {
  return (
    <AppProvider>
      <div style={{ padding: '1rem' }}>
        <ThemeSwitcher />
        <Header />
        <Footer />
      </div>
    </AppProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
