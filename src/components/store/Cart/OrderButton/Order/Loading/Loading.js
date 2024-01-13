import React from 'react';
// import styles from '../Order.module.scss';
// import axios from 'axios';
import { apiK } from '../../../../../../apiConfig';
import { useNavigate } from 'react-router-dom';

const Loading = ({products}) => {
  const mainAddressId = localStorage.getItem('mainAddressId');
  const navigate = useNavigate();
  
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

      } else {
        console.error('Błąd podczas usuwania adresu:', response.statusText);
      }
    } catch (error) {
      console.error('Błąd podczas usuwania adresu:', error);
    }

    navigate('/przetwarzanie');
  };

  return (
    <>
    {(mainAddressId === '' || !mainAddressId) ? (
      <p style={{margin: '20px 0 0 0', color: 'red'}}>Wybierz adres dostawy</p>
    ) : (
      <button 
        style={{margin: '20px 0 0 0'}}
        onClick={() => order()}
      >Złóż zamówienie </button>
    )}
    </>
  );
};

export default Loading;