import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useLocation } from 'react-router-dom';

function App() {
  //const location = useLocation();
  return (
    <Router>
      <Navbar />
      <div className="container"><Hero /></div>
      
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
    
  );
}

function Home() {
  return <div>Home Page</div>;
}

function About() {
  return <div>About Page</div>;
}

function Blog() {
  return <div>Blog Page</div>;
}

export default App;
