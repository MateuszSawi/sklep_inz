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
import Privacy from './components/policies/Privacy/Privacy';
import Cookies from './components/policies/Cookies/Cookies';

import FooterRenox from './components/footerlogos/FooterRenox/FooterRenox';
import FooterCometweb from './components/footerlogos/FooterCometweb/FooterCometweb';

import RegisterSuccessfull from './components/store/Login/AllAuth/Register/RegisterSuccessfull/RegisterSuccessfull';
import AfterRegister from './components/store/Login/AllAuth/Register/AfterRegister/AfterRegister';
import ResetSetNewPassword from './components/store/Login/AllAuth/ResetSetNewPassword/ResetSetNewPassword';

import Order from './components/store/Cart/OrderButton/Order/Order';
import Loading from './components/store/Cart/OrderButton/Order/Loading/Loading';
import Payment from './components/store/Cart/OrderButton/Order/Loading/Payment/Payment';

import MyAccount from './components/MyAccount/MyAccount';

function App() {

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  console.log(selectedPaymentMethod)

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

        <Route path="/zarejestrowano" element={<AfterRegister />} />
        <Route path="/auth/activate/:userId/:token" element={<RegisterSuccessfull />} />
        <Route path="/auth/password_reset/:userId/:token" element={<ResetSetNewPassword />} />
        
        <Route path="/polityka-prywatności" element={<Privacy />} />
        <Route path="/polityka-cookies" element={<Cookies />} />

        <Route path="/zamówienie" element={<Order 
          setSelectedPaymentMethod={setSelectedPaymentMethod}
          selectedPaymentMethod={selectedPaymentMethod}
        />} />

        <Route path="/przetwarzanie" element={<Loading 
          selectedPaymentMethod={selectedPaymentMethod}
        />} />

        <Route path="/płatność" element={<Payment />} />

        <Route path="/moje-konto" element={<MyAccount />} />
        
      </Routes>

      <Footer />
      {/* <FooterRenox /> */}
      <FooterCometweb />

    </div>
  );
}

export default App;
