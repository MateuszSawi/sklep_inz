import React, { useState, useEffect } from 'react';
import styles from './StoreStartPageCategories.module.scss';
import { Link, useNavigate } from 'react-router-dom';

function StoreStartPageCategories(props) {

  const data = [
    {
      image: "/store/kategorie/Lemiesz/lemiesz dwufazowy 1.jpg ",
      title: "Lemiesze",
      category: 'Lemiesze'
    },
    {
      image: "/store/kategorie/Tuleje/tulejabeztla.png ",
      title: "Tuleje",
      category: 'Tuleje'
    },
    {
      image: "/store/kategorie/sworzeń/CAT7Y2348.jpg ",
      title: "Sworznie",
      category: 'Sworznie'
    },
    {
      image: "/store/kategorie/Gąsienice gumowe/gasienica2.jpg ",
      title: "Gąsienice gumowe",
      category: 'Gasienice_do_minikoparek'
    },
    {
      image: "/store/kategorie/PODWOZIA/podwozie CAT.jpg ",
      title: "Podwozia",
      category: 'Podwozia'
    },
    {
      image: "/store/kategorie/srubki-nakrętki/1.png ",
      title: "Śruby i nakrętki",
      category: 'sruby_i_nakretki  '
    },
    {
      image: "/store/kategorie/Ząb/zab-esco-ahl.jpg ",
      title: "Zęby i adaptery",
      category: 'Zeby_adaptery'
    },
    {
      image: "/store/kategorie/Napinacz/NAPINACZ.jpg ",
      title: "Sprężyny i napinacze",
      category: 'Sprezyny_napinacze'
    },
    {
      image: "/store/kategorie/Uszczelnienia/uszczelnieniebeztla.png ",
      title: "Uszczelnienia",
      category: 'Uszczelnienia'
    },
    {
      image: "/store/kategorie/Części zamienne/Części zamienne.jpg ",
      title: "Części zamienne",
      category: 'Czesci_zamienne'
    },
    {
      image: "/store/kategorie/Części do kruszarek/6003301E-1.jpg ",
      title: "Części do kruszarek i przesiewaczy",
      category: 'Czesci_do_kruszarek_i_przesiewaczy'
    },
    {
      image: "/store/kategorie/Łyżki przesiewające/Łyżki przesiewające.png ",
      title: "Łyżki przesiewające",
      category: 'Lyzki_przesiewajace'
    },
    {
      image: "/store/kategorie/łyżki_kruszące/1.jpg ",
      title: "Łyżki kruszące",
      category: 'lyzki_kruszace'
    },
    {
      image: "/store/kategorie/Maszyny używane/Maszyny używane.jpg ",
      title: "Maszyny używane",
      category: 'Maszyny_uzywane'
    },
  
  ];

  const navigate = useNavigate();

  const handleLinkClick = (category, title) => {
    props.setCategory(category);
    navigate(`/sklep/${category}`);
  };

  return (
    <div className={styles.cards_wrapper}>
      {data.map((item, index) => (
        <div key={index} className={styles.card} onClick={() => handleLinkClick(item.category, item.title)}>
          <img src={process.env.PUBLIC_URL + item.image} alt={item.title} />
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default StoreStartPageCategories;