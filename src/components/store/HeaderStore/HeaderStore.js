import React from 'react';
import styles from './HeaderStore.module.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import CurrencySelector from './CurrencySelector/CurrencySelector'

function HeaderStore() {

  const navigate = useNavigate();

  const handleLinkClickUser = () => {
    navigate(`/logowanie`);
  };

  const handleLinkClickCart = () => {
    navigate(`/koszyk`);
  };

  const handleLinkClickFavorite = () => {
    navigate(`/ulubione`);
  };

  const handleLinkClickMainPage = () => {
    navigate(`/`);
  };

  return (
    <header className={styles.header}>
      <CurrencySelector />

      <img 
        onClick={() => handleLinkClickMainPage()}
        src={process.env.PUBLIC_URL + '/website/logo/Clothes.png'} 
        alt={'logo'} 
      />

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

