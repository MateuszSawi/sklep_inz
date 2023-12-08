import React, { useState, useEffect } from 'react';
import styles from './Loading.module.scss'; // Zaimportuj plik stylów
import axios from 'axios';
import { apiK } from '../../../../../../apiConfig';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Payment/Payment';

const Loading = (props) => {

  const [isStripeLoading, setIsStripeLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [stripeApiKey, setStripeApiKey] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  // const navigate = useNavigate();

  useEffect(() => {
    fetchStripeKeyAndClientSecret();
  }, []);

  const fetchStripeKeyAndClientSecret = async () => {
    try {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      
      const products = cartItems.map(item => ({
        productID: item.product_id,
        amount: item.quantity
      }));

      const keyResponse = await axios.get(`${apiK}/payment/publicstripekey`);
      setStripeApiKey(keyResponse.data.stripePublicKey);

      const secretResponse = await axios.post(`${apiK}/payment/buycart`, {
        "email": "ssz05378@zslsz.com",
        "products": products
      });
      setClientSecret(secretResponse.data.client_secret);

    } catch (error) {
      console.error('Błąd:', error);
    } finally {
      setIsStripeLoading(false);
    }
  };

  let stripePromise;
  if (stripeApiKey) {
    stripePromise = loadStripe(stripeApiKey);
  }

  if (isStripeLoading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  if (stripePromise && clientSecret) {
    return (
      <Elements stripe={stripePromise}>
        <Payment 
          clientSecret={clientSecret} 
          selectedPaymentMethod={props.selectedPaymentMethod}
        />
      </Elements>
    );
  }

  // Renderowanie alternatywnego UI, gdy Stripe nie jest ładowany i nie jest gotowy
  return <div>Coś poszło nie tak...</div>;
};

export default Loading;