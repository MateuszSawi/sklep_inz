import React, { useState, useEffect } from 'react';
import styles from './MainPageNewsletter.module.scss';
import { apiK, apiP } from '../../../../apiConfig';
import axios from 'axios';

function MainPageNewsletter() {

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
      <div className={styles.title_container}>
        {lang === 'pl' &&
          <h1>Zapisz się na nasz Newsletter</h1>
        }
        {lang === 'ua' &&
          <h1>Підпишіться на нашу розсилку</h1>
        }
        {lang === 'en' &&
          <h1>Subscribe to our Newsletter</h1>
        }
      </div>
      {lang === 'pl' &&
        <input 
          type="email"
          placeholder="Wprowadź swój email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      }
      {lang === 'ua' &&
        <input 
          type="email"
          placeholder="Введіть адресу електронної пошти"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      }
      {lang === 'en' &&
        <input 
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      }

      {lang === 'pl' &&
        <button>ZAPISZ SIĘ</button>
      }
      {lang === 'ua' &&
        <button>ЗАРЕЄСТРУЙТЕСЯ</button>
      }
      {lang === 'en' &&
        <button>SIGN UP</button>
      }
    </div>
  );
}

export default MainPageNewsletter;