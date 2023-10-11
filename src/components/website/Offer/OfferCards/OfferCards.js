import React, { useState, useEffect } from 'react';
import styles from './OfferCards.module.scss';

function OfferCards() {
  const data = [
    {
      image: "/website/Offer/categories/czesci_do_kruszarek/stożek.jpg ",
      title: "Części do kruszarek",
      description: "Gwarantujemy dostęp do szerokiego asortymentu lemieszy, które są niezbędne dla optymalnej wydajności i wytrzymałości Twoich maszyn. Nasze produkty są starannie dobrane, aby sprostać najtrudniejszym zadaniom budowlanym."
    },
    {
      image: "/website/Offer/categories/gasienice_gumowe/gasienica.jpg",
      title: "Gąsienice gumowe",
      description: "Gwarantujemy dostęp do szerokiego asortymentu lemieszy, które są niezbędne dla optymalnej wydajności i wytrzymałości Twoich maszyn. Nasze produkty są starannie dobrane, aby sprostać najtrudniejszym zadaniom budowlanym."
    },
    {
      image: "/website/Offer/categories/lemiesze/lemiesz dwufazowy 1.jpg",
      title: "Lemiesze",
      description: "Gwarantujemy dostęp do szerokiego asortymentu lemieszy, które są niezbędne dla optymalnej wydajności i wytrzymałości Twoich maszyn. Nasze produkty są starannie dobrane, aby sprostać najtrudniejszym zadaniom budowlanym."
    },
    {
      image: "/website/Offer/categories/napinacze/NAPINACZ-GĄSIENICY-KOMATSU-PC200-5210240-renox.jpg",
      title: "Napinacze",
      description: "Gwarantujemy dostęp do szerokiego asortymentu lemieszy, które są niezbędne dla optymalnej wydajności i wytrzymałości Twoich maszyn. Nasze produkty są starannie dobrane, aby sprostać najtrudniejszym zadaniom budowlanym."
    },
    {
      image: "/website/Offer/categories/sworznie/CAT7Y2348.jpg",
      title: "Sworznie",
      description: "Gwarantujemy dostęp do szerokiego asortymentu lemieszy, które są niezbędne dla optymalnej wydajności i wytrzymałości Twoich maszyn. Nasze produkty są starannie dobrane, aby sprostać najtrudniejszym zadaniom budowlanym."
    },
    {
      image: "/website/Offer/categories/tuleje/35x45x50SR.jpg",
      title: "Tuleje",
      description: "Gwarantujemy dostęp do szerokiego asortymentu lemieszy, które są niezbędne dla optymalnej wydajności i wytrzymałości Twoich maszyn. Nasze produkty są starannie dobrane, aby sprostać najtrudniejszym zadaniom budowlanym."
    },
    {
      image: "/website/Offer/categories/uszczelnienia/uszczelnienie (1).jpg",
      title: "Uszczelnienia",
      description: "Gwarantujemy dostęp do szerokiego asortymentu lemieszy, które są niezbędne dla optymalnej wydajności i wytrzymałości Twoich maszyn. Nasze produkty są starannie dobrane, aby sprostać najtrudniejszym zadaniom budowlanym."
    },
    {
      image: "/website/Offer/categories/zeby/zab-esco-ahl.jpg",
      title: "Zęby",
      description: "Gwarantujemy dostęp do szerokiego asortymentu lemieszy, które są niezbędne dla optymalnej wydajności i wytrzymałości Twoich maszyn. Nasze produkty są starannie dobrane, aby sprostać najtrudniejszym zadaniom budowlanym."
    },
    {
      image: "/website/Offer/categories/maszyny_uzywane/xxxxxxx.png",
      title: "Maszyny używane",
      description: "Gwarantujemy dostęp do szerokiego asortymentu lemieszy, które są niezbędne dla optymalnej wydajności i wytrzymałości Twoich maszyn. Nasze produkty są starannie dobrane, aby sprostać najtrudniejszym zadaniom budowlanym."
    }    
  ];

  return (
    <div className={styles.card_grid}>
      {data.map((item, index) => {

        console.log(process.env.PUBLIC_URL + item.image)

        return (
        <div key={index} className={styles.card}>
          <img 
            key={index} 
            src={process.env.PUBLIC_URL + item.image} 
            alt={`Logo ${index + 1}`} 
          />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button>Zobacz więcej</button>
        </div>
      )})}
    </div>
  );
}

export default OfferCards;