import React, { useState, useEffect } from 'react';
import styles from './MainSection.module.scss';

function MainSection() {

  const lang = localStorage.getItem('lang') || 'pl';

  return (
    <div className={styles.container} 
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/website/MainPage/55.jpg'})`,
      }}
    >
      {lang === 'pl' &&
        <h1 className={styles.title}>Buduj z Pewnością - Maszyny i Części do Maszyn Budowlanych</h1>
      }
      {lang === 'ua' &&
        <h1 className={styles.title}>Будуйте впевнено – машини та деталі для будівельних машин</h1>
      }
      {lang === 'en' &&
        <h1 className={styles.title}>Build with Confidence - Machines and Parts for Construction Machines</h1>
      }
    </div>
  );
}

export default MainSection;