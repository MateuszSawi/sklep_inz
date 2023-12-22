import React, { useState, useEffect } from 'react';
import styles from './StoreStartPageInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUndo, faCreditCard, faPercent, faLifeRing } from '@fortawesome/free-solid-svg-icons';


function StoreStartPageInfo() {

  const lang = localStorage.getItem('lang') || 'pl';
  
  return (
    <div className={styles.companyInfo}>
      <div className={styles.infoItem}>
        <FontAwesomeIcon icon={faTruck} />
        {lang === 'pl' &&
          <div>
            <p>
              <strong>Dostawa</strong>
            </p>
            <p>
              Dostarczamy w całej Europie
            </p>
          </div>
        }
        {lang === 'ua' &&
          <div>
            <p>
              <strong>Доставка</strong>
            </p>
            <p>
              Доставляємо по всій Європі
            </p>
          </div>
        }
        {lang === 'en' &&
          <div>
            <p>
              <strong>Delivery</strong>
            </p>
            <p>
              We deliver throughout Europe
            </p>
          </div>
        }
      </div>
      <div className={styles.infoItem}>
        <FontAwesomeIcon icon={faUndo} />
        {lang === 'pl' &&
          <div>
            <p>
              <strong>Zwroty</strong>
            </p>
            <p>
              Korzystna polityka zwrotów
            </p>
          </div>
        }
        {lang === 'ua' &&
          <div>
            <p>
              <strong>Повернення</strong>
            </p>
            <p>
              Вигідна політика повернення
            </p>
          </div>
        }
        {lang === 'en' &&
          <div>
            <p>
              <strong>Returns</strong>
            </p>
            <p>
              Favorable returns policy
            </p>
          </div>
        }
      </div>
      <div className={styles.infoItem}>
        <FontAwesomeIcon icon={faCreditCard} />
        {lang === 'pl' &&
          <div>
            <p>
              <strong>Płatności</strong>
            </p>
            <p>
              Zapłać bezpiecznie on-line
            </p>
          </div>
        }
        {lang === 'ua' &&
          <div>
            <p>
              <strong>Платежі</strong>
            </p>
            <p>
              Платіть безпечно онлайн
            </p>
          </div>
        }
        {lang === 'en' &&
          <div>
            <p>
              <strong>Payments</strong>
            </p>
            <p>
              Pay safely online
            </p>
          </div>
        }
      </div>
      <div className={styles.infoItem}>
        <FontAwesomeIcon icon={faPercent} />
        {lang === 'pl' &&
          <div>
            <p>
              <strong>Rabaty</strong>
            </p>
            <p>
              Skontaktuj się z handlowcem
            </p>
          </div>
        }
        {lang === 'ua' &&
          <div>
            <p>
              <strong>Знижки</strong>
            </p>
            <p>
              Зверніться до свого дилера
            </p>
          </div>
        }
        {lang === 'en' &&
          <div>
            <p>
              <strong>Discounts</strong>
            </p>
            <p>
              Contact your dealer
            </p>
          </div>
        }
      </div>
      <div className={styles.infoItem}>
        <FontAwesomeIcon icon={faLifeRing} />
        {lang === 'pl' &&
          <div>
            <p>
              <strong>Wsparcie</strong>
            </p>
            <p>
              25 LAT doświadczenia na rynku
            </p>
          </div>
        }
        {lang === 'ua' &&
          <div>
            <p>
              <strong>Підтримка</strong>
            </p>
            <p>
              25 РОКІВ досвіду роботи на ринку
            </p>
          </div>
        }
        {lang === 'en' &&
          <div>
            <p>
              <strong>Support</strong>
            </p>
            <p>
              25 YEARS of experience on the market
            </p>
          </div>
        }
      </div>
    </div>
  );
}

export default StoreStartPageInfo;