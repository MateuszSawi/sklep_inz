import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import styles from '../MyAcc.module.scss';
import MyAccHeader from '../MyAccHeader'
import { apiK } from '../../../apiConfig';
import axios from 'axios';

const Orders = (props) => {

  useEffect(() => {
    // Pobierz token dostępu z localStorage
    const token = localStorage.getItem('accessToken');

    if (!token) {
      // Tutaj możesz obsłużyć brak tokenu, na przykład przekierować użytkownika do logowania
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Dodaj token jako nagłówek Authorization
    };

    const apiUrl = `${apiK}/orders`;

    // Wykonaj żądanie GET z nagłówkiem Authorization
    axios.get(apiUrl, { headers })
      .then((response) => {
        console.log(response.data.orders);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania adresów:', error);
      });
  }, []);

  return (
    <div className={styles.myAccount}>
        <MyAccHeader 
            activeTab={props.activeTab}
            setActiveTab={props.setActiveTab}
        />
        orders
      
    </div>
  );
};

export default Orders;
