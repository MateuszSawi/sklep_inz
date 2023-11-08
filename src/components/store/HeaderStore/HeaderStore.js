import React from 'react';
import styles from './HeaderStore.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
// import logo from './logo.png';

function HeaderStore() {
  return (
    <header className={styles.header}>
      {/* <div className={styles.header__left}>
        <img 
          src={process.env.PUBLIC_URL + '/website/logo/renox_logo.jpg'} 
          alt="Renox logo" 
          style={{
            width: '85px',
            height: '40px'
          }}
        />
      </div> */}
      <div></div>
      <div className={styles.header_center}>
        <div className={styles.inputContainer}>
          <input type="text" className={styles.input} placeholder="Nazwa lub numer katalogowy" />
          <button type="button" className={styles.searchButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className={styles.header_right}>
        <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
        <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
      </div>
    </header>
  );
}

export default HeaderStore;


      {/* <Link to="/sklep/logowanie">
        <div>
          <span>Logowanie</span>
          <span></span>
        </div>
      </Link>

      <Link to="/sklep/rejestracja">
        <div>
          <span>rejestracja</span>
          <span></span>
        </div>
      </Link>

      <Link to="/sklep/reset-hasła">
        <div>
          <span>reset hasła</span>
          <span></span>
        </div>
      </Link>

      <Link to="/sklep/zmiana-hasła">
        <div>
          <span>zmiana hasła</span>
          <span></span>
        </div>
      </Link>
    </div> */}
