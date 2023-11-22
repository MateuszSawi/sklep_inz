import React, { useState, useEffect } from 'react';
import styles from './StoreStartPage.module.scss';
import { Link } from 'react-router-dom';

import StoreStartPageDescription from './StoreStartPageDescription/StoreStartPageDescription';
import StoreStartPageCategories from './StoreStartPageCategories/StoreStartPageCategories';
import StoreStartPageInfo from './StoreStartPageInfo/StoreStartPageInfo';
import StoreStartPagePopularProducts from './StoreStartPagePopularProducts/StoreStartPagePopularProducts';
import StoreStartPageLogos from './StoreStartPageLogos/StoreStartPageLogos';
import StoreStartPageNewsletter from './StoreStartPageNewsletter/StoreStartPageNewsletter';

function StoreStartPage(props) {
  return (
    <div className={styles.container}>

          <Link to="logowanie" className={styles.link}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }}>/logowanie</p>
          </Link>
          <Link to="rejestracja" className={styles.link}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }}>/rejestracja</p>
          </Link>
          <Link to="reset-hasła" className={styles.link}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }}>/reset-hasła</p>
          </Link>
          <Link to="reset-nowe-hasło" className={styles.link}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }}>/reset-nowe-hasło</p>
          </Link>
          <Link to="zmiana-hasła" className={styles.link}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }}>/zmiana-hasła</p>
          </Link>

      
      <div className={styles.wrapper}>
        <StoreStartPageDescription />
      </div>

      <div className={styles.wrapperStretchedForCategories}>
        <StoreStartPageCategories 
          category={props.category} 
          setCategory={props.setCategory}

          // categoryPath={props.categoryPath} 
          // setCategoryPath={props.setCategoryPath}
        />
      </div>

      <StoreStartPageInfo />

      <StoreStartPagePopularProducts />

      <div className={styles.wrapperStretchedForLittlePx}>
        <StoreStartPageLogos />
      </div>

      <div className={styles.wrapper}>
        <StoreStartPageNewsletter />
      </div>
    
    </div>
  );
}

export default StoreStartPage;