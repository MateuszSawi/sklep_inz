import React, { useState, useEffect } from 'react';
import styles from './FooterCometweb.module.scss';

function FooterCometweb() {
  return (
    <div className={styles.container}>

      <p>Designed by:</p>
      
      <a href="https://cometweb.pl/" target="_blank" rel="noopener noreferrer" >
        <img 
          src={process.env.PUBLIC_URL + '/website/logo/cometweb_logo.jpg'} 
          alt={'Cometweb-logo'} 
        />
      </a>
    
    </div>
  );
}

export default FooterCometweb;