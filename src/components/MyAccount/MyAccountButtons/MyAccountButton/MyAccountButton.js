import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../MyAccountButtons.module.scss';

function MyAccountButton(props) {

  const navigate = useNavigate();

  const clickHandler = () => {
    // props.setTab('')
    navigate(`/sklep/moje-konto/`);
  }

  return (
    <button 
      className={styles.button} 
      onClick={() => {
      clickHandler();
    }}>
      Moje konto
    </button>
  );
}

export default MyAccountButton;


