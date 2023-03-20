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
import HomeModal from './components/HomeModal';
import Message from './components/Message';
import Geolocation from './components/Geolocation';
import ToDoList from './components/ToDoList';
import Categories from './components/Categories';
import Brands from './components/Brands'
import PopularToday from './components/PopularToday';


function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        {/* <div style={{height:"2200px"}}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HomeModal" element={<HomeModal />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Employee List" element={<ListingEmployees />} />
          <Route path="/Calculator" element={<Result />} />
          <Route path="/Message" element={<Message/>}/>
          <Route path="/ToDoList" element={<ToDoList/>}/>
          <Route path="/Geolocation" element={<Geolocation/>}/>
          <Route path="/Categories" element={<Categories/>}/>
          <Route path="/Brands" element={<Brands/>}/>
          <Route path="/PopularToday" element={<PopularToday/>}/>

        </Routes>
        {/* </div> */}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
