import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Order/Loading/Payment/Payment';
import { apiK } from '../../../../apiConfig'; // Załóżmy, że tutaj masz swoje URL

function OrderButtonFromCart() {
  const [stripeApiKey, setStripeApiKey] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  // const [isStripeLoading, setIsStripeLoading] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();
  
  const navigateHandler = () => {
    navigate(`/zamówienie`);
  }

  return (
    <>
      {/* <button onClick={fetchStripeKeyAndClientSecret}>złóż zamówienie</button> */}
      <button onClick={navigateHandler}>Złóż zamówienie</button>
      {/* {stripeElements} */}
    </>
  );
}

export default OrderButtonFromCart;
