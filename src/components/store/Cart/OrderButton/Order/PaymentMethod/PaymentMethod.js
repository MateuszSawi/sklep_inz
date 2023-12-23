import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './PaymentMethod.module.scss';

function PaymentMethod(props) {

  const handlePaymentMethodChange = (event) => {
    props.setSelectedPaymentMethod(event.target.value);
  };

  const orderData = props.orderData;

  const navigate = useNavigate();

  const navigateHandler = (e) => {
    e.preventDefault();

    if (
      orderData.email.trim() === ''      ||
      orderData.name.trim() === ''       ||
      orderData.surname.trim() === ''    ||
      orderData.adress.trim() === ''     ||
      orderData.city.trim() === ''       ||
      orderData.postCode.trim() === ''   ||
      orderData.country.trim() === ''    ||
      orderData.phoneNr.trim() === ''    ||
      props.selectedPaymentMethod === ''
    ) {
      props.setWarning(true)
    } else {
      props.setWarning(false)
      navigate(`/przetwarzanie`);
    }
  }

  return (
    <div className={styles.paymentWrapper}>
      <h2>Metoda płatności</h2>
      <label>
        <input type="radio"
          name="paymentMethod"
          value="cash"
          checked={props.selectedPaymentMethod === 'cash'}
          onChange={handlePaymentMethodChange}
        />
        &nbsp;Za pobraniem &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </label>

      <button type="submit" onClick={navigateHandler}>Złóż zamówienie</button>

      {props.warning &&
        <p>Wypełnij dane do zamówienia</p>
      }
    </div>
  );
}

export default PaymentMethod;
