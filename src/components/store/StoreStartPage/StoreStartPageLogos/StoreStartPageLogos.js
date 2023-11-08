import React, { useState, useEffect } from 'react';
import styles from './StoreStartPageLogos.module.scss';


function StoreStartPageLogos() {
  const logos = [
    '/website/MainPage/logos/miller_logo.png',
    '/website/MainPage/logos/allu_logo.jpg',
    '/website/MainPage/logos/berco_logo.jpg',
    '/website/MainPage/logos/esco_logo.png',
    '/website/MainPage/logos/ktr_logo.jpg'
  ];

  return (
    <div className={styles.logo_section}>
      {logos.map((logoPath, index) => (
        <img 
          key={index} 
          src={process.env.PUBLIC_URL + logoPath} 
          alt={`Logo ${index + 1}`} 
        />
      ))}
    </div>
  );
}

export default StoreStartPageLogos;