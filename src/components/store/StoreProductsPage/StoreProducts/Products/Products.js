import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './Products.module.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products(props) {

  const { category } = useParams();

  const generateToastIdFavourite = (prefix, productId) => `${prefix}-${productId}`;
  const generateToastIdCart = (prefix, productId) => `${prefix}-${productId}`;

  const notifyFavourite = () => {
    if (!toast.isActive(generateToastIdFavourite.current)) {
      generateToastIdFavourite.current = toast("Dodano do ulubionych!", {
        progressStyle: { backgroundColor: 'green' },
        autoClose: 1000,
        toastId: generateToastIdFavourite.current
      });
    } else {
      toast.update(generateToastIdFavourite.current, {
        progressStyle: { backgroundColor: 'green' },
        autoClose: 1000
      });
    }
  };

  const notifyCart = () => {
    if (!toast.isActive(generateToastIdCart.current)) {
      generateToastIdCart.current = toast("Dodano do koszyka!", {
        progressStyle: { backgroundColor: 'green' },
        autoClose: 1000,
        toastId: generateToastIdCart.current
      });
    } else {
      toast.update(generateToastIdCart.current, {
        progressStyle: { backgroundColor: 'green' },
        autoClose: 1000
      });
    }
  };

  const navigate = useNavigate();

  const handleLinkClick = (productCode) => {
      navigate(`/${category}/${productCode}`);
  };

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
  
    const { productCode, name, price, imageUrls } = product;
    const maxQuantity = 9999; // Maksymalna ilość produktu
  
    // Pobranie aktualnej listy produktów z localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Znalezienie produktu w koszyku
    const existingProductIndex = currentCart.findIndex(item => item.productCode === productCode);
    
    if (existingProductIndex > -1) {
      // Sprawdzenie, czy nie przekracza maksymalnej ilości
      if (currentCart[existingProductIndex].quantity < maxQuantity) {
        currentCart[existingProductIndex].quantity += 1;
      }
    } else {
      // Dodanie nowego produktu, jeśli nie istnieje w koszyku
      const newProduct = {
        productCode,
        quantity: 1,
        name,
        price,
        imageUrls
      };
      currentCart.push(newProduct);
    }
    
    notifyCart(product.productCode);
    localStorage.setItem('cart', JSON.stringify(currentCart));
  };

  const handleAddToFavourites = (event, product) => {
    event.stopPropagation();
    notifyFavourite(product.productCode);
  
    const { productCode, name, price, imageUrls } = product;
  
    // Pobranie aktualnej listy ulubionych z localStorage
    const currentFavourites = JSON.parse(localStorage.getItem('favourite')) || [];
    
    // Sprawdzenie, czy produkt jest już w ulubionych
    const isProductInFavourites = currentFavourites.some(item => item.productCode === productCode);
  
    if (!isProductInFavourites) {
      const favouriteProduct = {
        productCode,
        name,
        price,
        imageUrls
      };
      currentFavourites.push(favouriteProduct);
  
      localStorage.setItem('favourite', JSON.stringify(currentFavourites));
    }
  };

  return (
    <>
      {props.isLoading && (
        <div className={styles.loadingWrapper}>
          <div className={styles.loadingScreen}>
            <div className={styles.loader}></div>
          </div>
        </div>
      )}

      <div className={styles.cardsWrapper}>
        {!props.isLoading && props.products.map(product => 
          <div key={product.productCode} className={styles.card} onClick={() => handleLinkClick(product.productCode)}>
            <div className={styles.cardBody}>
              <h5 className={styles.productTitle}>{product.name}</h5>
            </div>

            <div className={styles.imageContainer}>            
              <img src={product.imageUrls[0]} alt={product.name} className={styles.productImage} />
            </div>

            <div className={styles.cardBody}>
              <p className={styles.productPrice}>Cena netto: {product.price} zł</p>
              <div className={styles.buttonsWrapper}>
                <div>
                  <button className={styles.buttonAvailable}
                    onClick={(event) => handleAddToCart(event, product)}
                  >
                    <img src="/store/cart.png" alt="cart" className={styles.icon}/>
                    <p>Dodaj do koszyka</p>
                  </button>
                </div>

                <div className={styles.addToFavourite}>
                  <button onClick={(event) => handleAddToFavourites(event, product)}>
                    <FontAwesomeIcon icon={faHeart} className={styles.iconHeart} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
