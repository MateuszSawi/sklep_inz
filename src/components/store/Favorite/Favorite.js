import React, { useState, useEffect } from 'react';
import styles from './Favorite.module.scss';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';
import categoriesData from '../StoreProductsPage/categories';

function Favorite() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('favourite')) || [];
    setFavoriteItems(items);
  }, []);

  const navigateTOProduct = (productCode, category) => {
    navigate(`/${category}/${productCode}`);
  }

  const handleRemoveItem = (productCode) => {
    const updatedFavoriteItems = favoriteItems.filter(item => item.productCode !== productCode);
    setFavoriteItems(updatedFavoriteItems);
    localStorage.setItem('favourite', JSON.stringify(updatedFavoriteItems));
  };

  // const handleAddToCartFromFavourites = (product) => {
  //   // const maxQuantity = 9999;
  //   const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  //   const existingIndex = cartItems.findIndex(item => item.productCode === product.productCode);
  
  //   if (existingIndex > -1) {
  //     // Aktualizacja ilości, jeśli produkt jest już w koszyku
  //     const newQuantity = Math.min(cartItems[existingIndex].quantity + 1, cartItems[existingIndex].amount);
  //     cartItems[existingIndex] = { ...cartItems[existingIndex], quantity: cartItems[existingIndex].amount };
  //   } else {
  //     // Dodanie nowego produktu do koszyka z ilością 1
  //     cartItems.push({ ...product, quantity: 1 });
  //   }
  
  //   localStorage.setItem('cart', JSON.stringify(cartItems));
  // };

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
                    {/* <p>Kategoria: {item.category} </p> */}
                    <p>Kategoria: {displayCategory} </p>
                  </div>
                </div>

                <div className={styles.innerInfoWrapper}>
                  <p>Cena: {item.price} zł</p>

                  {/* <button onClick={() => handleAddToCartFromFavourites(item)} className={styles.addToCartButton}>
                    <p>Dodaj do koszyka</p>
                  </button> */}

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