import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Header from './components/website/Header/Header';
import MainPage from './components/website/MainPage/MainPage';
import Service from './components/website/Service/Service';
import News from './components/website/News/News';
import Offer from './components/website/Offer/Offer';
import Contact from './components/website/Contact/Contact';
import MainPageStore from './components/store/MainPageStore';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='container'>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/serwis" element={<Service />} />
        <Route path="/aktualności" element={<News />} />
        <Route path="/oferta" element={<Offer />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/sklep/*" element={<MainPageStore />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
