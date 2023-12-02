import React from 'react';
import styles from './HeaderStore.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import LoginsMainPage from '../Login/LoginsMainPage';

function HeaderStore() {

  const navigate = useNavigate();

  const handleLinkClickUser = (category, title) => {
    navigate(`/sklep/logowanie`);
  };

  const handleLinkClickCart = (category, title) => {
    navigate(`/sklep/koszyk`);
  };

  const handleLinkClickFavorite = (category, title) => {
    navigate(`/sklep/ulubione`);
  };

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
        <div onClick={() => handleLinkClickCart()}>
          <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
        </div>

        <div onClick={() => handleLinkClickFavorite()}>
          <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        </div>
        
        <div onClick={() => handleLinkClickUser()}>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
        </div>
      </div>
    </header>
  );
}

export default HeaderStore;

