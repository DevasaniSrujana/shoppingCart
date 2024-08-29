import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import AddedCart from './components/AddedCart';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<AddedCart />} />
      </Routes>
    </Router>
  );
};

export default App;