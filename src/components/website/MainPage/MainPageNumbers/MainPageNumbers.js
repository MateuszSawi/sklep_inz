import React, { useState, useEffect, useRef } from 'react';
import styles from './MainPageNumbers.module.scss';

function MainPageNumbers() {
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [sales, setSales] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Przestaje obserwować po pierwszym wykryciu
      }
    });

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const currentYear = new Date().getFullYear();
  let yearsOnTheMarket = currentYear - 1992;

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      if (years < 31) setYears(years + 1);
      if (clients < 1000) setClients(clients + 10);
      if (sales < 10000) setSales(sales + 100);

      // Jeżeli wszystkie liczby osiągnęły swoje wartości końcowe, wtedy czyścimy interval.
      if (years >= yearsOnTheMarket && clients >= 1000 && sales >= 10000) {
        clearInterval(interval);
      }
    }, 50); // Ustalony czas może być dostosowany zgodnie z potrzebami

    return () => clearInterval(interval);
  }, [yearsOnTheMarket, isVisible, years, clients, sales]);

  const lang = localStorage.getItem('lang') || 'pl';

  return (
    <div className={styles.stats_section} ref={sectionRef}>
      <div>
        {lang === 'pl' &&
          <h2>Lata na rynku</h2>
        }
        {lang === 'ua' &&
          <h2>Роки на ринку</h2>
        }
        {lang === 'en' &&
          <h2>Years on the market</h2>
        }
        <p>{years}</p>
      </div>
      <div>
        {lang === 'pl' &&
          <h2>Zadowoleni klienci</h2>
        }
        {lang === 'ua' &&
          <h2>Задоволені клієнти</h2>
        }
        {lang === 'en' &&
          <h2>Satisfied customers</h2>
        }
        <p>{clients}+</p>
      </div>
      <div>
        {lang === 'pl' &&
          <h2>Sprzedaże</h2>
        }
        {lang === 'ua' &&
          <h2>Продажі</h2>
        }
        {lang === 'en' &&
          <h2>Sales</h2>
        }
        <p>{sales}+</p>
      </div>
    </div>
  );
}

export default MainPageNumbers;