import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Products.module.scss';
import axios from 'axios';
// import categoriesData from '../categories';

function Products(props) {

  const [activeCategory, setActiveCategory] = useState(null);
  
  useEffect(() => {
    axios.post("http://127.0.0.1:8000/products/product_list/", { category : "Lemiesze" , subcategory : 'Śruby lemiesza' }, {
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Authorization': sessionid
      // },
      // withCredentials: true
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      sdfsdf
    </div>
  );
}

export default Products;
