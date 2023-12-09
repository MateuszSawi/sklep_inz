import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './StoreProducts.module.scss';
import categoriesData from '../categories';
import { FaChevronDown } from 'react-icons/fa';
import axios from 'axios';
import { apiK, apiP } from '../../../../apiConfig';
// import { FaSpinner } from 'react-icons/fa';

import Products from './Products/Products';
import CategoriesMenu from './CategoriesMenu/CategoriesMenu';

function StoreProducts(props) {
  
  // const [sortBy, setSortBy] = useState(sessionStorage.getItem('sortBy') || 'available');
  // const [productsPerPage, setProductsPerPage] = useState(sessionStorage.getItem('productsPerPage') || 30);

  const { category, subcategory } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  // console.log('BEZ NICZEGO: ', sortBy, productsPerPage)

  useEffect(() => {
    // console.log('ładowania produktów: ', sortBy, productsPerPage)

    setIsLoading(true);

    // console.log(sessionStorage.getItem('pageNumber'))
    // console.log(sessionStorage.getItem('productsPerPage'))

    const params = {
      category: category, 
      subcategory: category === subcategory ? '' : subcategory,
      sort_option: sessionStorage.getItem('sortBy'),
      page_size: sessionStorage.getItem('productsPerPage'),
      page_number: sessionStorage.getItem('pageNumber')
    };

    axios.post(`${apiP}/products/product_list/`, { 
      params: params
    })
    .then(response => {
      // console.log(response.data.products);
      props.setProducts(response.data.products);

      props.setPageNumber(response.data.total_pages)
      sessionStorage.setItem('totalPages', response.data.total_pages);

      console.log(response.data.total_pages)
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false); // Ustaw ładowanie na false po zakończeniu żądania
    });

  }, [category, subcategory, props.sortBy, props.productsPerPage, props.pageNumber, props.pageNumber]);

  // useEffect(() => {
  //   const handleStorageChange = (event) => {
  //     if (event.key === 'sortBy') {
  //       setSortBy(sessionStorage.getItem('sortBy') || 'available');
  //     }
  //     if (event.key === 'productsPerPage') {
  //       setProductsPerPage(sessionStorage.getItem('productsPerPage') || 30);
  //     }
  //   };

  //   window.addEventListener('storage', handleStorageChange);

  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, []);

  return (
    <div className={styles.wrapper}>

      <CategoriesMenu 
        subcategory={props.subcategory} 
        setSubcategory={props.setSubcategory}  

        isLoading={isLoading}
        setIsLoading={setIsLoading}

        category={props.category} 
        setCategory={props.setCategory}

        // sortBy={props.sortBy}
        // productsPerPage={props.productsPerPage}
        // pageNumber={props.pageNumber}
      />

      <div>
        <Products 
          category={props.category} 
          products={props.products}

          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default StoreProducts;
