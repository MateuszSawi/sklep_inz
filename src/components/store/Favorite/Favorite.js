import React, { useState, useEffect } from 'react';
import styles from './Favorite.module.scss';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';
import categoriesData from '../StoreProductsPage/categories';

function Favorite() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const selectedCurrency = localStorage.getItem('selectedCurrency');
  const exchangeRate = localStorage.getItem('exchangeRate');

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('favourite')) || [];
    setFavoriteItems(items);
  }, []);

  const navigate = useNavigate();
  
  const navigateTOProduct = (productCode, category) => {
    navigate(`/${category}/${productCode}`);
  }

  const handleRemoveItem = (productCode) => {
    const updatedFavoriteItems = favoriteItems.filter(item => item.productCode !== productCode);
    setFavoriteItems(updatedFavoriteItems);
    localStorage.setItem('favourite', JSON.stringify(updatedFavoriteItems));
  };

  return (
    <div className={styles.favorite}>
    <h2>Ulubione:</h2>
    {favoriteItems.length === 0 ? (
      <p>Nie posiadasz ulubionych produktów</p>
    ) : (
      <div className={styles.favoriteList}>
        {favoriteItems.map(item => {
          const displayCategory = categoriesData.find(cat => cat.category === item.category)?.categoryToDisplay || item.category;

          return (
            <div key={item.productCode} className={styles.favoriteItem}>
              <div className={styles.titleWrapper}>
                <h3 onClick={() => navigateTOProduct(item.productCode, item.category)}>
                  {item.productName}
                </h3>
              </div>

              <div className={styles.infoWrapper}>
                <div className={styles.infoWrapperImg}>
                  <img src={item.mainImage} alt="Product" className={styles.image} />
                  <div>
                    <p>Numer produktu: {item.productCode} </p>
                    <p>Kategoria: {displayCategory} </p>
                  </div>
                </div>

                <div className={styles.innerInfoWrapper}>
                  <p>Cena: {(item.price * exchangeRate).toFixed(2)} {selectedCurrency}</p>
                  <button onClick={() => navigateTOProduct(item.productCode, item.category)} className={styles.addToCartButton}>
                    <p>Zobacz produkt</p>
                  </button>
                  <button onClick={() => handleRemoveItem(item.productCode)} className={styles.removeItem}>
                    Usuń z ulubionych
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Favorite;