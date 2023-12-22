import React, { useState, useEffect } from 'react';
import styles from './ContactMenu.module.scss';

import { FaArrowUp, FaChevronDown } from 'react-icons/fa';

function ContactMenu() {

  const lang = localStorage.getItem('lang') || 'pl';

  const czesci_zamienne = (
    <div className={styles.innerWrapper}>
      {lang === 'pl' &&
        <div>
          <p><strong>Dolnośląskie, Pomorskie, Śląskie, Opolskie</strong></p>
          <p>Specjalista ds. handlowych</p>
          <p><strong>Piotr Wodzyński</strong></p>
          <p>tel. <strong>+48 601 832 213</strong></p>
          <p>e-mail: <strong>piotr.w@renox.pl</strong></p>
        </div>
      }
      {lang === 'ua' &&
        <div>
          <p><strong>Нижня Сілезія, Помор'я, Сілезія, Ополе</strong></p>
          <p>Спеціаліст торгівлі</p>
          <p><strong>Piotr Wodzyński</strong></p>
          <p>тел. <strong>+48 601 832 213</strong></p>
          <p>електронна адреса: <strong>piotr.w@renox.pl</strong></p>
        </div>
      }
      {lang === 'en' &&
        <div>
          <p><strong>Lower Silesia, Pomerania, Silesia, Opole</strong></p>
          <p>Trade specialist</p>
          <p><strong>Piotr Wodzyński</strong></p>
          <p>tel. <strong>+48 601 832 213</strong></p>
          <p>e-mail: <strong>piotr.w@renox.pl</strong></p>
        </div>
      }

      <div className={styles.redUnderline}></div>

      {lang === 'pl' &&
        <div>
          <p><strong>Małopolska, Podkarpacie, Wielkopolska</strong></p>
          <p>Specjalista ds. sprzedaży</p>
          <p><strong>Dorota Dębowska</strong></p>
          <p>tel. <strong>+48 661 505 010</strong></p>
          <p>e-mail: <strong>dorota.d@renox.pl</strong></p>
        </div>
      }
      {lang === 'ua' &&
        <div>
          <p><strong>Мала Польща, Підкарпаття, Велика Польща</strong></p>
          <p>Спеціаліст з продажу</p>
          <p><strong>Dorota Dębowska</strong></p>
          <p>тел. <strong>+48 661 505 010</strong></p>
          <p>Електронна адреса: <strong>dorota.d@renox.pl</strong></p>
        </div>
      }
      {lang === 'en' &&
        <div>
          <p><strong>Lesser Poland, Podkarpacie, Greater Poland</strong></p>
          <p>Sales Specialist</p>
          <p><strong>Dorota Dębowska</strong></p>
          <p>tel. <strong>+48 661 505 010</strong></p>
          <p>e-mail: <strong>dorota.d@renox.pl</strong></p>
        </div>
      }

      <div className={styles.redUnderline}></div>

      {lang === 'pl' &&
        <div>
          <p><strong>Warmińko-Mazurskie, Podlaskie, Łódzkie</strong></p>
          <p>Specjalista ds. sprzedaży</p>
          <p><strong>Damian Malinowski</strong></p>
          <p>tel. <strong>+48 665 808 063</strong></p>
          <p>e-mail: <strong>damian.m@renox.pl</strong></p>
        </div>
      }
      {lang === 'ua' &&
        <div>
          <p><strong>Вармінсько-Мазурське воєводство, Підляське воєводство, Лодзьке воєводство</strong></p>
          <p>Спеціаліст з продажу</p>
          <p><strong>Damian Malinowski</strong></p>
          <p>тел. <strong>+48 665 808 063</strong></p>
          <p>Електронна адреса: <strong>damian.m@renox.pl</strong></p>
        </div>
      }
      {lang === 'en' &&
        <div>
          <p><strong>Warmian-Masurian Voivodeship, Podlaskie Voivodeship, Łódź Voivodeship</strong></p>
          <p>Sales Specialist</p>
          <p><strong>Damian Malinowski</strong></p>
          <p>tel. <strong>+48 665 808 063</strong></p>
          <p>e-mail: <strong>damian.m@renox.pl</strong></p>
        </div>
      }

      <div className={styles.redUnderline}></div>

      {lang === 'pl' &&
        <div>
          <p><strong>Mazowieckie, Kujawsko-Pomorskie</strong></p>
          <p>Specjalista ds. handlowych</p>
          <p><strong>Adrian Jabłoński</strong></p>
          <p>tel. <strong>+48 693 808 043</strong></p>
          <p>e-mail: <strong>adrian.j@renox.pl</strong></p>
        </div>
      }
      {lang === 'ua' &&
        <div>
          <p><strong>Мазовецьке, Куявсько-Поморське</strong></p>
          <p>Спеціаліст торгівлі</p>
          <p><strong>Adrian Jabłoński</strong></p>
          <p>тел. <strong>+48 693 808 043</strong></p>
          <p>електронна адреса: <strong>adrian.j@renox.pl</strong></p>
        </div>
      }
      {lang === 'en' &&
        <div>
          <p><strong>Mazowieckie, Kujawsko-Pomorskie</strong></p>
          <p>Trade specialist</p>
          <p><strong>Adrian Jabłoński</strong></p>
          <p>tel. <strong>+48 693 808 043</strong></p>
          <p>e-mail: <strong>adrian.j@renox.pl</strong></p>
        </div>
      }
    </div>
  );

  const serwis_maszyn = (
    <div className={styles.innerWrapper}>
      {lang === 'pl' &&
        <div>
          <p>Kierownik serwisu</p>
          <p><strong>Marcin Sobolewski</strong></p>
          <p>tel. <strong>+48 668 569 775</strong></p>
          <p>e-mail: <strong>serwis@renox.pl</strong></p>
        </div>
      }
      {lang === 'ua' &&
        <div>
          <p>Менеджер служби</p>
          <p><strong>Marcin Sobolewski</strong></p>
          <p>тел. <strong>+48 668 569 775</strong></p>
          <p>електронна адреса: <strong>serwis@renox.pl</strong></p>
        </div>
      }
      {lang === 'en' &&
        <div>
          <p>Service Manager</p>
          <p><strong>Marcin Sobolewski</strong></p>
          <p>tel. <strong>+48 668 569 775</strong></p>
          <p>e-mail: <strong>serwis@renox.pl</strong></p>
        </div>
      }

      <div className={styles.redUnderline}></div>

      {lang === 'pl' &&
        <div>
          <p>Specjalista ds. sprzedaży</p>
          <p><strong>Rafał Wielechowski</strong></p>
          <p>tel. <strong>+48 601 840 377</strong></p>
          <p>e-mail: <strong>rafal.w@renox.pl</strong></p>
        </div>
      }
      {lang === 'ua' &&
        <div>
          <p>Спеціаліст з продажу</p>
          <p><strong>Rafał Wielechowski</strong></p>
          <p>тел. <strong>+48 601 840 377</strong></p>
          <p>Електронна адреса: <strong>rafal.w@renox.pl</strong></p>
        </div>
      }
      {lang === 'en' &&
        <div>
          <p>Sales Specialist</p>
          <p><strong>Rafał Wielechowski</strong></p>
          <p>tel. <strong>+48 601 840 377</strong></p>
          <p>e-mail: <strong>rafal.w@renox.pl</strong></p>
        </div>
      }
    </div>
  );

  const przesiewacze_i_kruszarki = (
    <div className={styles.innerWrapper}>
      {lang === 'pl' &&
        <div>
          <p>Specjalista ds. sprzedaży</p>
          <p><strong>Rafał Wielechowski</strong></p>
          <p>tel. <strong>+48 601 840 377</strong></p>
          <p>e-mail: <strong>rafal.w@renox.pl</strong></p>
        </div>
      }
      {lang === 'ua' &&
        <div>
          <p>Спеціаліст з продажу</p>
          <p><strong>Rafał Wielechowski</strong></p>
          <p>тел. <strong>+48 601 840 377</strong></p>
          <p>Електронна адреса: <strong>rafal.w@renox.pl</strong></p>
        </div>
      }
      {lang === 'en' &&
        <div>
          <p>Sales Specialist</p>
          <p><strong>Rafał Wielechowski</strong></p>
          <p>tel. <strong>+48 601 840 377</strong></p>
          <p>e-mail: <strong>rafal.w@renox.pl</strong></p>
        </div>
      }

      <div className={styles.redUnderline}></div>

      {lang === 'pl' &&
        <div>
          <p>Specjalista ds. handlowych</p>
          <p><strong>Piotr Wodzyński</strong></p>
          <p>tel. <strong>+48 601 832 213</strong></p>
          <p>e-mail: <strong>piotr.w@renox.pl</strong></p>
        </div>
      }
      {lang === 'ua' &&
        <div>
          <p>Спеціаліст торгівлі</p>
          <p><strong>Piotr Wodzyński</strong></p>
          <p>тел. <strong>+48 601 832 213</strong></p>
          <p>електронна адреса: <strong>piotr.w@renox.pl</strong></p>
        </div>
      }
      {lang === 'en' &&
        <div>
          <p>Trade specialist</p>
          <p><strong>Piotr Wodzyński</strong></p>
          <p>tel. <strong>+48 601 832 213</strong></p>
          <p>e-mail: <strong>piotr.w@renox.pl</strong></p>
        </div>
      }
    </div>
  );

  const lyzki_przesiewajaco_kruszace = (
    <>
      {lang === 'pl' &&
        <div className={styles.innerWrapper}>
          <p>Specjalista ds. sprzedaży</p>
          <p><strong>Rafał Wielechowski</strong></p>
          <p>tel. <strong>+48 601 840 377</strong></p>
          <p>e-mail: <strong>rafal.w@renox.pl</strong></p>
        </div>
      }
      {lang === 'ua' &&
        <div className={styles.innerWrapper}>
          <p>Спеціаліст з продажу</p>
          <p><strong>Rafał Wielechowski</strong></p>
          <p>тел. <strong>+48 601 840 377</strong></p>
          <p>Електронна адреса: <strong>rafal.w@renox.pl</strong></p>
        </div>
      }
      {lang === 'en' &&
        <div className={styles.innerWrapper}>
          <p>Sales Specialist</p>
          <p><strong>Rafał Wielechowski</strong></p>
          <p>tel. <strong>+48 601 840 377</strong></p>
          <p>e-mail: <strong>rafal.w@renox.pl</strong></p>
        </div>
      }
    </>
  );

  const szybkozlaczka_miller = (
    <>
      {lang === 'pl' &&
        <div className={styles.innerWrapper}>
          <p>Specjalista ds. handlowych</p>
          <p><strong>Piotr Wodzyński</strong></p>
          <p>tel. <strong>+48 601 832 213</strong></p>
          <p>e-mail: <strong>piotr.w@renox.pl</strong></p>
        </div>
      }
      {lang === 'ua' &&
        <div className={styles.innerWrapper}>
        <p>Спеціаліст торгівлі</p>
        <p><strong>Piotr Wodzyński</strong></p>
        <p>тел. <strong>+48 601 832 213</strong></p>
        <p>електронна адреса: <strong>piotr.w@renox.pl</strong></p>
      </div>
      }
      {lang === 'en' &&
        <div className={styles.innerWrapper}>
          <p>Trade specialist</p>
          <p><strong>Piotr Wodzyński</strong></p>
          <p>tel. <strong>+48 601 832 213</strong></p>
          <p>e-mail: <strong>piotr.w@renox.pl</strong></p>
        </div>
      }
    </>
  );

  const [people, setPeople] = useState([
    { 
      name: 'CZĘŚCI ZAMIENNE, ZĘBY I ZABEZPIECZENIA', 
      name_ua: "ЗАПЧАСТИНИ, ЗУБИ ТА БЕЗПЕКА",
      name_en: "SPARE PARTS, TEETH AND SAFETY",
      details: czesci_zamienne, 
      isOpen: false 
    },
    { 
      name: 'SERWIS MASZYN BUDOWLANYCH', 
      name_ua: "СЕРВІС БУДІВЕЛЬНОЇ ТЕХНІКИ",
      name_en: "CONSTRUCTION MACHINE SERVICE",
      details: serwis_maszyn, 
      isOpen: false 
    },
    { 
      name: 'PRZESIEWACZE I KRUSZARKI SERWIS / CZĘŚCI',
      name_ua: "ОБСЛУГОВУВАННЯ СИТОВ ТА ДРОБАРОК / ЧАСТИНИ",
      name_en: "SCREENS AND CRUSHERS SERVICE / PARTS", 
      details: przesiewacze_i_kruszarki, 
      isOpen: false 
    },
    { 
      name: 'ŁYŻKI PRZESIEWAJĄCO-KRUSZĄCE, STABILIZACJA GRUNTU', 
      name_ua: "ПРОСІЮВАЛЬНІ ТА ДРОБИЛЬНІ КОВШІ, СТАБІЛІЗАЦІЯ ГРУНТУ",
      name_en: "SCREENING AND CRUSHING BUCKETS, SOIL STABILIZATION",
      details: lyzki_przesiewajaco_kruszace, 
      isOpen: false 
    },
    { 
      name: 'SZYBKOZŁĄCZA MILLER', 
      name_ua: "ШВИДКІ З'ЄДНАННЯ MILLER",
      name_en: "MILLER QUICK CONNECTORS",
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
            {lang === 'pl' &&
              <>{person.name}</> 
            }
            {lang === 'ua' &&
              <>{person.name_ua}</> 
            }
            {lang === 'en' &&
              <>{person.name_en}</> 
            }
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