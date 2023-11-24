import React, { useState, useEffect } from 'react';
import styles from './LoginsMainPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Login from './AllAuth/Login/Login';

function LoginsMainPage(props) {

  const navigate = useNavigate();

  const redirectToRegistration = () => {
    navigate(`/sklep/rejestracja`);
  };

  const redirectToResetNewPassword = () => {
    navigate(`/sklep/resetuj-hasło`);
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