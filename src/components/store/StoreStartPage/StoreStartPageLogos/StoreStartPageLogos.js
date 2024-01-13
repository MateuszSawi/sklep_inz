import React from 'react';
import styles from './StoreStartPageLogos.module.scss';


function StoreStartPageLogos() {

  return (
    <div className={styles.logo_section}>
      <img 
        src={process.env.PUBLIC_URL + '/store/7.png'} 
        alt='banner' 
      />
    </div>
  );
}

export default StoreStartPageLogos;