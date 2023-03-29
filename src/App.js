import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import GenerateSummary from "./components/GenerateSummary";
import Footer from "./components/Footer";

const App = () => {
  return (
    // Routes are defined here
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/GenerateSummary" exact element={<GenerateSummary />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
