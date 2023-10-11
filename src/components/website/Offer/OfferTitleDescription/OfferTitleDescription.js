import React, { useState, useEffect } from 'react';
import styles from './OfferTitleDescription.module.scss';

function OfferTitleDescription() {
  return (
    <div className={styles.wrapper}>
      <h1>Nasza oferta</h1>

      <p>Jesteśmy wiodącym na rynku dostawcą kompleksowych rozwiązań dla branży budowlanej! 
        Jesteśmy dumni z tego, że od lat dostarczamy doskonałej jakości maszyny i 
        części do maszyn budowlanych, wspierając naszych klientów w osiągnięciu ich 
        celów budowlanych. Nasza wszechstronna oferta obejmuje:
      </p>
    </div>
  );
}

export default OfferTitleDescription;