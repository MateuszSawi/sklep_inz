import React, { useState, useEffect } from 'react';
import styles from './ContactMenu.module.scss';

import { FaArrowUp, FaChevronDown } from 'react-icons/fa';

function ContactMenu() {

  const czesci_zamienne = (
    <div className={styles.innerWrapper}>
      <div>
        <p><strong>Dolnośląskie, Pomorskie, Śląskie, Opolskie</strong></p>
        <p>Specjalista ds. handlowych</p>
        <p><strong>Piotr Wodzyński</strong></p>
        <p>tel. <strong>+48 601 832 213</strong></p>
        <p>e-mail: <strong>piotr.w@renox.pl</strong></p>
      </div>

      <div className={styles.redUnderline}></div>

      <div>
        <p><strong>Małopolska, Podkarpacie, Wielkopolska</strong></p>
        <p>Specjalista ds. sprzedaży</p>
        <p><strong>Dorota Dębowska</strong></p>
        <p>tel. <strong>+48 661 505 010</strong></p>
        <p>e-mail: <strong>dorota.d@renox.pl</strong></p>
      </div>

      <div className={styles.redUnderline}></div>

      <div>
        <p><strong>Warmińko-Mazurskie, Podlaskie, Łódzkie</strong></p>
        <p>Specjalista ds. sprzedaży</p>
        <p><strong>Damian Malinowski</strong></p>
        <p>tel. <strong>+48 665 808 063</strong></p>
        <p>e-mail: <strong>damian.m@renox.pl</strong></p>
      </div>

      <div className={styles.redUnderline}></div>

      <div>
        <p><strong>Mazowieckie, Kujawsko-Pomorskie</strong></p>
        <p>Specjalista ds. handlowych</p>
        <p><strong>Adrian Jabłoński</strong></p>
        <p>tel. <strong>+48 693 808 043</strong></p>
        <p>e-mail: <strong>adrian.j@renox.pl</strong></p>
      </div>
    </div>
  );

  const serwis_maszyn = (
    <div className={styles.innerWrapper}>
      <div>
        <p>Kierownik serwisu</p>
        <p><strong>Marcin Sobolewski</strong></p>
        <p>tel. <strong>+48 668 569 775</strong></p>
        <p>e-mail: <strong>serwis@renox.pl</strong></p>
      </div>

      <div className={styles.redUnderline}></div>

      <div>
        <p>Specjalista ds. sprzedaży</p>
        <p><strong>Rafał Wielechowski</strong></p>
        <p>tel. <strong>+48 601 840 377</strong></p>
        <p>e-mail: <strong>rafal.w@renox.pl</strong></p>
      </div>
    </div>
  );

  const przesiewacze_i_kruszarki = (
    <div className={styles.innerWrapper}>
      <div>
        <p>Specjalista ds. sprzedaży</p>
        <p><strong>Rafał Wielechowski</strong></p>
        <p>tel. <strong>+48 601 840 377</strong></p>
        <p>e-mail: <strong>rafal.w@renox.pl</strong></p>
      </div>

      <div className={styles.redUnderline}></div>

      <div>
        <p>Specjalista ds. handlowych</p>
        <p><strong>Piotr Wodzyński</strong></p>
        <p>tel. <strong>+48 601 832 213</strong></p>
        <p>e-mail: <strong>piotr.w@renox.pl</strong></p>
      </div>
    </div>
  );

  const lyzki_przesiewajaco_kruszace = (
    <div className={styles.innerWrapper}>
      <p>Specjalista ds. sprzedaży</p>
      <p><strong>Rafał Wielechowski</strong></p>
      <p>tel. <strong>+48 601 840 377</strong></p>
      <p>e-mail: <strong>rafal.w@renox.pl</strong></p>
    </div>
  );

  const szybkozlaczka_miller = (
    <div className={styles.innerWrapper}>
      <p>Specjalista ds. handlowych</p>
      <p><strong>Piotr Wodzyński</strong></p>
      <p>tel. <strong>+48 601 832 213</strong></p>
      <p>e-mail: <strong>piotr.w@renox.pl</strong></p>
    </div>
  );

  const [people, setPeople] = useState([
    { 
      name: 'CZĘŚCI ZAMIENNE, ZĘBY I ZABEZPIECZENIA', 
      details: czesci_zamienne, 
      isOpen: false 
    },
    { 
      name: 'SERWIS MASZYN BUDOWLANYCH', 
      details: serwis_maszyn, 
      isOpen: false 
    },
    { 
      name: 'PRZESIEWACZE I KRUSZARKI SERWIS / CZĘŚCI', 
      details: przesiewacze_i_kruszarki, 
      isOpen: false 
    },
    { 
      name: 'ŁYŻKI PRZESIEWAJĄCO-KRUSZĄCE, STABILIZACJA GRUNTU', 
      details: lyzki_przesiewajaco_kruszace, 
      isOpen: false 
    },
    { 
      name: 'SZYBKOZŁĄCZA MILLER', 
      details: szybkozlaczka_miller, 
      isOpen: false 
    }
  ]);

  const toggleDetails = (index) => {
      const newPeople = [...people];
      newPeople[index].isOpen = !newPeople[index].isOpen;
      setPeople(newPeople);
  };

  return (
    <div className={styles.wrapper}>
      {people.map((person, index) => (
        <div key={index} className={styles.personContainer}>
          <p className={styles.title} onClick={() => toggleDetails(index)}>
            {person.name}
            <FaChevronDown className={person.isOpen ? styles.rotate : ""} />
          </p>
          <div className={person.isOpen ? `${styles.details} ${styles.open}` : styles.details}>
            {person.details}
          </div>
        </div>
      ))}
      <div className={styles.personContainer}></div>
    </div>
);
}

export default ContactMenu;