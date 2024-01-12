import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import styles from './Orders.module.scss';
import MyAccHeader from '../MyAccHeader'
import { apiK } from '../../../apiConfig';
import axios from 'axios';
import CancelOrder from './CancelOrder/CancelOrder'

const Orders = (props) => {
  const [orders, setOrders] = useState([]);
  const [button, setButton] = useState(false);

  useEffect(() => {
    // Pobierz token dostępu z localStorage
    const token = localStorage.getItem('accessToken');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Dodaj token jako nagłówek Authorization
    };

    const apiUrl = `${apiK}/orders`;

    // Wykonaj żądanie GET z nagłówkiem Authorization
    axios.get(apiUrl, { headers })
      .then((response) => {
        setOrders(response.data.orders);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania adresów:', error);
      });
  }, [button]);

  return (
    <div className={styles.myAccount}>
      <MyAccHeader
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <h2>Zamówienia</h2>
      <div className={styles.ordersContainer}>
        {orders.map((order) => (
          <div key={order.id} className={styles.order}>
            <h3>Zamówienie #{order.id}</h3>
            <p>Data zamówienia: {new Date(order.statusDto.date).toLocaleDateString()}</p>
            <p>Status: {order.statusDto.orderStatus}</p>
            <div className={styles.address}>
              <h4>Adres dostawy:</h4>
              <p>Państwo: {order.addressDto.country}</p>
              <p>Miasto: {order.addressDto.city}</p>
              <p>Kod pocztowy: {order.addressDto.postCode}</p>
              <p>Ulica: {order.addressDto.street}</p>
              <p>Numer budynku: {order.addressDto.buildingNumber}</p>
              <p>Numer mieszkania: {order.addressDto.apartmentNumber}</p>
            </div>
            <h4>Zamówione produkty:</h4>
            
            {order.productItemsList.map((item) => (
              <ul className={styles.custom}>
                <li>Kod produktu: {item.productCode}</li>
                <li>Kolor: {item.colour}</li>
                <li>Rozmiar {item.size}</li>
              </ul>
            ))}

            {order.statusDto.orderStatus === 'CREATED' &&
              <CancelOrder id={order.id} setButton={setButton} button={button} />
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
