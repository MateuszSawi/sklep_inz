import React, { useState, useEffect } from 'react';
import styles from './LoginsMainPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Login from './AllAuth/Login/Login';
import axios from 'axios';
import { apiK, apiP } from '../../../apiConfig';

function LoginsMainPage(props) {

  const navigate = useNavigate();

  const redirectToRegistration = () => {
    navigate(`/sklep/rejestracja`);
  };

  const redirectToResetNewPassword = () => {
    navigate(`/sklep/resetuj-hasło`);
  };

  //

  useEffect(() => {
    handleCheckSession();
  }, []);

  const handleCheckSession = () => {
    // event.preventDefault();
    axios.get(`${apiK}/auth/checksession`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response.data)

        // props.setAuthorities(response.data.authorities);

        if (response.data.isLoggedIn) {
          navigate('/moje-konto');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.container}>

      <Login />
      
      <div className={styles.registerWrapper}>
        <p>Jeśli nie masz konta&nbsp;</p>
        <div className={styles.link} onClick={() => redirectToRegistration()}>
          <p> zarejestruj się</p>
        </div>
      </div>

      <div className={styles.registerWrapper}>
        <p>Zapomniałeś hasła?&nbsp;</p>
        <div className={styles.link} onClick={() => redirectToResetNewPassword()}>
          <p>Zresetuj hasło</p>
        </div>
      </div>
    
    </div>
  );
}

export default LoginsMainPage;