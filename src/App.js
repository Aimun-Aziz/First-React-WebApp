import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ContactUs from './components/ContactUs';
import Counter from './components/Counter';
import Result from './components/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import ListingEmployees from './components/ListingEmployees';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div style={{height:"2200px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Employee List" element={<ListingEmployees />} />
          <Route path="/Calculator" element={<Result />} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
