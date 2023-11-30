import React, { useState, useEffect } from 'react';
import styles from './Cart.module.scss';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const handleQuantityChange = (product_id, newQuantity) => {
    newQuantity = parseInt(newQuantity, 10);
    newQuantity = newQuantity > 9999 ? 9999 : newQuantity; // Ograniczenie do 9999
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      const updatedCartItems = cartItems.map(item => {
        if (item.product_id === product_id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCartItems(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    }
  };

  const handleIncreaseQuantity = (product_id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.product_id === product_id) {
        const newQuantity = item.quantity < 9999 ? item.quantity + 1 : 9999; // Ograniczenie do 9999
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleDecreaseQuantity = (product_id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.product_id === product_id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const calculatePrice = (price, quantity) => {
    return (price * quantity).toFixed(2); // Zaokrąglenie do dwóch miejsc po przecinku
  };

  const handleRemoveItem = (product_id) => {
    const updatedCartItems = cartItems.filter(item => item.product_id !== product_id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const calculateTotalNetto = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price_netto * item.quantity);
    }, 0).toFixed(2); // Zaokrąglenie do dwóch miejsc po przecinku
  };

  const calculateTotalBrutto = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price_brutto * item.quantity);
    }, 0).toFixed(2); // Zaokrąglenie do dwóch miejsc po przecinku
  };

  const navigate = useNavigate();

  const navigateTOProduct = (product_id, subcategory, category) => {
    if (subcategory) {
      navigate(`/sklep/${category}/${subcategory}/${product_id}`);
    } else {
      navigate(`/sklep/${category}/${category}/${product_id}`);
    }
  }

  return (
    <div className={styles.cart}>
      <h2>Twój koszyk</h2>
      {cartItems.length === 0 ? <p>Koszyk jest pusty.</p> : (
        <ul className={styles.cartList}>
          {cartItems.map(item => (
            <li key={item.product_id} className={styles.cartItem}>
              <h3 onClick={() => navigateTOProduct(item.product_id, item.subcategory, item.category)}>{item.product_name}</h3>
              <div className={styles.cartQuantity}>
                <button
                  onClick={() => handleDecreaseQuantity(item.product_id)}
                  disabled={item.quantity <= 1}
                >-</button>
                <input 
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.product_id, e.target.value, item.maxQuantity)}
                  min="1"
                  max={item.maxQuantity}
                  className={styles.quantityInput}
                />
                <button
                  onClick={() => handleIncreaseQuantity(item.product_id, item.maxQuantity)}
                  disabled={item.quantity >= item.maxQuantity}
                >+</button>
                {item.by_length ? <p>cm</p> : <p>ilość</p>}
              </div>
              <p>Cena netto: {calculatePrice(item.price_netto, item.quantity)} zł</p>
              <p>Cena brutto: {calculatePrice(item.price_brutto, item.quantity)} zł</p>
              <button onClick={() => handleRemoveItem(item.product_id)} className={styles.removeItem}>
                  🗑️
                </button>
            </li>
            
          ))}
        </ul>
        
      )}
      <div className={styles.totalPrice}>
            <h3>Łączna suma netto: {calculateTotalNetto()} zł</h3>
            <h3>Łączna suma brutto: {calculateTotalBrutto()} zł</h3>
          </div>
    </div>
  );
}

export default Cart;
