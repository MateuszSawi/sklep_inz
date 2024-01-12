import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import styles from '../Orders.module.scss';
// import MyAccHeader from '../MyAccHeader'
import { apiK } from '../../../../apiConfig';
import axios from 'axios';

const CancelOrder = ({id, setButton, button}) => {

  const cancel = () => {
    // Pobierz token dostępu z localStorage
    const token = localStorage.getItem('accessToken');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Dodaj token jako nagłówek Authorization
    };
    const apiUrl = `${apiK}/orders/${id}/cancel`;
    console.log(apiUrl)

    // Wykonaj żądanie GET z nagłówkiem Authorization
    axios.get(apiUrl, { headers })
      .then((response) => {
        setButton(!button)
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania adresów:', error);
      });
  }

  return (
    <button 
      style={{margin: '20px 0 0 0', backgroundColor: 'gray'}}
      onClick={() => cancel()}
    >Anuluj zamówienie</button>
  );
};

export default CancelOrder;
