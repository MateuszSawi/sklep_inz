import React, { useState, useEffect } from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h4>Kolumna 1</h4>
        <p>Tekst dla kolumny 1...</p>
      </div>
      <div className={styles.column}>
        <h4>Kolumna 2</h4>
        <p>Tekst dla kolumny 2...</p>
      </div>
      <div className={styles.column}>
        <h4>Kolumna 3</h4>
        <p>Tekst dla kolumny 3...</p>
      </div>
    </footer>
  );
}

export default Footer;