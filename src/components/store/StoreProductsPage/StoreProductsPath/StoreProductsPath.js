import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './StoreProductsPath.module.scss';
import axios from 'axios';

function StoreProductsPath(props) {

  const { category, subcategory, singleProduct } = useParams();

  // console.log(category, subcategory, singleProduct)

  const navigate = useNavigate();

  const handleLinkClickCategory = () => {
    const params = {
      category: category, 
      subcategory: '',
      page_size: 30,
      page_number: 1
    };

    axios.post("/products/product_list/", { 
      params: params
    })
    .then(response => {
      // console.log(response.data.products);
      props.setProducts(response.data.products);
    })
    .catch(error => {
      console.error(error);
    });

    navigate(`/sklep/${category}`);
  };

  const handleLinkClickSubcategory = () => {
    const params = {
      category: category, 
      subcategory: category === subcategory ? '' : subcategory,
      page_size: 30,
      page_number: 1
    };

    axios.post("http://127.0.0.1:8000/products/product_list/", { 
      params: params
    })
    .then(response => {
      // console.log(response.data.products);
      props.setProducts(response.data.products);
    })
    .catch(error => {
      console.error(error);
    });
    
    navigate(`/sklep/${category}/${subcategory}`);
  };

  let categoryToDisplay;

  if (category === 'Zeby_adaptery'){
    categoryToDisplay = 'Zęby i adaptery';
  }
  if (category === 'Gasienice_do_minikoparek'){
    categoryToDisplay = 'Gąsienice do minikoparek';
  }
  if (category === 'Sprezyny_napinacze'){
    categoryToDisplay = 'Sprężyny i napinacze';
  }
  if (category === 'Czesci_do_kruszarek_i_przesiewaczy'){
    categoryToDisplay = 'Cześci do kruszarek i przesiewaczy';
  }
  if (category === 'Maszyny_uzywane'){
    categoryToDisplay = 'Maszyny używane';
  }
  if (category === 'Czesci_zamienne'){
    categoryToDisplay = 'Części zamienne';
  }
  if (category === 'Lyzki_przesiewajace'){
    categoryToDisplay = 'Łyżki przesiewające';
  }
  if (category === 'Lemiesze'){
    categoryToDisplay = 'Lemiesze';
  }
  if (category === 'Podwozia'){
    categoryToDisplay = 'Podwozia';
  }
  if (category === 'Sworznie'){
    categoryToDisplay = 'Sworznie';
  }
  if (category === 'Tuleje'){
    categoryToDisplay = 'Tuleje';
  }
  if (category === 'Uszczelnienia'){
    categoryToDisplay = 'Uszczelnienia';
  }

  return (
    <div className={styles.pathWrapper}>
      <div onClick={handleLinkClickCategory} className={styles.pathSegment}>      
        <p className={styles.linkInPath}>{categoryToDisplay}</p>
      </div>
      {subcategory && (subcategory !== category) && (
        <div onClick={handleLinkClickSubcategory} className={styles.pathSegment}>      
          <p>&gt;&nbsp;</p><p className={styles.linkInPath}>{subcategory}</p>
        </div>
      )}
      {singleProduct && (
        <div className={`${styles.pathSegment} ${styles.active}`}>
          <p>&gt;&nbsp;</p><p className={styles.linkInPath}>{singleProduct}</p>
        </div>
      )}
    </div>
  );
}

export default StoreProductsPath;