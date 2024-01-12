import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './Order.module.scss';
import Loading from './Loading/Loading'

import { apiK, apiP } from '../../../../../apiConfig';

function Order(props) {
  const navigate = useNavigate();
  const [userAddresses, setUserAddresses] = useState([]);
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const token = localStorage.getItem('accessToken');
  const mainAddressId = localStorage.getItem('mainAddressId');

  const deliveryCost = 30;

  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function calculateTotalPrice() {
    let totalPrice = 0;
    cart.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.quantity;
    });
    setTotalPrice(totalPrice);
  }

  const productItemDetailsDtoList = [];
  function transformCartToProductDetails() {

    cart.forEach((cartItem) => {
      const { selectedSize, selectedColour, productCode, quantity } = cartItem;
      for (let i = 0; i < quantity; i++) {
        productItemDetailsDtoList.push({
          selectedSize,
          selectedColour,
          productCode,
        });
      }
    });

    return productItemDetailsDtoList;
  }

  useEffect(() => {
    if (!token || token === '') {
      navigate('/logowanie');
    }

    const transformedProducts = transformCartToProductDetails();
    setProducts(transformedProducts);
    calculateTotalPrice();

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    const apiUrl = `${apiK}/users/addresses`;

    axios.get(apiUrl, { headers })
      .then((response) => {
        setUserAddresses(response.data.addresses);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania adresów:', error);
      });
  }, []);

  return (
    <div className={styles.orderDetails}>
      <h2>Adres dostawy</h2>
      {userAddresses.length > 0 ? (
        <ul>
          {userAddresses.map((address) => (
            <div key={address.id}>
              {mainAddressId == address.id && mainAddressId !== '' && mainAddressId && (
                <>
                  <p>Kraj: {address.country}</p>
                  <p>Miasto: {address.city}</p>
                  <p>Kod pocztowy: {address.postCode}</p>
                  <p>Ulica: {address.street}</p>
                  <p>Numer budynku: {address.buildingNumber}</p>
                  <p>Numer mieszkania: {address.apartmentNumber}</p>
                </>
              )}
            </div>
          ))}
          {(mainAddressId === '' || !mainAddressId) && (
            <button>Wybierz adres do dostawy</button>
          )}
        </ul>
      ) : (
        <p>Brak dostępnych adresów.</p>
      )}

      <h2>Podsumowanie koszyka</h2>
      <div className={styles.cartSummary}>
        {cart.map((cartItem) => (
          <div className={styles.cartItem} key={cartItem.productCode}>
            <img src={cartItem.mainImage} alt={cartItem.productName} />
            <div className={styles.cartItemDetails}>
              <p>{cartItem.productName}</p>
              <p>Cena: {cartItem.price} zł</p>
              <p>Ilość: {cartItem.quantity}</p>
              <p>Łącznie: {cartItem.price * cartItem.quantity} zł</p>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.totalPrice}>Łączna cena produktów: {totalPrice} zł</p>
      <p className={styles.totalPrice}>Cena dostawy: {deliveryCost} zł</p>
      <p className={styles.totalPrice}>Metoda płatności: za pobraniem</p>
      <Loading products={products} />
      <p className={styles.totalPrice}>Łączna cena zamówienia: {totalPrice + deliveryCost} zł</p>
    </div>
  );
}

export default Order;
