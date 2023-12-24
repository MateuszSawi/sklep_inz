import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './Order.module.scss';
import { apiK, apiP } from '../../../../../apiConfig';

import PaymentMethod from './PaymentMethod/PaymentMethod';
import CartSummary from './CartSummary/CartSummary';

function Order(props) {

  const [warning, setWarning] = useState(false)

  const [orderData, setOrderData] = useState({
    email: '',
    name: '',
    surname: '',
    company: '',
    nip: '',
    adress: '',
    additionalAdress: '',
    addressForInvoice: '',
    city: '',
    postCode: '',
    country: 'Polska',
    phoneNr: '',
    comment: '',
    shippingMethod: 'kurier',
  });

  //

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      
  const products = cartItems.map(item => ({
    productCode: item.productCode,
    amount: item.quantity
  }));

  const totalBrutto = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // console.log(cartItems, totalBrutto, totalNetto)

  // const arrayPrices = [totalNetto, totalBrutto];

  const price_pl = [
    {
      brutto: totalBrutto
    }
  ];
  // console.log(props.orderDataToSend)
  //

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

  //

  const navigate = useNavigate();

  // const navigateToLoginIn = () => {
  //   if (!isUserLoggedIn) {
  //     navigate(`/logowanie`);
  //   }
  // }

  return (
    <>
      <form className={styles.container}>
        <div>
          <h2>Twoje dane</h2>
          <div className={styles.wrapper}>
              <label htmlFor="name">Imię*</label>
              <input type="text" name="name" id="name" value={orderData.name} onChange={handleChange} required />
          </div>
          <div className={styles.wrapper}>
              <label htmlFor="surname">Nazwisko*</label>
              <input type="text" name="surname" id="surname" value={orderData.surname} onChange={handleChange} required />
          </div>
          <div className={styles.wrapper}>
              <label htmlFor="email">E-mail*</label>
              <input type="email" name="email" id="email" value={orderData.email} onChange={handleChange} required />
          </div>

          <PaymentMethod 
            setSelectedPaymentMethod={props.setSelectedPaymentMethod} 
            selectedPaymentMethod={props.selectedPaymentMethod}

            orderData={orderData}

            setWarning={setWarning}
            warning={warning}
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
              <label htmlFor="adress">Adres zamieszkania*</label>
              <input type="text" name="adress" id="adress" value={orderData.adress} onChange={handleChange} required />
          </div>
          <div className={styles.wrapper}>
              <label htmlFor="additionalAdress">Uzupełnienie adresu</label>
              <input type="text" name="additionalAdress" id="additionalAdress" value={orderData.additionalAdress} onChange={handleChange} />
          </div>
          <div className={styles.wrapper}>
              <label htmlFor="adressForInvoice">Adres zamieszkania</label>
              <input type="text" name="adress" id="adress" value={orderData.addressForInvoice} onChange={handleChange} />
          </div>
          <div className={styles.wrapper}>
              <label htmlFor="city">Miasto*</label>
              <input type="text" name="city" id="city" value={orderData.city} onChange={handleChange} required />
          </div>
          <div className={styles.wrapper}>
              <label htmlFor="postCode">Kod pocztowy*</label>
              <input type="text" name="postCode" id="postCode" value={orderData.postCode} onChange={handleChange} required />
          </div>
          <div className={styles.wrapper}>
              <label htmlFor="country">Kraj</label>
              <input type="text" name="country" id="country" value={orderData.country} disabled />
          </div>
          <div className={styles.wrapper}>
              <label htmlFor="phoneNr">Telefon*</label>
              <input type="tel" name="phoneNr" id="phoneNr" value={orderData.phoneNr} onChange={handleChange} required />
          </div>
          <div className={styles.wrapper}>
              <label htmlFor="comment">Komentarz do zamówienia</label>
              <textarea name="comment" id="comment" value={orderData.comment} onChange={handleChange} />
          </div>
        </div>
        
        <div className={styles.cartSummaryInnerWrapper}>
          <CartSummary />
        </div>
        
      </form>

      <div className={styles.cartSummaryWrapper}>
        <CartSummary />
      </div>
    </>
  );
}

export default Order;
