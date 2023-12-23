import React, { useState, useEffect } from 'react';
import styles from './StoreProductsFilters.module.scss';
import axios from 'axios';
import { apiK, apiP } from '../../../../apiConfig';
import { Link, useNavigate, useParams } from 'react-router-dom';

function StoreProductsFilters(props) {
  // Zaktualizowane zmienne stanu
  const [selectedGender, setSelectedGender] = useState(sessionStorage.getItem('gender') || 'ALL');
  const [itemsPerPage, setItemsPerPage] = useState(Number(sessionStorage.getItem('pageSize')) || 30);
  const [currentPage, setCurrentPage] = useState(Number(sessionStorage.getItem('pageNumber')) || 1);
  const [selectedBrand, setSelectedBrand] = useState(sessionStorage.getItem('brand') || '');
  const [minimumPrice, setMinimumPrice] = useState(Number(sessionStorage.getItem('priceMin')) || 0);
  const [maximumPrice, setMaximumPrice] = useState(Number(sessionStorage.getItem('priceMax')) || 999);

  const { category } = useParams();

  // Obsługa zmiany płci/gender
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
    sessionStorage.setItem('gender', event.target.value);
  };

  // Obsługa zmiany liczby produktów na stronę
  const handleItemsPerPageChange = (event) => {
    const newValue = Number(event.target.value);
    setItemsPerPage(newValue);
    sessionStorage.setItem('pageSize', newValue);
  };

  // Obsługa zmiany strony
  const handlePageChange = (newValue) => {
    setCurrentPage(newValue);
    sessionStorage.setItem('pageNumber', newValue);
  };

  // Nowe obsługi filtrów
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    sessionStorage.setItem('brand', event.target.value);
  };

  const handlePriceMinChange = (event) => {
    setMinimumPrice(event.target.value);
    sessionStorage.setItem('priceMin', event.target.value);
  };

  const handlePriceMaxChange = (event) => {
    setMaximumPrice(event.target.value);
    sessionStorage.setItem('priceMax', event.target.value);
  };

  useEffect(() => {
    props.setIsLoading(true);

    axios.post(`${apiK}/products`, { 
      pageSize: Number(sessionStorage.getItem('pageSize')) || 30,
      pageNumber: Number(sessionStorage.getItem('pageNumber')) || 1,
      filterBasicInfo: {
        brand: sessionStorage.getItem('brand') || '',
        gender: sessionStorage.getItem('gender') || 'ALL',
        category: category,
        priceMin: Number(sessionStorage.getItem('priceMin')) || 0,
        priceMax: Number(sessionStorage.getItem('priceMax')) || 999
      }
    })
    .then(response => {
      props.setProducts(response.data.products);

      sessionStorage.setItem('numberOfPages', response.data.total_pages);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      props.setIsLoading(false);
    });

  }, [selectedGender, itemsPerPage, currentPage, selectedBrand, minimumPrice, maximumPrice]);

  return (
    <div className={styles.productListing}>
      <div className={styles.controls}>
        <select value={selectedGender} onChange={handleGenderChange} className={styles.dropdown}>
          <option value="ALL">Wszystkie</option>
          <option value="WOMEN">Kobiety</option>
          <option value="MEN">Mężczyźni</option>
          <option value="UNISEX">Unisex</option>
        </select>
        <select value={itemsPerPage} onChange={handleItemsPerPageChange} className={styles.dropdown}>
          <option value="20">20 produktów</option>
          <option value="30">30 produktów</option>
          <option value="40">40 produktów</option>
        </select>
        <input type="text" value={selectedBrand} onChange={handleBrandChange} placeholder="Marka" />
        Cena min:
        <input type="number" value={minimumPrice} 
          className={styles.num} onChange={handlePriceMinChange} />
        Cena max:
        <input type="number" value={maximumPrice} 
          className={styles.num} onChange={handlePriceMaxChange} />
      </div>

      <div className={styles.pagination}>
        <input
          type="number"
          value={currentPage}
          onChange={(e) => handlePageChange(Number(e.target.value))}
          max={sessionStorage.getItem('currentPage')}
        />
        <p>z {sessionStorage.getItem('currentPage')}</p>
      </div>
    </div>
  );
};

export default StoreProductsFilters;
