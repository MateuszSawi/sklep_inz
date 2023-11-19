import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './Products.module.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Products(props) {

  const { category, subcategory, singleProduct } = useParams();

  const navigate = useNavigate();

  const handleLinkClick = (singleProduct) => {
    if (subcategory) {
      navigate(`/sklep/${category}/${subcategory}/${singleProduct}`);
    } else {
      navigate(`/sklep/${category}/${category}/${singleProduct}`);
    }
  };

  // -------------------------------------------------------------------------- api
  
  // useEffect(() => {

  //   console.log('API products: ', category);

  //   axios.post("http://127.0.0.1:8000/products/product_list/", { 
  //     params: {
  //       category : category , 
  //       subcategory : subcategory,
  //       page_size : 30,
  //       page_number: 1
  //     }
  //   })
  //   .then(response => {
  //     // console.log(response.data.products);
  //     setProducts(response.data.products);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // }, []);

  return (
    <div className={styles.cardsWrapper}>
      {props.products.map(product => 
        product.product_name && product.price_netto && product.price_brutto &&

        <div key={product.product_id} className={styles.card} onClick={() => handleLinkClick(product.product_id)}>
          <div className={styles.cardBody}>
            <h5 className={styles.productTitle}>{product.product_name}</h5>
          </div>

          <div className={styles.imageContainer}>
            <img src="/website/logo/logo_renox_transparent.png" alt="Watermark" className={styles.watermark} />
            
            {product.primary_link ? (
              <img src={product.primary_link} alt={product.product_name} className={styles.productImage} />
            ) : (
              <img src="/inprogress.png" alt="Domyślny obraz" className={styles.productImage} />
            )}
          </div>

          <div className={styles.cardBody}>
            {/* <h5 className={styles.productTitle}>{product.product_name}</h5> */}
            <p className={styles.productPrice}>Cena netto: {product.price_netto} zł</p>
            <p className={styles.productPrice}>Cena brutto: {product.price_brutto} zł</p>
            <button className={product.quantity > 0 ? styles.buttonAvailable : styles.buttonUnavailable}>
              {product.quantity > 0 ? (
                <>
                  <img src="/store/cart.png" alt="Moja Ikona" className={styles.icon}/>
                  <p>Dodaj do koszyka</p>
                </>
              ) : (
                <p>Niedostępne</p>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
