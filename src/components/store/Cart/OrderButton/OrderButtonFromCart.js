import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './OrderButtonFromCart.module.scss';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Order/Loading/Payment/Payment';
import { apiK } from '../../../../apiConfig'; // Załóżmy, że tutaj masz swoje URL

function OrderButtonFromCart(props) {
  const [stripeApiKey, setStripeApiKey] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  // const [isStripeLoading, setIsStripeLoading] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [warning, setWarning] = useState(false);

  const navigate = useNavigate();
  
  const navigateHandler = () => {
    if (props.cartItems.length !== 0) {
      setWarning(false)
      navigate(`/zamówienie`);
    } else {
      setWarning(true)
    }
  }

  return (
    <>
      {/* <button onClick={fetchStripeKeyAndClientSecret}>złóż zamówienie</button> */}
      <button onClick={navigateHandler}>Złóż zamówienie</button>
      {/* {stripeElements} */}
      {warning && 
        <p className={styles.warning}>Twój koszyk jest pusty</p>
      }
    </>
  );
}

export default OrderButtonFromCart;
