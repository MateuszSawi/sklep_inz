import React, { useState, useEffect } from 'react';
import styles from './Favorite.module.scss';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';

function Favorite() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('favourite')) || [];
    setFavoriteItems(items);
  }, []);

  const navigateTOProduct = (product_id, subcategory, category) => {
    if (subcategory) {
      navigate(`/sklep/${category}/${subcategory}/${product_id}`);
    } else {
      navigate(`/sklep/${category}/${category}/${product_id}`);
    }
  }

  const handleRemoveItem = (product_id) => {
    const updatedFavoriteItems = favoriteItems.filter(item => item.product_id !== product_id);
    setFavoriteItems(updatedFavoriteItems);
    localStorage.setItem('favourite', JSON.stringify(updatedFavoriteItems));
  };

  const handleAddToCartFromFavourites = (product) => {
    const maxQuantity = 9999;
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = cartItems.findIndex(item => item.product_id === product.product_id);
  
    if (existingIndex > -1) {
      // Aktualizacja ilości, jeśli produkt jest już w koszyku
      const newQuantity = Math.min(cartItems[existingIndex].quantity + 1, maxQuantity);
      cartItems[existingIndex] = { ...cartItems[existingIndex], quantity: newQuantity };
    } else {
      // Dodanie nowego produktu do koszyka z ilością 1
      cartItems.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  return (
    <div className={styles.favorite}>
      <h2>Ulubione:</h2>
      {favoriteItems.length === 0 ? <p>Lista ulubionych jest pusta.</p> : (
        <div className={styles.favoriteList}>
          {favoriteItems.map(item => (
            <div key={item.product_id} className={styles.favoriteItem}>
              <div className={styles.titleWrapper}>
                <h3 onClick={() => navigateTOProduct(item.product_id, item.subcategory, item.category)}>
                  {item.product_name}
                </h3>
              </div>

              <p>{favoriteItems.category}</p>
              <p>{favoriteItems.subCategory}</p>

              <div className={styles.infoWrapper}>
                <div className={styles.infoWrapperImg}>
                  <img src={item.primary_link} alt="Product" className={styles.image} />
                  <p>Numer katalogowy: {item.product_id} </p>
                </div>

                <div className={styles.innerInfoWrapper}>
                  <p>Cena netto: {item.price_netto} zł</p>
                  <p>Cena brutto: {item.price_brutto} zł</p>

                  {item.quantity > 0 ? (
                    <button onClick={() => handleAddToCartFromFavourites(item)} className={styles.addToCartButton}>
                      <p>Dodaj do koszyka</p>
                    </button>
                  ) : (
                    <button onClick={() => handleAddToCartFromFavourites(item)} className={styles.askForProductButton}>
                      <a href="tel:+48 89 523 91 52" className={styles.phone}>
                        <p>Zapytaj o produkt</p>
                      </a>
                    </button>
                  )}
                  
                  <button onClick={() => handleRemoveItem(item.product_id)} className={styles.removeItem}>
                    Usuń z ulubionych
                  </button>
                </div>
              </div>
            </div>            
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorite;