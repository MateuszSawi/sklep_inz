import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../MyAccountButtons.module.scss';

function ProductsButton(props) {

  const navigate = useNavigate();

  const clickHandler = () => {
    // props.setTab('products')
    navigate(`/sklep/moje-konto/produkty`);
  }

  return (
    <button 
      className={styles.button} 
      onClick={() => {
      clickHandler();
    }}>
      Produkty
    </button>
  );
}

export default ProductsButton;


