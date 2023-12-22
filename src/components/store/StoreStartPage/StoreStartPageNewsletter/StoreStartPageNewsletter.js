import React, { useState, useEffect } from 'react';
import styles from './StoreStartPageNewsletter.module.scss'
import { apiK, apiP } from '../../../../apiConfig';
import axios from 'axios';

function StoreStartPageNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    axios.post(`${apiK}/newsletter/addtosubscribtion`, {
      email: email,
    })
    .then((response) => {
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const lang = localStorage.getItem('lang') || 'pl';
  return (
    <div className={styles.newsletter_container}>
      {lang === 'pl' &&
        <>
          <div className={styles.title_container}>
            <h1>Zapisz się na nasz Newsletter</h1>
          </div>
          <input 
            type="email"
            placeholder="Wprowadź swój email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>ZAPISZ SIĘ</button>
        </>
      }

      {lang === 'ua' &&
        <>
          <div className={styles.title_container}>
            <h1>Підпишіться на нашу інформаційну стрічку</h1>
          </div>
          <input 
            type="email"
            placeholder="Введіть адресу електронної пошти"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>ЗАРЕЄСТРУЙТЕСЯ</button>
        </>
      }

      {lang === 'en' &&
        <>
          <div className={styles.title_container}>
            <h1>Sign up for our Newsletter</h1>
          </div>
          <input 
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>SIGN UP</button>
        </>
      }
    </div>
  );
}

export default StoreStartPageNewsletter;