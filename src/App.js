// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import DogSupplies from './pages/DogSupplies';
import CatSupplies from './pages/CatSupplies';
import BirdSupplies from './pages/BirdSupplies';
import FishSupplies from './pages/FishSupplies';
import SmallPets from './pages/SmallPets';
import Service from './pages/Service';
import ServiceGrooming from './pages/ServiceGrooming';
import ServiceTraining from './pages/ServiceTraining';
import ServiceVeterinary from './pages/ServiceVeterinary';
import ServiceBoarding from './pages/ServiceBoarding';
import About from './pages/About';
import Contact from './pages/Contact';
import WhatsAppChat from './Components/WhatsAppChat';
import BackToTop from './Components/BackToTop';
import './App.css';
import SearchResults from './pages/SearchResults';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/dog-supplies" element={<DogSupplies />} />
          <Route path="/products/cat-supplies" element={<CatSupplies />} />
          <Route path="/products/bird-supplies" element={<BirdSupplies />} />
          <Route path="/products/fish-supplies" element={<FishSupplies />} />
          <Route path="/products/small-pets" element={<SmallPets />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/grooming" element={<ServiceGrooming />} />
          <Route path="/service/training" element={<ServiceTraining />} />
          <Route path="/service/veterinary" element={<ServiceVeterinary />} />
          <Route path="/service/boarding" element={<ServiceBoarding />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
          
        </Routes>
        <Footer/>
        <WhatsAppChat />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
