import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import styles from '../MyAccountButtons.module.scss';

function AllOrders() {

  const navigate = useNavigate();

  const clickHandler = () => {

  }

  useEffect(() => {      // wyszukiwanie konkretnego użytkownika + wszysktich jesli email = '' --- wartosc jednego usera musi isc z inputa , jesli wszystkich to ''
    axios.post(`${apiK}/staff/getallorders`, {
      email: '',
      page: 1
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response.data.users);
      // setUsers(response.data.users)
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <>
      AllOrders
    </>
  );
}

export default AllOrders;


