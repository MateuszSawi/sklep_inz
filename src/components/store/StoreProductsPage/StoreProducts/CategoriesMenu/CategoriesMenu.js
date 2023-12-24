import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './CategoriesMenu.module.scss';
import categoriesData from '../../categories';
import axios from 'axios';
import { apiK, apiP } from '../../../../../apiConfig';

function CategoriesMenu(props) {
  const refs = useRef({});

  const { category } = useParams();

  const handleCategoryClick = (category) => () => {
    navigate(`/${category}`);
    handleLinkClick(category)
  };

  const setRef = (category, el) => {
    refs.current[category] = el;
  };

  const navigate = useNavigate();

  const handleLinkClick = (categoryParam) => {
    props.setIsLoading(true);

    axios.post(`${apiK}/products`, { 
      pageSize: Number(sessionStorage.getItem('pageSize')) || 30,
      pageNumber: Number(sessionStorage.getItem('pageNumber')) || 1,
      filterBasicInfo: {
        brand: sessionStorage.getItem('brand') || '',
        gender: sessionStorage.getItem('gender') || 'ALL',
        category: categoryParam,
        priceMin: Number(sessionStorage.getItem('priceMin')) || 0,
        priceMax: Number(sessionStorage.getItem('priceMax')) || 999
      }
    })
    .then(response => {
      props.setProducts(response.data.products);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      props.setIsLoading(false);
    });

    navigate(`/${category}`);
  };

  return (
    <div>
      <Link to="/" className={styles.link} >
        <div className={styles.mainPageLink}>
            <p><strong>Strona Główna</strong></p>
        </div>
      </Link>
      <div className={styles.storeProducts}>
        {categoriesData.map((item, index) => {
          
          // const isActive = activeCategory === category;

          return (
            <div key={index} className={styles.categoryWrapper}>

              <div className={styles.categoryTitle} 
                  onClick={handleCategoryClick(item.category)}>
                <p>{item.categoryToDisplay}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesMenu;
