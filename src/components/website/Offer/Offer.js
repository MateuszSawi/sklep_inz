import React, { useState, useEffect } from 'react';
import styles from './Offer.module.scss';

import OfferCards from './OfferCards/OfferCards';
import OfferTitleDescription from './OfferTitleDescription/OfferTitleDescription'

function Offer() {
  return (
    <div className={styles.wrapper}>
      <OfferTitleDescription />
      <OfferCards />
    </div>
  );
}

export default Offer;