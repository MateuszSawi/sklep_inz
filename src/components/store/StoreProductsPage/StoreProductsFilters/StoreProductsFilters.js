import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import styles from './StoreProductsFilters.module.scss';
import axios from 'axios';
import { apiK, apiP } from '../../../../apiConfig';

function StoreProductsFilters() {

  // useEffect(() => {
  //   axios.post(`${apiP}/products/filters/`, { 
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
    <div className={styles.container}>      

      <img 
        src={process.env.PUBLIC_URL + '/inprogress.png'} 
        alt="Renox logo" 
      />
      <p>Filtry produktów nie są jeszcze gotowe</p>
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