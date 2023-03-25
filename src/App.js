import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import TestUpload from './components/TestUpload';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>

      {/* Header component will show on all pages */}
      <Header />

      <Routes>
        {/* Home component will show on home page */}
        <Route path='/' exact element={
          <Home />
        }
        />
        
        {/* Add generate summary component */}
        <Route path='/TestUpload' exact element = {<TestUpload />} />

      </Routes>   
      <Footer />
    </Router>
  );
}

export default App;

//fix envelope issue: export NODE_OPTIONS=--openssl-legacy-provider