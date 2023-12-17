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


