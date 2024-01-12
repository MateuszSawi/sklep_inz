import React, { useState, useEffect } from 'react';
import styles from '../Order.module.scss';
import axios from 'axios';
import { apiK } from '../../../../../../apiConfig';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Payment/Payment';

const Loading = ({products}) => {

  const mainAddressId = localStorage.getItem('mainAddressId');

  console.log(products)


  const order = async () => {
    const token = localStorage.getItem('accessToken');
    const apiUrl = `${apiK}/orders`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
    const addressId = mainAddressId;
    const productItemDetailsDtoList = products;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          addressId,
          productItemDetailsDtoList
        }),
        headers
      });

      if (response.ok) {
        // Pomyślnie usunięto adres, możesz odświeżyć listę adresów
        // np. pobierając ponownie dane z serwera.
      } else {
        console.error('Błąd podczas usuwania adresu:', response.statusText);
      }
    } catch (error) {
      console.error('Błąd podczas usuwania adresu:', error);
    }
  };




  
  return (
    <button 
      style={{margin: '20px 0 0 0'}}
      onClick={() => order()}
    >Złóż zamówienie </button>
  );
};

export default Loading;