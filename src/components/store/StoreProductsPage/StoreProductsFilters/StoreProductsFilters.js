import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import styles from './StoreProductsFilters.module.scss';
import axios from 'axios';
import { apiK, apiP } from '../../../../apiConfig';

function StoreProductsFilters(props) {

  const [sort, setSort] = useState(sessionStorage.getItem('sortBy'));
  const [productsPerPage, setProductsPerPage] = useState(sessionStorage.getItem('productsPerPage'));
  const [pageNumber, setPageNumber] = useState(sessionStorage.getItem('pageNumber'));

  // console.log('sortowanie po :', sort)
  // console.log('ilosc produktow na str:', productsPerPage)

  const handleSortChange = (event) => {
    props.setSortBy(event.target.value);
    sessionStorage.setItem('sortBy', event.target.value);
    setSort(event.target.value)
  };

  const handleProductsPerPageChange = (event) => {
    props.setProductsPerPage(Number(event.target.value));
    sessionStorage.setItem('productsPerPage', Number(event.target.value));
    setProductsPerPage(Number(event.target.value))
  };

  const handleBlur = () => {
    props.setProductsPerPage(pageNumber);
    sessionStorage.setItem('pageNumber', pageNumber);
    setProductsPerPage(pageNumber)
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const onlyNums = value.replace(/[^0-9]/g, '');
  
    if (onlyNums) {
      setPageNumber(Math.min(parseInt(onlyNums, 10), sessionStorage.getItem('totalPages')));
    } else {
      setPageNumber('');
    }
  };

  const handleClickArrow = () => {

    let incrementPage = Number(pageNumber + 1);

    console.log(typeof(pageNumber), pageNumber)
    console.log(typeof(sessionStorage.getItem('totalPages')), sessionStorage.getItem('totalPages'))

    if (Number(pageNumber) !== Number(sessionStorage.getItem('totalPages'))) {
      props.setProductsPerPage(Number(incrementPage));
      sessionStorage.setItem('pageNumber', Number(incrementPage));
      setProductsPerPage(Number(incrementPage))
      setPageNumber(Number(incrementPage))
    }
  }

  return (
    <div className={styles.productListing}>
      <div className={styles.controls}>
        <select
          value={sort}
          onChange={handleSortChange}
          className={styles.dropdown}
        >
          <option value="alphabetic_asc">Nazwa A-Z</option>
          <option value="alphabetic_desc">Nazwa Z-A</option>
          <option value="price_asc">Cena rosnąco</option>
          <option value="price_desc">Cena malejąco</option>
          <option value="available">Dostępność</option>
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
        <input 
          type="text" 
          value={pageNumber} 
          onChange={handleChange} 
          onBlur={handleBlur} 
          max={sessionStorage.getItem('totalPages')}
        />

        <p>z &nbsp;{sessionStorage.getItem('totalPages')}</p>

        <img 
          src={process.env.PUBLIC_URL + '/store/arrowPage.png'} 
          alt="Renox logo"
          onClick={handleClickArrow}
        />
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