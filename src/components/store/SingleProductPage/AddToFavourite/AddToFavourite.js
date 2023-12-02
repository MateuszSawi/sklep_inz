import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './AddToFavourite.module.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

function AddToFavourite(props) {

  let category = props.category;
  let subcategory = props.subcategory;

  const handleAddToFavourites = (event) => {
    event.stopPropagation();
  
    const { product_id, price_netto, price_brutto, product_name, primary_link, quantity } = props.product;
  
    // Pobranie aktualnej listy ulubionych z localStorage
    const currentFavourites = JSON.parse(localStorage.getItem('favourite')) || [];
    
    // Sprawdzenie, czy produkt jest już w ulubionych
    const isProductInFavourites = currentFavourites.some(item => item.product_id === product_id);
  
    if (!isProductInFavourites) {
      // Dodanie nowego produktu do ulubionych
      const favouriteProduct = {
        product_id,
        product_name,
        price_netto,
        price_brutto,
        primary_link,
        category,
        subcategory,
        quantity
      };
      currentFavourites.push(favouriteProduct);
  
      localStorage.setItem('favourite', JSON.stringify(currentFavourites));
    }
  };

  return (
    <div className={styles.addToFavourite}>
      <button 
        onClick={(event) => handleAddToFavourites(event)}
      >
        <FontAwesomeIcon icon={faHeart} className={styles.iconHeart} />
        <p>Dodaj do ulubionych</p>
      </button>
    </div>
  );
}

export default AddToFavourite;
