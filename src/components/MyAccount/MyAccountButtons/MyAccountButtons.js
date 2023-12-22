import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Routes, Route, useMatch } from 'react-router-dom';
import styles from './MyAccountButtons.module.scss';

import LogOut from './LogOut/LogOut'
import OrdersButton from './OrdersButton/OrdersButton'
import ProductsButton from './ProductsButton/ProductsButton'
import UsersButton from './UsersButton/UsersButton'
import MyAccountButton from './MyAccountButton/MyAccountButton'

function MyAccountButtons(props) {

  axios.get(`${apiK}/auth/checksession`, {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      console.log(response.data)

    })
    .catch((error) => {
      console.error(error);
    });


  return (
    <div className={styles.container} >

      <MyAccountButton 
        setTab={props.setTab} 
      />

      <OrdersButton 
        setTab={props.setTab} 
      />

      <UsersButton 
        setTab={props.setTab} 
      />

      <ProductsButton 
        setTab={props.setTab} 
      />

      <LogOut 
        setTab={props.setTab} 
      />
    </div>
  );
}

export default MyAccountButtons;


