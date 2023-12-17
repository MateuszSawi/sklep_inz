import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import styles from '../MyAccount.module.scss';

function MyAccount() {

  // const [email, setEmail] = useState('');
  const [orders, setOrders] = useState('');

  const navigate = useNavigate();

  const clickHandler = () => {

  }

  useEffect(() => {
    axios.get(`${apiK}/auth/aboutuser`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      getUserOrder(response.data.email);
    })
    .catch((error) => {
      console.error(error);
    })
  }, []);

  const getUserOrder = (email) => {
    axios.post(`${apiK}/staff/showorders`, {
      email: email,
      page: 1
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      setOrders(response.data.orders)
      console.log(response.data.orders)
    })
    .catch((error) => {
      console.error(error);
    })
  }

  return (
    <>
      {orders && 
        orders.map((order) => (
          // <div key={order.id}>
            // <h2>{order.title}</h2>
            <p>{order.created_at}</p>
          // </div>
        ))
      }
    </>
  );
}

export default MyAccount;


