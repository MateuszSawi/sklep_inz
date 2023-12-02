import React, { useState, useEffect } from 'react';
import styles from './Offer.module.scss';

import OfferCards from './OfferCards/OfferCards';
import OfferTitleDescription from './OfferTitleDescription/OfferTitleDescription'

function Offer() {
  return (
    <>
      <div className={styles.wrapperDescription}>
        <OfferTitleDescription />
      </div>
      <div className={styles.wrapperCards}>
        <OfferCards />
      </div>
    </>
  );
}

export default Offer;