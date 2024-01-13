import React, { useState, useEffect } from 'react';
import styles from './StoreStartPage.module.scss';

import StoreStartPageCategories from './StoreStartPageCategories/StoreStartPageCategories';
import StoreStartPageInfo from './StoreStartPageInfo/StoreStartPageInfo';
import StoreStartPageLogos from './StoreStartPageLogos/StoreStartPageLogos';
import StoreStartPageTitle from './StoreStartPageTitle/StoreStartPageTitle';

function StoreStartPage(props) {
  return (
    <div className={styles.container}>
      <StoreStartPageLogos />

      <div className={styles.wrapper}>
        <StoreStartPageTitle />
      </div>  

      <div className={styles.wrapperStretchedForCategories}>
        <StoreStartPageCategories />
      </div>

      <StoreStartPageInfo />
    </div>
  );
}

export default StoreStartPage;