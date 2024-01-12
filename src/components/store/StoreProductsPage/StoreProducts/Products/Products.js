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

  const selectedCurrency = localStorage.getItem('selectedCurrency');
  const exchangeRate = localStorage.getItem('exchangeRate');

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

  const handleAddToFavourites = (event, product) => {
    event.stopPropagation();
    notifyFavourite(product.productCode);

    const { productCode, name, price, imageUrls } = product;
    const currentFavourites = JSON.parse(localStorage.getItem('favourite')) || [];
    const isProductInFavourites = currentFavourites.some(item => item.productCode === productCode);
  
    if (!isProductInFavourites) {
      const favouriteProduct = {
        productCode,
        productName: name,
        price,
        mainImage: imageUrls[0],
        category
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
              <p className={styles.productPrice}>Cena: {(product.price * exchangeRate).toFixed(2)} {selectedCurrency}</p>
              <div className={styles.buttonsWrapper}>
                <div>
                  <button className={styles.buttonAvailable}
                    onClick={(event) => handleLinkClick(product.productCode)}
                  >
                    {/* <img src="/store/cart.png" alt="cart" className={styles.icon}/> */}
                    <p>Zobacz produkt</p>
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
