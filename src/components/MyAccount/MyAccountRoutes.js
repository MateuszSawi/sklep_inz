import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Routes, Route, useMatch } from 'react-router-dom';

import MyAccountButtons from './MyAccountButtons/MyAccountButtons'

import Users from './Users/Users'
import AllOrders from './AllOrders/AllOrders'
import Products from './Products/Products'
import MyAccount from './MyAccount/MyAccount'

function MyAccountRoutes() {

  const navigate = useNavigate();

  const [tab, setTab] = useState('');

  const [email, setEmail] = useState('');

  // axios.get(`${apiK}/auth/checksession`, {
  //   withCredentials: true,
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then((response) => {
  //   setEmail(response.data.login)

  //   if (!response.data.isLoggedIn) {
  //     navigate('/');
  //   }
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

  //

  // axios.get(`${apiK}/staff/showorders`, {       // zamowienia tego konkretnego usera
  //   withCredentials: true,
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then((response) => {
  //   // console.log(response)
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

  // axios.post(`${apiK}/staff/showorders`,{
  //   email: 'sgf27499@omeie.com'
  // },
  // {       // zamowienia tego konkretnego usera
  //   withCredentials: true,
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then((response) => {
  //   // console.log(response)
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

  return (
    <div>     
      <MyAccountButtons
        // setTab={setTab}
      />

      <Routes>
        <Route path="/" element={<MyAccount />} />
        <Route path="/wszyscy-użytkownicy" element={<Users />} />
        <Route path="/wszystkie-zamówienia" element={<AllOrders />} />
        <Route path="/produkty" element={<Products />} />
      </Routes>
      
    </div>
  );
}

export default MyAccountRoutes;