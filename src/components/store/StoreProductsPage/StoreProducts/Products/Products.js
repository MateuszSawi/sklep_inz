import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Products.module.scss';
import axios from 'axios';

function Products(props) {

  const [products, setProducts] = useState([]);

  const category = localStorage.getItem('category');

  console.log('products: ', category);

  const navigate = useNavigate();

  const handleLinkClick = (product_id) => {
    localStorage.setItem('product_id', product_id);
    navigate(`/sklep/${category}/single`);
  };

  // -------------------------------------------------------------------------- api
  
  useEffect(() => {

    console.log('API products: ', category);

    axios.post("http://127.0.0.1:8000/products/product_list/", { 
      params: {
        category : category , 
        subcategory : '',
        page_size : 30,
        page_number: 1
      }
    })
    .then(response => {
      // console.log(response.data.products);
      setProducts(response.data.products);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div className={styles.cardsWrapper}>
      {products.map(product => 
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
              <img src="/k.png" alt="Domyślny obraz" className={styles.productImage} />
            )}
          </div>

          <div className={styles.cardBody}>
            {/* <h5 className={styles.productTitle}>{product.product_name}</h5> */}
            <p className={styles.productPrice}>Cena netto: {product.price_netto} zł</p>
            <p className={styles.productPrice}>Cena brutto: {product.price_brutto} zł</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
