import React, { useState, useEffect } from 'react';
import styles from './StoreStartPageNewsletter.module.scss'

function StoreStartPageNewsletter() {
  return (
    <div className={styles.newsletter_container}>
      <div className={styles.title_container}>
        <h1>Zapisz się na nasz Newsletter</h1>
      </div>
      <input type="email" placeholder="Wprowadź swój email" />
      <button>ZAPISZ SIĘ</button>
    </div>
  );
}

export default StoreStartPageNewsletter;