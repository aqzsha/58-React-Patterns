import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <ProductCard />
        <ProductCard />
      </main>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
