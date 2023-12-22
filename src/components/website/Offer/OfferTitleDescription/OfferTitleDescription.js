import React, { useState, useEffect } from 'react';
import styles from './OfferTitleDescription.module.scss';

function OfferTitleDescription() {

  const lang = localStorage.getItem('lang') || 'pl';

  return (
    <div className={styles.wrapper}>
      {lang === 'pl' &&
        <>
          <h1>Nasza oferta</h1>
          <p>
            Jesteśmy wiodącym na rynku dostawcą kompleksowych rozwiązań dla branży budowlanej! 
            Jesteśmy dumni z tego, że od lat dostarczamy doskonałej jakości maszyny i 
            części do maszyn budowlanych, wspierając naszych klientów w osiągnięciu ich 
            celów budowlanych. Nasza wszechstronna oferta obejmuje:
          </p>
        </>
      }
      {lang === 'ua' &&
        <>
          <h1>Наша пропозиція</h1>
          <p>
            Ми є провідним постачальником комплексних рішень для будівельної галузі!
            Ми пишаємося тим, що протягом багатьох років надаємо машини відмінної якості
            деталей для будівельної техніки, підтримуючи наших клієнтів у досягненні їхніх цілей
            будівельних цілей. Наша комплексна пропозиція включає:
          </p>
        </>
      }
      {lang === 'en' &&
        <>
          <h1>Our offer</h1>
          <p>
            We are a market-leading supplier of comprehensive solutions for the construction industry!
            We are proud of the fact that we have been providing excellent quality machines for years
            parts for construction machinery, supporting our customers in achieving their goals
            construction purposes. Our comprehensive offer includes:
          </p>
        </>
      }
    </div>
  );
}

export default OfferTitleDescription;