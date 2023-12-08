import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import styles from './StoreProductsFilters.module.scss';
import axios from 'axios';
import { apiK, apiP } from '../../../../apiConfig';

function StoreProductsFilters() {

  const [sortBy, setSortBy] = useState('popularity');
  const [productsPerPage, setProductsPerPage] = useState(30);

  useEffect(() => {
    const numericProductsPerPage = Number(productsPerPage);

    axios.post(`${apiP}/products/filters/`, { 
      params: {
        sort: sortBy,
        page_size: numericProductsPerPage
      }
    })
    .then(response => {
      console.log(response.data.products);

    })
    .catch(error => {
      console.error(error);
    });
  }, [sortBy, productsPerPage]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleProductsPerPageChange = (event) => {
    setProductsPerPage(Number(event.target.value));
  };

  console.log(sortBy, '|',  productsPerPage)

  return (
    <div className={styles.productListing}>
      <div className={styles.controls}>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className={styles.dropdown}
        >
          <option value="available">Popularność</option>
          <option value="price_asc">Cena rosnąco</option>
          <option value="price_desc">Cena malejąco</option>
          <option value="A-Z">Nazwa A-Z</option>
          <option value="Z-A">Nazwa Z-A</option>
        </select>
        <select
          value={productsPerPage}
          onChange={handleProductsPerPageChange}
          className={styles.dropdown}
        >
          <option value="20">20 produktów</option>
          <option value="30">30 produktów</option>
          <option value="40">40 produktów</option>
        </select>

      </div>

      <div className={styles.pagination}>
        <p>sdsds</p>
      </div>
    </div>
  );
};


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