import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './StoreProducts.module.scss';
import categoriesData from '../categories';
import { FaChevronDown } from 'react-icons/fa';
import axios from 'axios';
import { apiK, apiP } from '../../../../apiConfig';

import Products from './Products/Products';
import CategoriesMenu from './CategoriesMenu/CategoriesMenu';
import CategoriesMenuMobile from './CategoriesMenuMobile/CategoriesMenuMobile';

function StoreProducts(props) {
  const { category, subcategory } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

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
      props.setProducts(response.data.products);

      props.setPageNumber(response.data.total_pages)
      sessionStorage.setItem('totalPages', response.data.total_pages);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false); // Ustaw ładowanie na false po zakończeniu żądania
    });

  }, [category, subcategory, props.sortBy, props.productsPerPage, props.pageNumber, props.pageNumber]);

  return (
    <div className={styles.wrapper}>

    <div className={styles.categoriesMenuMobileWrapper}>
      <CategoriesMenuMobile 
        subcategory={props.subcategory} 
        setSubcategory={props.setSubcategory}  

        isLoading={isLoading}
        setIsLoading={setIsLoading}

        category={props.category} 
        setCategory={props.setCategory}
      />
    </div>

    <div className={styles.categoriesMenuWrapper}>
      <CategoriesMenu 
        subcategory={props.subcategory} 
        setSubcategory={props.setSubcategory}  

        isLoading={isLoading}
        setIsLoading={setIsLoading}

        category={props.category} 
        setCategory={props.setCategory}
      />
    </div>

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
