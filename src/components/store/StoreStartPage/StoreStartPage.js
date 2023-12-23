import React, { useState, useEffect } from 'react';
import styles from './StoreStartPage.module.scss';
import { Link } from 'react-router-dom';

// import StoreStartPageDescription from './StoreStartPageDescription/StoreStartPageDescription';
import StoreStartPageCategories from './StoreStartPageCategories/StoreStartPageCategories';
import StoreStartPageInfo from './StoreStartPageInfo/StoreStartPageInfo';
// import StoreStartPagePopularProducts from './StoreStartPagePopularProducts/StoreStartPagePopularProducts';
import StoreStartPageLogos from './StoreStartPageLogos/StoreStartPageLogos';
// import StoreStartPageNewsletter from './StoreStartPageNewsletter/StoreStartPageNewsletter';
import StoreStartPageTitle from './StoreStartPageTitle/StoreStartPageTitle';

function StoreStartPage(props) {
  return (
    <div className={styles.container}>

      {/* <div className={styles.wrapperStretchedForLittlePx}> */}
        <StoreStartPageLogos />
      {/* </div> */}

      <div className={styles.wrapper}>
        <StoreStartPageTitle />
      </div>     

      <div className={styles.wrapperStretchedForCategories}>
        <StoreStartPageCategories 
          // category={props.category} 
          // setCategory={props.setCategory}

          // categoryPath={props.categoryPath} 
          // setCategoryPath={props.setCategoryPath}
        />
      </div>
{/* 
      <div className={styles.wrapper}>
        <StoreStartPageDescription />
      </div>  */}

      {/* <StoreStartPagePopularProducts /> */}

      {/* <div className={styles.wrapper}>
        <StoreStartPageNewsletter />
      </div> */}

      <StoreStartPageInfo />
    
    </div>
  );
}

export default StoreStartPage;