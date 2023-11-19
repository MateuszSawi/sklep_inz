import React, { useState, useEffect } from 'react';
import ServiceDecription from './ServiceDecription/ServiceDecription';
import styles from './Service.module.scss';

function Service() {

  const logos = [
    '/website/Service/wb1_NEW.jpg',
    '/website/Service/Wymiana podwozia CAT D6T z ONE na standard_RENOX_OLSZTYN (20).jpg',
    '/website/Service/serwis_CAT_D6_RENOX (33).jpg',
    '/website/Service/serwis_CAT_D6_RENOX (32).jpg',
    '/website/Service/serwis_CAT_D6_RENOX (6).jpg',
    '/website/Service/serwis CAT_RENOX.jpg',
    '/website/Service/parawa CAT_RENOX_OLSZTYN.jpg',
    '/website/Service/tulejowanie.jpg',
  ];

  return (
    <div className={styles.container}>
      <h1>Nasz Serwis</h1>

      <div className={styles.gap}></div>

      <ServiceDecription />

      <div className={styles.gap}></div>

      <div className={styles.imagesWrapper}>
        {logos.map((logoPath, index) => (
          <img 
            key={index} 
            src={process.env.PUBLIC_URL + logoPath} 
            alt={`Serwis ${index + 1}`} 
          />
        ))}
      </div>
    </div>
  );
}

export default Service;