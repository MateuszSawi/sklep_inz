import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Footer from './components/footer/Footer';
import Privacy from './components/footer/policies/Privacy/Privacy';
import Cookies from './components/footer/policies/Cookies/Cookies';
import Order from './components/store/Cart/OrderButton/Order/Order';
import OrderFinish from './components/store/Cart/OrderButton/Order/Loading/OrderFinish/OrderFinish';
import Register from './components/Login/AllAuth/Register/Register';
import Login from './components/Login/AllAuth/Login/Login';
import MyAcc from './components/MyAcc/MyAcc';
import Orders from './components/MyAcc/components/Orders';
import ChangePass from './components/MyAcc/components/ChangePass';
import LogOut from './components/MyAcc/components/LogOut';
import MyData from './components/MyAcc/components/MyData';
import Cart from './components/store/Cart/Cart';
import Favorite from './components/store/Favorite/Favorite';
import HeaderStore from './components/store/HeaderStore/HeaderStore';
import StoreStartPage from './components/store/StoreStartPage/StoreStartPage';
import StoreProductsPage from './components/store/StoreProductsPage/StoreProductsPage';
import SingleProductMain from './components/store/SingleProductPage/SingleProductMain';

function App() {
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <div className='container'>
      <HeaderStore />
      <Routes>
        <Route path="/" element={<StoreStartPage />} />
        <Route path="/:category" element={<StoreProductsPage />} />
        <Route path=":category/:productCode" element={<SingleProductMain />} />
        <Route path="/koszyk" element={<Cart />} />
        <Route path="/ulubione" element={<Favorite />} />
        <Route path="/logowanie" element={<Login setActiveTab={setActiveTab} />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/moje-konto" element={<MyAcc 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />} />
        <Route path="/moje-konto/moje-dane" element={<MyData 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />} />
        <Route path="/moje-konto/zamówienia" element={<Orders 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />} />
        <Route path="/moje-konto/zmień-hasło" element={<ChangePass 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />} />
        <Route path="/moje-konto/wylogowywanie" element={<LogOut 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />} />
        <Route path="/zamówienie" element={<Order />} />
        <Route path="/przetwarzanie" element={<OrderFinish />} />
        <Route path="/polityka-prywatności" element={<Privacy />} />
        <Route path="/polityka-cookies" element={<Cookies />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
