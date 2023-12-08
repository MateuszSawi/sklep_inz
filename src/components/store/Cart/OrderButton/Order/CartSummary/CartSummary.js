import React, { useState, useEffect } from 'react';
import styles from './CartSummary.module.scss';

function CartSummary() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

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

  return (
    <div className={styles.cart}>
        <div className={styles.cartList}>
          {cartItems.map(item => (
            <div key={item.product_id} className={styles.cartItem}>
              <div className={styles.titleWrapper}>
                <h4>{item.product_name}</h4>
              </div>

              <div className={styles.infoWrapper}>
                <div className={styles.infoWrapperImg}>
                  <img src={item.primary_link} alt="Product" className={styles.image} />
                  <p>Numer katalogowy: {item.product_id} </p>
                </div>

                <div className={styles.innerInfoWrapper}>
                    <p>Cena netto: {calculatePrice(item.price_netto, item.quantity)} zł</p>
                    <p>Cena brutto: {calculatePrice(item.price_brutto, item.quantity)} zł</p>
                </div>
              </div>
            </div>            
          ))}
        </div>
      <div className={styles.totalPrice}>
        <p>Łączna suma netto: {calculateTotalNetto()} zł</p>
        <p>Łączna suma brutto: {calculateTotalBrutto()} zł</p>
      </div>
    </div>
  );
}

export default CartSummary;
