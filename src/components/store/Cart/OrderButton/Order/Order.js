import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './Order.module.scss';

import PaymentMethod from './PaymentMethod/PaymentMethod';
import CartSummary from './CartSummary/CartSummary';

function Order(props) {
  
  const [orderData, setOrderData] = useState({
    name: '',
    surname: '',
    email: '',
    company: '',
    nip: '',
    adress: '',
    additionalAdress: '',
    city: '',
    postCode: '',
    country: 'Polska',
    phoneNr: '',
    comment: '',
    shippingMethod: 'SCHENKER',
  });

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      // Ustawienie wybranej metody płatności na true
      setOrderData({ 
        ...orderData, 
        [e.target.name]: e.target.checked 
      });
    } else {
      setOrderData({ ...orderData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Zamówienie:', orderData);
    // Tu implementacja wysyłania danych zamówienia
  };

  const handlePaymentMethodChange = (event) => {
    props.setSelectedPaymentMethod(event.target.name);
  };

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/przetwarzanie`);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div>
        <h2>Twoje dane</h2>
        <div className={styles.wrapper}>
            <label htmlFor="name">Imię</label>
            <input type="text" name="name" id="name" value={orderData.name} onChange={handleChange} required />
        </div>
        <div className={styles.wrapper}>
            <label htmlFor="surname">Nazwisko</label>
            <input type="text" name="surname" id="surname" value={orderData.surname} onChange={handleChange} required />
        </div>
        <div className={styles.wrapper}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={orderData.email} onChange={handleChange} required />
        </div>

        {/* <div className={styles.paymentWrapper}>
          <h2>Metoda płatności</h2>
          <label>
            <input
              type="checkbox"
              name="blik"
              checked={props.selectedPaymentMethod === 'blik'}
              onChange={handlePaymentMethodChange}
            />
            BLIK
          </label>

          <label>
            <input
              type="checkbox"
              name="card"
              checked={props.selectedPaymentMethod === 'card'}
              onChange={handlePaymentMethodChange}
            />
            Karta
          </label>

          <label>
            <input
              type="checkbox"
              name="p24"
              checked={props.selectedPaymentMethod === 'p24'}
              onChange={handlePaymentMethodChange}
            />
            Przelewy24
          </label>
          <button type="submit" onClick={navigateHandler}>Złóż zamówienie</button>
        </div> */}

        <PaymentMethod 
          setSelectedPaymentMethod={props.setSelectedPaymentMethod} 
          selectedPaymentMethod={props.selectedPaymentMethod}
        />

      </div>

      <div>
        <h2>Adres</h2>
        <div className={styles.wrapper}>
            <label htmlFor="company">Firma</label>
            <input type="text" name="company" id="company" value={orderData.company} onChange={handleChange} />
        </div>
        <div className={styles.wrapper}>
            <label htmlFor="nip">NIP</label>
            <input type="text" name="nip" id="nip" value={orderData.nip} onChange={handleChange} />
        </div>
        <div className={styles.wrapper}>
            <label htmlFor="adress">Adres zamieszkania</label>
            <input type="text" name="adress" id="adress" value={orderData.adress} onChange={handleChange} required />
        </div>
        <div className={styles.wrapper}>
            <label htmlFor="additionalAdress">Uzupełnienie adresu</label>
            <input type="text" name="additionalAdress" id="additionalAdress" value={orderData.additionalAdress} onChange={handleChange} />
        </div>
        <div className={styles.wrapper}>
            <label htmlFor="city">Miasto</label>
            <input type="text" name="city" id="city" value={orderData.city} onChange={handleChange} required />
        </div>
        <div className={styles.wrapper}>
            <label htmlFor="postCode">Kod pocztowy</label>
            <input type="text" name="postCode" id="postCode" value={orderData.postCode} onChange={handleChange} required />
        </div>
        <div className={styles.wrapper}>
            <label htmlFor="country">Kraj</label>
            <input type="text" name="country" id="country" value={orderData.country} disabled />
        </div>
        <div className={styles.wrapper}>
            <label htmlFor="phoneNr">Telefon</label>
            <input type="tel" name="phoneNr" id="phoneNr" value={orderData.phoneNr} onChange={handleChange} required />
        </div>
        <div className={styles.wrapper}>
            <label htmlFor="comment">Komentarz do zamówienia</label>
            <textarea name="comment" id="comment" value={orderData.comment} onChange={handleChange} />
        </div>
      </div>
      

      <CartSummary />
    </form>
  );
}

export default Order;
