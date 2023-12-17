import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../MyAccountButtons.module.scss';

function UsersButton(props) {

  const navigate = useNavigate();

  const clickHandler = () => {
    // props.setTab('users')
    navigate(`/sklep/moje-konto/wszyscy-użytkownicy`);
  }

  return (
    <button 
      className={styles.button} 
      onClick={() => {
      clickHandler();
    }}>
      Użytkownicy
    </button>
  );
}

export default UsersButton;


