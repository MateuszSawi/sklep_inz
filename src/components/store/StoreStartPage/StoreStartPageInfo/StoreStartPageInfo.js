import React from 'react';
import styles from './StoreStartPageInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCreditCard, faPercent, faLifeRing } from '@fortawesome/free-solid-svg-icons';


function StoreStartPageInfo() {
  
  return (
    <div className={styles.companyInfo}>
      <div className={styles.infoItem}>
        <FontAwesomeIcon icon={faTruck} />
        <div>
          <p>
            <strong>Dostawa</strong>
          </p>
          <p>
            Dostarczamy w całej Europie
          </p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <FontAwesomeIcon icon={faCreditCard} />
        <div>
          <p>
            <strong>Płatności</strong>
          </p>
          <p>
            Zapłać bezpiecznie przy odbiorze
          </p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <FontAwesomeIcon icon={faPercent} />
        <div>
          <p>
            <strong>Rabaty</strong>
          </p>
          <p>
            Skontaktuj się z nami
          </p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <FontAwesomeIcon icon={faLifeRing} />
        <div>
          <p>
            <strong>Wsparcie</strong>
          </p>
          <p>
            Lata doświadczenia na rynku
          </p>
        </div>
      </div>
    </div>
  );
}

export default StoreStartPageInfo;