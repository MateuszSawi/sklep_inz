import React, { useState, useEffect } from 'react';
import styles from './MainPageContactUs.module.scss';
import { Link } from 'react-router-dom';

function MainPageContactUs() {

  const lang = localStorage.getItem('lang') || 'pl';

  return (
    <div className={styles.wrapper} 
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/website/MainPage/44.jpg'})`}}>
      <Link to="/kontakt" className={styles.buttonContactLink} >
        <button className={styles.buttonContact}>
          {lang === 'pl' &&
            <div>&nbsp;&nbsp; Skontaktuj się z nami &nbsp;&nbsp;</div>
          }
          {lang === 'ua' &&
            <div>&nbsp;&nbsp; Зв'яжіться з нами &nbsp;&nbsp;</div>
          }
          {lang === 'en' &&
            <div>&nbsp;&nbsp; Contact us &nbsp;&nbsp;</div>
          }
        </button>
      </Link>
    </div>
  );
}

export default MainPageContactUs;