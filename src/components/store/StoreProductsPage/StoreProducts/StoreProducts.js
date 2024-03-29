import React, {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './StoreProducts.module.scss';
import axios from 'axios';
import { apiK } from '../../../../apiConfig';
import Products from './Products/Products';
import CategoriesMenu from './CategoriesMenu/CategoriesMenu';

function StoreProducts(props) {
  const { category } = useParams();
  // const selectedCurrency = localStorage.getItem('selectedCurrency');
  const exchangeRate = localStorage.getItem('exchangeRate');

  useEffect(() => {
    props.setIsLoading(true);

    axios.post(`${apiK}/products`, { 
      pageSize: Number(sessionStorage.getItem('pageSize')) || 30,
      pageNumber: Number(sessionStorage.getItem('pageNumber')) || 1,
      filterBasicInfo: {
        brand: sessionStorage.getItem('brand') || '',
        gender: sessionStorage.getItem('gender') || 'ALL',
        category: category,
        priceMin: Number((sessionStorage.getItem('priceMin') / exchangeRate).toFixed(2)) || 0,
        priceMax: Number(sessionStorage.getItem('priceMax')) || 999
      }
    })
    .then(response => {
      props.setProducts(response.data.products);
      sessionStorage.setItem('numberOfPages', response.data.numberOfPages);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      props.setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.categoriesMenuWrapper}>
        <CategoriesMenu 
          isLoading={props.isLoading}
          setIsLoading={props.setIsLoading}

          products={props.products} 
          setProducts={props.setProducts}
        />
      </div>
      <div>
        <Products 
          isLoading={props.isLoading}
          setIsLoading={props.setIsLoading}
          products={props.products} 
          setProducts={props.setProducts}
        />
      </div>
    </div>
  );
}

export default StoreProducts;
