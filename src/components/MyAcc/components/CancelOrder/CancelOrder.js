import React from 'react';
import { apiK } from '../../../../apiConfig';
import axios from 'axios';

const CancelOrder = ({id, setButton, button}) => {

  const cancel = () => {
    const token = localStorage.getItem('accessToken');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
    const apiUrl = `${apiK}/orders/${id}/cancel`;
    axios.get(apiUrl, { headers })
      .then(() => {
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
    >
      Anuluj zamówienie
    </button>
  );
};

export default CancelOrder;
