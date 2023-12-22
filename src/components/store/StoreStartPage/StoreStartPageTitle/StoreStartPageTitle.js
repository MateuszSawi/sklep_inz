import React, { useState, useEffect } from 'react';
import styles from './StoreStartPageTitle.module.scss'

function StoreStartPageTitle() {

  const lang = localStorage.getItem('lang') || 'pl';

  return (
    <div className={styles.wrapper}>
      {lang === 'pl' &&
        <h1>Sklep Internetowy</h1>
      }
      {lang === 'ua' &&
        <h1>Інтернет-магазин</h1>
      }
      {lang === 'en' &&
        <h1>Online shop</h1>
      }
    </div>
  );
}

export default StoreStartPageTitle;