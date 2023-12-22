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

  const lang = localStorage.getItem('lang') || 'pl';

  let emptyList;
  if (lang === 'pl') {emptyList = 'Lista ulubionych jest pusta.'}
  else if (lang === 'ua') {emptyList = 'Список обраних порожній.'}
  else if (lang === 'en') {emptyList = 'The favorites list is empty.'}

  let deleteFromFavourite;
  if (lang === 'pl') {deleteFromFavourite = 'Usuń z ulubionych'}
  else if (lang === 'ua') {deleteFromFavourite = 'Видалити з вибраного'}
  else if (lang === 'en') {deleteFromFavourite = 'Remove from favorites'}

  return (
    <div className={styles.favorite}>
      {lang === 'pl' &&
        <h2>Ulubione:</h2>
      }
      {lang === 'ua' &&
        <h2>улюблений:</h2>
      }
      {lang === 'en' &&
        <h2>Favorite:</h2>
      }
      {favoriteItems.length === 0 ? <p>{emptyList}</p> : (
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
                  {lang === 'pl' &&
                    <p>Numer katalogowy: {item.product_id} </p>
                  }
                  {lang === 'ua' &&
                    <p>Каталожний номер: {item.product_id} </p>
                  }
                  {lang === 'en' &&
                    <p>Catalog number: {item.product_id} </p>
                  }
                </div>

                <div className={styles.innerInfoWrapper}>
                  {lang === 'pl' &&
                    <>
                      <p>Cena netto: {item.price_netto} zł</p>
                      <p>Cena brutto: {item.price_brutto} zł</p>
                    </>
                  }
                  {lang === 'ua' &&
                    <>
                      <p>Ціна нетто:: {item.price_netto} грн</p>
                      <p>ціна брутто: {item.price_brutto} грн</p>
                    </>
                  }
                  {lang === 'en' &&
                    <>
                      <p>Net price: {item.price_netto} zł</p>
                      <p>Gross price: {item.price_brutto} zł</p>
                    </>
                  }

                  {item.quantity > 0 ? (
                    <button onClick={() => handleAddToCartFromFavourites(item)} className={styles.addToCartButton}>
                      {lang === 'pl' &&
                        <p>Dodaj do koszyka</p>
                      }
                      {lang === 'ua' &&
                        <p>додати в кошик</p>
                      }
                      {lang === 'en' &&
                        <p>Add to cart</p>
                      }
                    </button>
                  ) : (
                    <button onClick={() => handleAddToCartFromFavourites(item)} className={styles.askForProductButton}>
                      <a href="tel:+48 89 523 91 52" className={styles.phone}>
                        {lang === 'pl' &&
                          <p>Zapytaj o produkt</p>
                        }
                        {lang === 'ua' &&
                          <p>Запитайте про товар</p>
                        }
                        {lang === 'en' &&
                          <p>Ask about the product</p>
                        }
                      </a>
                    </button>
                  )}
                  
                  <button onClick={() => handleRemoveItem(item.product_id)} className={styles.removeItem}>
                    {deleteFromFavourite}
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