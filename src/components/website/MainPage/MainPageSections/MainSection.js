import React, { useState, useEffect } from 'react';
import styles from './MainSection.module.scss';

function MainSection() {
  return (
    <div className={styles.container} 
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/website/MainPage/55.jpg'})`,
      }}
    >
      <h1 className={styles.title}>Buduj z Pewnością - Maszyny i Części do Maszyn Budowlanych</h1>
      {/* <button className={styles.button}><p>Poznaj nas</p></button> */}
    </div>
  );
}

export default MainSection;