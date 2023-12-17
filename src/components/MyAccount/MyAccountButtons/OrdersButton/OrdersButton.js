import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../MyAccountButtons.module.scss';

function OrdersButton(props) {

  const navigate = useNavigate();

  const clickHandler = () => {
    props.setTab('orders')
  }

  return (
    <button 
      className={styles.button} 
      onClick={() => {
      clickHandler();
    }}>
      Zamówienia
    </button>
  );
}

export default OrdersButton;


