import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.scss';

import MainSection from './MainPageSections/MainSection';
import MainPageDecription from './MainPageDecription/MainPageDecription';
import MainPageLogos from './MainPageLogos/MainPageLogos';
import MainPageOffer from './MainPageOffer/MainPageOffer';
import MainPageContactUs from './MainPageContactUs/MainPageContactUs';
import MainPageNumbers from './MainPageNumbers/MainPageNumbers';
import MainPageNewsletter from './MainPageNewsletter/MainPageNewsletter';
import MainPageMap from './MainPageMap/MainPageMap';

function MainPage() {
  return (
    <div className={styles.container}>
      
      <MainSection />

      <div className={styles.wrapper}>
        <MainPageDecription />
      </div>

      <div className={styles.wrapperStretchedForLittlePx}>
        <MainPageLogos />
      </div>

      <div className={styles.wrapper}>
        <MainPageOffer />
      </div>
      
      <MainPageContactUs />
    
      <div className={styles.wrapperStretchedForLittlePx}>
        <MainPageNumbers />
      </div>

      <div className={styles.wrapper}>
        <MainPageNewsletter />
      </div>

      <div className={styles.wrapper}>
        <MainPageMap />
      </div>
    
    </div>
  );
}

export default MainPage;