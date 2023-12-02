import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './Products.module.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products(props) {

  const { category, subcategory, singleProduct } = useParams();

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

  const handleLinkClick = (singleProduct) => {
    if (subcategory) {
      navigate(`/sklep/${category}/${subcategory}/${singleProduct}`);
    } else {
      navigate(`/sklep/${category}/${category}/${singleProduct}`);
    }
  };

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
  
    const { product_id, price_netto, price_brutto, product_name, primary_link } = product;
    const maxQuantity = 9999; // Maksymalna ilość produktu
  
    // Pobranie aktualnej listy produktów z localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Znalezienie produktu w koszyku
    const existingProductIndex = currentCart.findIndex(item => item.product_id === product_id);
    
    if (existingProductIndex > -1) {
      // Sprawdzenie, czy nie przekracza maksymalnej ilości
      if (currentCart[existingProductIndex].quantity < maxQuantity) {
        currentCart[existingProductIndex].quantity += 1;
      }
    } else {
      // Dodanie nowego produktu, jeśli nie istnieje w koszyku
      const newProduct = {
        product_id,
        quantity: 1, // Domyślna ilość to 1
        product_name,
        price_netto,
        price_brutto,
        primary_link,
        category,
        subcategory
      };
      currentCart.push(newProduct);
    }
    
    notifyCart(product.product_id);
    localStorage.setItem('cart', JSON.stringify(currentCart));
  };

  // const handleAddToCartNoProduct = (event) => {
  //   event.stopPropagation();
  // };

  const handleAddToFavourites = (event, product) => {
    event.stopPropagation();
    notifyFavourite(product.product_id);
  
    const { product_id, price_netto, price_brutto, product_name, primary_link, quantity } = product;
  
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
    <div className={styles.cardsWrapper}>
      {props.products.map(product => 
        product.product_name && product.price_netto && product.price_brutto &&

        <div key={product.product_id} className={styles.card} onClick={() => handleLinkClick(product.product_id)}>
          <div className={styles.cardBody}>
            <h5 className={styles.productTitle}>{product.product_name}</h5>
          </div>

          <div className={styles.imageContainer}>
            <img src="/website/logo/logo_renox_transparent.png" alt="Watermark" className={styles.watermark} />
            
            {product.primary_link ? (
              <img src={product.primary_link} alt={product.product_name} className={styles.productImage} />
            ) : (
              <img src="/inprogress.png" alt="Domyślny obraz" className={styles.productImage} />
            )}
          </div>

          <div className={styles.cardBody}>
            {/* <h5 className={styles.productTitle}>{product.product_name}</h5> */}
            <p className={styles.productPrice}>Cena netto: {product.price_netto} zł</p>
            <p className={styles.productPrice}>Cena brutto: {product.price_brutto} zł</p>
            <div className={styles.buttonsWrapper}>
              <div>
                  {product.quantity > 0 ? (
                    <button className={product.quantity > 0 ? styles.buttonAvailable : styles.buttonUnavailable}
                      onClick={(event) => handleAddToCart(event, product)}
                    >
                      <img src="/store/cart.png" alt="cart" className={styles.icon}/>
                      <p>Dodaj do koszyka</p>
                    </button>
                  ) : (
                    <button className={product.quantity > 0 ? styles.buttonAvailable : styles.buttonUnavailable}
                      // onClick={(event) => handleAddToCartNoProduct(event)}
                    >
                      <img src="/store/phone_little.png" alt="phone" className={styles.icon}/>
                      <p>Zapytaj o produkt</p>
                    </button>
                  )}
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
  );
}

export default Products;
