import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import styles from '../MyAccountButtons.module.scss';

function Products() {

  const navigate = useNavigate();

  const clickHandler = () => {

  }

  // useEffect(() => {
  //   axios.get(`${apiK}/staff/browseallusers`, {page: 1}, {
  //     withCredentials: true,
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then((response) => {
      
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }, []);

  return (
    <>
      Products
    </>
  );
}

export default Products;


