import React, { useState, useEffect } from 'react';
import styles from './ContactInfo.module.scss';

function ContactInfo() {

  const lang = localStorage.getItem('lang') || 'pl';

  return (
    <div className={styles.container}>
      {lang === 'pl' &&
        <>
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
        </>
      }
      {lang === 'ua' &&
        <>
          <h1 className={styles.header}>контакт</h1>

          <p className={styles.paragraph}>
            Ремонтно-торгова компанія „RENOX” Mirosław Wielechowski Sp. Дж
          </p>
          <p className={styles.paragraphLower}>
            11-041 Ольштин, вул. Сокола 4
          </p>
          <p className={styles.paragraphLower}>
            Тел. 89 523-91-52, 523-91-53
          </p>
          <p className={styles.paragraphLower}>
            Тел/факс 89 523-90-82
          </p>
          <p className={styles.paragraphLower}>
            Електронна пошта: renox@renox.pl
          </p>

          {/* -------------------------------------------------------------------------------------------- */}

          <h2 className={styles.subHeader}>Битомське відділення:</h2>

          <p className={styles.paragraphLower}>
            вулиця Битом Стшелце 100
          </p>
          <p className={styles.paragraphLower}>
            Тел/факс. +48 32 289 02 05
          </p>
          <p className={styles.paragraphLower}>
            Тел. зв'язок 668 571 192
          </p>

          {/* -------------------------------------------------------------------------------------------- */}

          <h2 className={styles.subHeader}>Власник:</h2>

          <p className={styles.paragraphLower}>
            Mirosław Wielechowski
          </p>

          {/* -------------------------------------------------------------------------------------------- */}

          <h2 className={styles.subHeader}>Комерційний директор:</h2>

          <p className={styles.paragraphLower}>
            Dariusz Organiściuk
          </p>
          <p className={styles.paragraphLower}>
            Тел. +48 601 643 910
          </p>
          <p className={styles.paragraphLower}>
            Електронна пошта: darek.o@renox.pl
          </p>
          
          {/* -------------------------------------------------------------------------------------------- */}

          <h2 className={styles.subHeader}>Начальник відділу:</h2>

          <p className={styles.paragraphLower}>
            Rafał Wielechowski 
          </p>
          <p className={styles.paragraphLower}>
            Тел. +48 601 840 377
          </p>
          <p className={styles.paragraphLower}>
            Електронна пошта: rafal.w@renox.pl
          </p>
        </>
      }
      {lang === 'en' &&
        <>
          <h1 className={styles.header}>Contact</h1>

          <p className={styles.paragraph}>
            Renovation and Trading Company „RENOX” Mirosław Wielechowski Sp. J.
          </p>
          <p className={styles.paragraphLower}>
            11-041 Olsztyn, ul. Sokola 4
          </p>
          <p className={styles.paragraphLower}>
            Phone number 89 523-91-52, 523-91-53
          </p>
          <p className={styles.paragraphLower}>
            Phone number/fax. 89 523-90-82
          </p>
          <p className={styles.paragraphLower}>
            E-mail: renox@renox.pl
          </p>

          {/* -------------------------------------------------------------------------------------------- */}

          <h2 className={styles.subHeader}>Bytom Branch:</h2>

          <p className={styles.paragraphLower}>
            street Strzelców Bytomskich 100
          </p>
          <p className={styles.paragraphLower}>
            Phone number/Fax. +48 32 289 02 05
          </p>
          <p className={styles.paragraphLower}>
            Mobile number 668 571 192
          </p>

          {/* -------------------------------------------------------------------------------------------- */}

          <h2 className={styles.subHeader}>Owner:</h2>

          <p className={styles.paragraphLower}>
            Mirosław Wielechowski
          </p>

          {/* -------------------------------------------------------------------------------------------- */}

          <h2 className={styles.subHeader}>Commercial director:</h2>

          <p className={styles.paragraphLower}>
            Dariusz Organiściuk
          </p>
          <p className={styles.paragraphLower}>
            Phone number +48 601 643 910
          </p>
          <p className={styles.paragraphLower}>
            E-mail: darek.o@renox.pl
          </p>
          
          {/* -------------------------------------------------------------------------------------------- */}

          <h2 className={styles.subHeader}>Head of department:</h2>

          <p className={styles.paragraphLower}>
            Rafał Wielechowski 
          </p>
          <p className={styles.paragraphLower}>
            Phone number +48 601 840 377
          </p>
          <p className={styles.paragraphLower}>
            E-mail: rafal.w@renox.pl
          </p>
        </>
      }
    </div>
  );
}

export default ContactInfo;