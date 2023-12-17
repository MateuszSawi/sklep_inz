import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../MyAccountButtons.module.scss';

function LogOut() {

  const navigate = useNavigate();

  const logOut = () => {
    axios.post(`${apiK}/auth/logout`, {}, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response.data)
      navigate('/');
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <button 
      className={styles.button} 
      onClick={() => {
      logOut();
    }}>
      Wyloguj
    </button>
  );
}

export default LogOut;


