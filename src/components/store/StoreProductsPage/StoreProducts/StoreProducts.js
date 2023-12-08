import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './StoreProducts.module.scss';
import categoriesData from '../categories';
import { FaChevronDown } from 'react-icons/fa';
import axios from 'axios';
import { apiK, apiP } from '../../../../apiConfig';

import Products from './Products/Products';
import CategoriesMenu from './CategoriesMenu/CategoriesMenu';

function StoreProducts(props) {
  // const [activeCategory, setActiveCategory] = useState(null);
  // const refs = useRef({});

  // const handleCategoryClick = (category) => {
  //   if (activeCategory === category) {
  //     setActiveCategory(null);
  //   } else {
  //     setActiveCategory(category);
  //     // When not the current active category, we remove the height
  //     if (refs.current[activeCategory]) {
  //       refs.current[activeCategory].style.maxHeight = null;
  //     }
  //     // We calculate and update the height dynamically for the new active category
  //     const current = refs.current[category];
  //     current.style.maxHeight = `${current.scrollHeight}px`;
  //   }
  // };

  // const setRef = (category, el) => {
  //   refs.current[category] = el;
  // };

  // // params

  const { category, subcategory } = useParams();

  // const navigate = useNavigate();

  // const handleLinkClick = (subcategory, categoryParam) => {
  //   props.setSubcategory(subcategory);

  //   const params = {
  //     category: categoryParam, 
  //     subcategory: category === subcategory ? '' : subcategory,
  //     page_size: 30,
  //     page_number: 1
  //   };

  //   axios.post(`${apiP}/products/product_list/`, { 
  //     params: params
  //   })
  //   .then(response => {
  //     // console.log(response.data.products);
  //     props.setProducts(response.data.products);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

  //   navigate(`/sklep/${category}/${subcategory}`);
  // };

  //

  useEffect(() => {
    const params = {
      category: category, 
      subcategory: category === subcategory ? '' : subcategory,
      page_size: 30,
      page_number: 1
    };

    axios.post(`${apiP}/products/product_list/`, { 
      params: params
    })
    .then(response => {
      // console.log(response.data.products);
      props.setProducts(response.data.products);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <CategoriesMenu 
        subcategory={props.subcategory} 
        setSubcategory={props.setSubcategory}  

        category={props.category} 
        setCategory={props.setCategory}
      />

      <div>
        <Products 
          category={props.category} 
          products={props.products}
        />
      </div>
    </div>
  );
}

export default StoreProducts;
