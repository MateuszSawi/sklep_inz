import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './AddToFavourite.module.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddToFavourite({ productCode, productName, price, mainImage, category }) {

  const toastId = React.useRef(null);

  const { categoryLink, productCodeLink } = useParams();

  const notify = () => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast("Dodano do ulubionych!", {
        progressStyle: { backgroundColor: 'green' },
        autoClose: 1000,
        toastId: toastId.current
      });
    } else {
      toast.update(toastId.current, {
        progressStyle: { backgroundColor: 'green' },
        autoClose: 1000
      });
    }
  };

  const handleAddToFavourites = (event) => {
    event.stopPropagation();
    notify();
  
    // const { productCode, productName, brand, gender, price, mainImage } = props.product;
  
    // Pobranie aktualnej listy ulubionych z localStorage
    const currentFavourites = JSON.parse(localStorage.getItem('favourite')) || [];
    
    // Sprawdzenie, czy produkt jest już w ulubionych
    const isProductInFavourites = currentFavourites.some(item => item.productCode === productCode);
  
    if (!isProductInFavourites) {
      // Dodanie nowego produktu do ulubionych
      const favouriteProduct = {
        productCode,
        productName,
        mainImage,
        price,
        category
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
