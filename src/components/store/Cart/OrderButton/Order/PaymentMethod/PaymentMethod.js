import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './PaymentMethod.module.scss';

function PaymentMethod(props) {

  const handlePaymentMethodChange = (event) => {
    props.setSelectedPaymentMethod(event.target.value);
  };

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/przetwarzanie`);
  }

  return (
    <div className={styles.paymentWrapper}>
      <h2>Metoda płatności</h2>
      <label>
        <input type="radio"
          name="paymentMethod"
          value="blik"
          checked={props.selectedPaymentMethod === 'blik'}
          onChange={handlePaymentMethodChange}
        />
        BLIK
      </label>

      <label>
        <input type="radio"
          name="paymentMethod"
          value="card"
          checked={props.selectedPaymentMethod === 'card'}
          onChange={handlePaymentMethodChange}
        />
        Karta
      </label>

      <label>
        <input type="radio"
          name="paymentMethod"
          value="p24"
          checked={props.selectedPaymentMethod === 'p24'}
          onChange={handlePaymentMethodChange}
        />
        Przelewy24
      </label>
      <button type="submit" onClick={navigateHandler}>Złóż zamówienie</button>
    </div>
  );
}

export default PaymentMethod;
