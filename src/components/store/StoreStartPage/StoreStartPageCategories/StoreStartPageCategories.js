import React, { useState, useEffect } from 'react';
import styles from './StoreStartPageCategories.module.scss';
import { Link, useNavigate } from 'react-router-dom';

function StoreStartPageCategories(props) {

  const data = [
    {
      image: "/store/kategorie/2.png ",
      title: "Wszystko",
      category: 'ALL'
    },
    {
      image: "/store/kategorie/3.png ",
      title: "Czapki",
      category: 'HAT'
    },
    {
      image: "/store/kategorie/4.png ",
      title: "Koszule",
      category: 'SHIRT'
    },
    {
      image: "/store/kategorie/10.png ",
      title: "Koszulki",
      category: 'T_SHIRT'
    },
    {
      image: "/store/kategorie/13.png ",
      title: "Topy",
      category: 'TOP'
    },
    {
      image: "/store/kategorie/5.png ",
      title: "Spodenki",
      category: 'SHORTS'
    },
    {
      image: "/store/kategorie/8.png ",
      title: "Dresy",
      category: 'SPORTSWEAR'
    },
    {
      image: "/store/kategorie/6.png ",
      title: "Dżinsy",
      category: 'JEANS'
    },
    {
      image: "/store/kategorie/14.png ",
      title: "Spodnie",
      category: 'PANTS'
    },
    {
      image: "/store/kategorie/11.png ",
      title: "Bielizna",
      category: 'UNDERWEAR'
    },
    {
      image: "/store/kategorie/9.png ",
      title: "Kurtki",
      category: 'JACKET'
    },
    {
      image: "/store/kategorie/12.png ",
      title: "Buty",
      category: 'SHOES'
    } 
  ];

  const navigate = useNavigate();

  const handleLinkClick = (category) => {

    if (sessionStorage.getItem('gender') === null) {
      sessionStorage.setItem('gender', 'ALL');
    }

    if (sessionStorage.getItem('brand') === null) {
      sessionStorage.setItem('brand', '');
    }
    
    if (sessionStorage.getItem('pageSize') === null) {
      sessionStorage.setItem('pageSize', 30);
    }

    if (sessionStorage.getItem('pageNumber') === null) {
      sessionStorage.setItem('pageNumber', 1);
    }
    if (sessionStorage.getItem('priceMin') === null) {
      sessionStorage.setItem('priceMin', 0);
    }
    if (sessionStorage.getItem('priceMax') === null) {
      sessionStorage.setItem('priceMax', 999);
    }

    navigate(`/${category}`);
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