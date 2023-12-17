import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import Langs from './Langs/Langs';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.reset_link}>
        <div className={styles.logo}>
          <img 
            src={process.env.PUBLIC_URL + '/website/logo/renox_logo_white.png'} 
            alt="Renox logo" 
            style={{
              width: '85px',
              height: '40px'
            }}
          />
        </div>
      </Link>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <Link to="/serwis" className={styles.reset_link}>
          <div className={styles.box}>
            <span>Serwis</span>
            <span className={styles.underlineWhite}></span>
          </div>
        </Link>
        {/* <Link to="/aktualności" className={styles.reset_link}>
          <div className={styles.box}>
            <span>Aktualności</span>
            <span className={styles.underlineWhite}></span>
          </div>
        </Link> */}
        <Link to="/oferta" className={styles.reset_link}>
          <div className={styles.box}>
            <span>Oferta</span>
            <span className={styles.underlineWhite}></span>
          </div>
        </Link>
        <Link to="/kontakt" className={styles.reset_link}>
          <div className={styles.box}>
            <span>Kontakt</span>
            <span className={styles.underlineWhite}></span>
          </div>
        </Link>
        <Link to="/sklep/" className={styles.reset_link_store}>
          <div className={styles.box}>
            <span><strong>Sklep internetowy</strong></span>
            <span className={styles.underlineWhite}></span>
          </div>
        </Link>

        <Langs />
      </div>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </div>
  );
}

export default Header;