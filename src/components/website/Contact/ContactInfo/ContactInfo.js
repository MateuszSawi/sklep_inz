import React, { useState, useEffect } from 'react';
import styles from './ContactInfo.module.scss';

function ContactInfo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Kontakt</h1>

      <p className={styles.paragraph}>
        Przedsiębiorstwo Remontowo-Handlowe „RENOX” Mirosław Wielechowski Sp. J.
      </p>
      <p className={styles.paragraphLower}>
        11-041 Olsztyn, ul. Sokola 4
      </p>
      <p className={styles.paragraphLower}>
        Tel. 89 523-91-52, 523-91-53
      </p>
      <p className={styles.paragraphLower}>
        Tel./fax. 89 523-90-82
      </p>
      <p className={styles.paragraphLower}>
        E-mail: renox@renox.pl
      </p>

      {/* -------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>Oddział Bytom:</h2>

      <p className={styles.paragraphLower}>
        ul. Strzelców Bytomskich 100
      </p>
      <p className={styles.paragraphLower}>
        Tel/Fax. +48 32 289 02 05
      </p>
      <p className={styles.paragraphLower}>
        Tel. kom. 668 571 192
      </p>

      {/* -------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>Właściciel:</h2>

      <p className={styles.paragraphLower}>
        Mirosław Wielechowski
      </p>

      {/* -------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>Dyrektor handlowy:</h2>

      <p className={styles.paragraphLower}>
        Dariusz Organiściuk
      </p>
      <p className={styles.paragraphLower}>
        Tel. +48 601 643 910
      </p>
      <p className={styles.paragraphLower}>
        E-mail: darek.o@renox.pl
      </p>
      
      {/* -------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>Kierownik działu:</h2>

      <p className={styles.paragraphLower}>
        Rafał Wielechowski 
      </p>
      <p className={styles.paragraphLower}>
        Tel. +48 601 840 377
      </p>
      <p className={styles.paragraphLower}>
        E-mail: rafal.w@renox.pl
      </p>
    </div>
  );
}

export default ContactInfo;