import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';


import React from 'react';
import Header from './components/Header';
import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Header />  {/* Header with navigation links */}
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};


export default App;
