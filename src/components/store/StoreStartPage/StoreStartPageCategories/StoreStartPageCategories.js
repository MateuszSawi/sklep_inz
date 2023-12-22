import React, { useState, useEffect } from 'react';
import styles from './StoreStartPageCategories.module.scss';
import { Link, useNavigate } from 'react-router-dom';

function StoreStartPageCategories(props) {

  const lang = localStorage.getItem('lang') || 'pl';

  const data = [
    {
      image: "/store/kategorie/Lemiesz/lemiesz dwufazowy 1.jpg ",
      title: "Lemiesze",
      title_ua: "Лемеші",
      title_en: "Plowshares",
      category: 'Lemiesze'
    },
    {
      image: "/store/kategorie/Tuleje/tulejabeztla.png ",
      title: "Tuleje",
      title_ua: "Втулки",
      title_en: "Bushings",
      category: 'Tuleje'
    },
    {
      image: "/store/kategorie/sworzeń/CAT7Y2348.jpg ",
      title: "Sworznie",
      title_ua: "Шпильки",
      title_en: "Pins",
      category: 'Sworznie'
    },
    {
      image: "/store/kategorie/Gąsienice gumowe/gasienica2.jpg ",
      title: "Gąsienice gumowe",
      title_ua: "Гумові гусениці",
      title_en: "Rubber tracks",
      category: 'Gasienice_do_minikoparek'
    },
    {
      image: "/store/kategorie/PODWOZIA/podwozie CAT.jpg ",
      title: "Podwozia",
      title_ua: "шасі",
      title_en: "Chassis",
      category: 'Podwozia'
    },
    {
      image: "/store/kategorie/srubki-nakrętki/1.png ",
      title: "Śruby i nakrętki",
      title_ua: "Болти і гайки",
      title_en: "Bolts and nuts",
      category: 'sruby_i_nakretki  '
    },
    {
      image: "/store/kategorie/Ząb/zab-esco-ahl.jpg ",
      title: "Zęby i adaptery",
      title_ua: "Зуби та перехідники",
      title_en: "Teeth and adapters",
      category: 'Zeby_adaptery'
    },
    {
      image: "/store/kategorie/Napinacz/NAPINACZ.jpg ",
      title: "Sprężyny i napinacze",
      title_ua: "Пружини та натягувачі",
      title_en: "Springs and tensioners",
      category: 'Sprezyny_napinacze'
    },
    {
      image: "/store/kategorie/Uszczelnienia/uszczelnieniebeztla.png ",
      title: "Uszczelnienia",
      title_ua: "Пломби",
      title_en: "Seals",
      category: 'Uszczelnienia'
    },
    {
      image: "/store/kategorie/Części zamienne/Części zamienne.jpg ",
      title: "Części zamienne",
      title_ua: "Запчастини",
      title_en: "Spare parts",
      category: 'Czesci_zamienne'
    },
    {
      image: "/store/kategorie/Części do kruszarek/6003301E-1.jpg ",
      title: "Części do kruszarek i przesiewaczy",
      title_ua: "Запчастини до дробарок і грохотів",
      title_en: "Parts for crushers and screeners",
      category: 'Czesci_do_kruszarek_i_przesiewaczy'
    },
    {
      image: "/store/kategorie/Łyżki przesiewające/Łyżki przesiewające.png ",
      title: "Łyżki przesiewające",
      title_ua: "Просівні відра",
      title_en: "Sifting buckets",
      category: 'Lyzki_przesiewajace'
    },
    {
      image: "/store/kategorie/łyżki_kruszące/1.jpg ",
      title: "Łyżki kruszące",
      title_ua: "Дробильні ковші",
      title_en: "Crushing buckets",
      category: 'lyzki_kruszace'
    },
    {
      image: "/store/kategorie/Maszyny używane/Maszyny używane.jpg ",
      title: "Maszyny używane",
      title_ua: "Машини б/у",
      title_en: "Used machines",
      category: 'Maszyny_uzywane'
    },
  
  ];

  const navigate = useNavigate();

  const handleLinkClick = (category, title) => {
    props.setCategory(category);

    // if (sessionStorage.getItem('sortBy') === null) {
      sessionStorage.setItem('sortBy', 'alphabetic_asc');

    // }
    
    // if (sessionStorage.getItem('productsPerPage') === null) {
      sessionStorage.setItem('productsPerPage', 30);
      // console.log('XXXXXXXXXXX')
    // }
    
    sessionStorage.setItem('pageNumber', 1);

    navigate(`/sklep/${category}`);
  };

  return (
    <div className={styles.cards_wrapper}>
      {data.map((item, index) => (
        <div key={index} className={styles.card} onClick={() => handleLinkClick(item.category, item.title)}>
          <img src={process.env.PUBLIC_URL + item.image} alt={item.title} />
          {lang === 'pl' &&
            <h4>{item.title}</h4>
          }
          {lang === 'ua' &&
            <h4>{item.title_ua}</h4>
          }
          {lang === 'en' &&
            <h4>{item.title_en}</h4>
          }
        </div>
      ))}
    </div>
  );
}

export default StoreStartPageCategories;