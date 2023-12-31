import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import MainPageStore from './components/store/MainPageStore';

import Footer from './components/footer/Footer';
import Privacy from './components/policies/Privacy/Privacy';
import Cookies from './components/policies/Cookies/Cookies';

import FooterRenox from './components/footerlogos/FooterRenox/FooterRenox';

import RegisterSuccessfull from './components/store/Login/AllAuth/Register/RegisterSuccessfull/RegisterSuccessfull';
import AfterRegister from './components/store/Login/AllAuth/Register/AfterRegister/AfterRegister';
import ResetSetNewPassword from './components/store/Login/AllAuth/ResetSetNewPassword/ResetSetNewPassword';

import Order from './components/store/Cart/OrderButton/Order/Order';
import Loading from './components/store/Cart/OrderButton/Order/Loading/Loading';
import Payment from './components/store/Cart/OrderButton/Order/Loading/Payment/Payment';

// import Register from './Login/AllAuth/Register/Register';
// import RegisterSuccessfull from './Login/AllAuth/Register/RegisterSuccessfull/RegisterSuccessfull';
// import ResetPassword from './Login/AllAuth/ResetPassword/ResetPassword';
// import ResetSetNewPassword from './Login/AllAuth/ResetSetNewPassword/ResetSetNewPassword'
// import ChangePassword from './Login/AllAuth/ChangePassword/ChangePassword';
// import LoginsMainPage from './Login/LoginsMainPage';

import Cart from './components/store/Cart/Cart';
import Favorite from './components/store/Favorite/Favorite';

import HeaderStore from './components/store/HeaderStore/HeaderStore';
import StoreStartPage from './components/store/StoreStartPage/StoreStartPage';
import StoreProductsPage from './components/store/StoreProductsPage/StoreProductsPage';
import SingleProductMain from './components/store/SingleProductPage/SingleProductMain';

function App() {

  return (
    <div className='container'>

      <HeaderStore />

      <Routes>
        <Route path="/" element={<StoreStartPage />} />

        <Route path="/:category" element={<StoreProductsPage />} />

        <Route path=":category/:productCode" element={<SingleProductMain />} />

        <Route path="/zarejestrowano" element={<AfterRegister />} />
        <Route path="/activate/:userId/:token" element={<RegisterSuccessfull />} />
        <Route path="/password_reset/:userId/:token" element={<ResetSetNewPassword />} />  

        <Route path="/koszyk" element={<Cart />} />
        <Route path="/ulubione" element={<Favorite />} />

        {/* <Route path="/logowanie" element={<LoginsMainPage />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/resetuj-hasło" element={<ResetPassword />} />
        <Route path="/zmiana-hasła" element={<ChangePassword />} />      */}

        <Route path="/zamówienie" element={<Order />} />

        <Route path="/przetwarzanie" element={<Loading />} />

        <Route path="/polityka-prywatności" element={<Privacy />} />
        <Route path="/polityka-cookies" element={<Cookies />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
