import React, { useState, useEffect } from 'react';
import styles from './MainPageContactUs.module.scss';
import { Link } from 'react-router-dom';

function MainPageContactUs() {
  return (
    <div className={styles.wrapper} 
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/website/MainPage/44.jpg'})`}}>
      <Link to="/kontakt" className={styles.buttonContactLink} >
        <button className={styles.buttonContact}>
          <div>&nbsp;&nbsp; Skontaktuj się z nami &nbsp;&nbsp;</div>
        </button>
      </Link>
    </div>
  );
}

export default MainPageContactUs;