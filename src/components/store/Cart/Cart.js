import React, { useState, useEffect } from 'react';
import styles from './Cart.module.scss';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import OrderButtonFromCart from './OrderButton/OrderButtonFromCart'
import categoriesData from '../StoreProductsPage/categories';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const selectedCurrency = localStorage.getItem('selectedCurrency');
  const exchangeRate = localStorage.getItem('exchangeRate');

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const handleQuantityChange = (productCode, newQuantity, amount) => {
    newQuantity = parseInt(newQuantity, 10);
    newQuantity = newQuantity > amount ? amount : newQuantity; 
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      const updatedCartItems = cartItems.map(item => {
        if (item.productCode === productCode) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCartItems(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    }
  };

  const handleIncreaseQuantity = (productCode, amount) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.productCode === productCode) {
        const newQuantity = item.quantity < amount ? item.quantity + 1 : amount;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleDecreaseQuantity = (productCode) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.productCode === productCode && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const calculatePrice = (price, quantity) => {
    return (price * quantity).toFixed(2); 
  };

  const handleRemoveItem = (productCode) => {
    const updatedCartItems = cartItems.filter(item => item.productCode !== productCode);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const calculateTotalNetto = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2);
  };

  const navigate = useNavigate();

  const navigateTOProduct = (product_id, category) => {
    navigate(`/${category}/${product_id}`);
  }

  return (
    <div className={styles.cart}>
      <h2>Twój koszyk</h2>
      {cartItems.length === 0 ? <p>Koszyk jest pusty.</p> : (
        <div className={styles.cartList}>
          {cartItems.map(item => {
            const displayCategory = categoriesData.find(cat => cat.category === item.category)?.categoryToDisplay || item.category;

            return (
          
            <div key={item.productCode} className={styles.cartItem}>
              <div className={styles.titleWrapper}>
                <h3 onClick={() => navigateTOProduct(item.productCode, item.category)}>{item.productName}</h3>
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
                    <p>Cena: {(calculatePrice(item.price, item.quantity) * exchangeRate).toFixed(2)} {selectedCurrency}</p>

                    <div className={styles.cartQuantity}>
                      <button
                        onClick={() => handleDecreaseQuantity(item.productCode)}
                        disabled={item.quantity <= 1}
                      >-</button>
                      <input 
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.productCode, e.target.value, item.amount)}
                        min="1"
                        max={item.amount}
                        className={styles.quantityInput}
                      />
                      <button
                        onClick={() => handleIncreaseQuantity(item.productCode, item.amount)}
                        disabled={item.quantity >= item.maxQuantity}
                      >+</button>
                      <p>ilość</p>
                    </div>
                    <button onClick={() => handleRemoveItem(item.productCode)} className={styles.removeItem}>
                      Usuń z koszyka
                    </button>
                </div>
              </div>
            </div>            
          )})}
        </div>
        
      )}
      <div className={styles.totalPrice}>
        <p>Łączna suma netto: {(calculateTotalNetto() * exchangeRate).toFixed(2)} {selectedCurrency}</p>
        <OrderButtonFromCart 
          cartItems = {cartItems}
        />
      </div>
    </div>
  );
}

export default Cart;
