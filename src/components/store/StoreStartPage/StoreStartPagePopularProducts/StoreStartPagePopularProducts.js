import React, { useState } from 'react';
import styles from './StoreStartPagePopularProducts.module.scss';

function StoreStartPagePopularProducts() {
  const products = [
    { id: 1, name: 'Produkt 1', price: '$10' },
    { id: 2, name: 'Produkt 2', price: '$15' },
    { id: 3, name: 'Produkt 3', price: '$20' },
    { id: 4, name: 'Produkt 4', price: '$25' },
    { id: 5, name: 'Produkt 5', price: '$30' },
    { id: 6, name: 'Produkt 6', price: '$35' },
    { id: 7, name: 'Produkt 7', price: '$40' },
    { id: 8, name: 'Produkt 8', price: '$45' },
    { id: 9, name: 'Produkt 9', price: '$50' },
    { id: 10, name: 'Produkt 10', price: '$55' },
    { id: 11, name: 'Produkt 11', price: '$60' },
    { id: 12, name: 'Produkt 12', price: '$65' },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex(startIndex - 1 < 0 ? 0 : startIndex - 1);
  };

  const handleNextClick = () => {
    setStartIndex(startIndex + 1 >= products.length ? startIndex : startIndex + 1);
  };

  const visibleProducts = products.slice(startIndex, startIndex + 4);

  return (
    <div className={styles.wrapper}>

      <div className={styles.title_container}>
        <h1>Popularne produkty</h1>
      </div>

      <div className={styles.inprogress}>
        <img 
          src={process.env.PUBLIC_URL + '/inprogress.png'} 
          alt="Renox logo" 
        />

        <p>Ten element nie jest jeszcze gotowy</p>
      </div>

      {/* <div className={styles.carousel}>
        <button className={styles.prevButton} onClick={handlePrevClick} disabled={startIndex === 0}>Previous</button>
        <div className={styles.productsContainer}>
          {visibleProducts.map((product) => (
            <div key={product.id} className={styles.product}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
        <button className={styles.nextButton} onClick={handleNextClick} disabled={startIndex + 4 >= products.length}>Next</button>
      </div> */}
    </div>
  );
}

export default StoreStartPagePopularProducts;
