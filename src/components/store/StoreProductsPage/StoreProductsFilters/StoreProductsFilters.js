import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import styles from './StoreProductsFilters.module.scss';
import axios from 'axios';

function StoreProductsFilters() {

  // useEffect(() => {
  //   axios.post("http://127.0.0.1:8000/products/filters/", { 
  //     params: {
        



  //     }
  //   })
  //   .then(response => {
  //     console.log(response.data.products);
      
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // }, []);

  return (
    <div>      
      StoreProductsFilters
    </div>
  );
}

export default StoreProductsFilters;

// sortowanie po czyms: {
//   A-Z 
//   Z-A
//   cena malejaco
//   cena rosnaco
//   dostepnosc
// }

// sort:
// A_Z
// Z_A
// price_desc - malejaco
// price_asc - rosnaco
// available - to bedzie od najwiekszej ilosci

// -----------------------------------

// ilosc produktow na stronie (30/40/50???)

// page_size:
// 20
// 30 - domyślne
// 40 

// -----------------------------------

// ilość strony - musze dostac liczbe stron
// page_number