import React, { useState, useEffect } from 'react';
import styles from './MainPageDecription.module.scss';

function MainPageDecription() {

  const lang = localStorage.getItem('lang') || 'pl';
  
  return (
    <div className={styles.container}>
      {lang === 'pl' &&
        <div className={styles.wrapper_left}>
          <p>
            Firma <strong> RENOX</strong> działa na rynku ciężkich maszyn budowlanych od roku 1992.
          </p>

          <p>
            Specjalizujemy się w kompleksowej obsłudze 
            <strong> spycharek, koparek i ładowarek</strong>, sprzedaży 
            <strong> części do maszyn budowlanych</strong>. 
            Prowadzimy również sprzedaż 
            <strong> maszyn używanych</strong>. 
            Główna baza handlowo-produkcyjna znajduje się w Olsztynie gdzie znajduje się 
            magazyn części do spycharek i koparek takich marek jak JCB, KOMATSU, CAT i VOLVO, 
            LIEBHERR, CASE, DOOSAN i innych. 
          </p>

          <p>
            Dysponujemy grupą doświadczonych pracowników zapewniając 
            <strong> fachową obsługę techniczną</strong>. 
            Znajomość zagadnień logistyki pozawala nam na szybkie realizowanie zamówień z 
            bezpośrednią dostawą do klienta.Wykonujemy tuleje i sworznie do koparek na zamówieni. 
            Wprowadzamy
            innowacyjne rozwiązania takie jak łyżki przesiewające ALLU. 
            Dystrybucja części prowadzona jest
            również przez sieć naszych placówek w Bytomiu.
          </p>
        </div>
      }

      {lang === 'ua' &&
        <div className={styles.wrapper_left}>
          <p>
            Бізнес <strong> RENOX</strong> працює на ринку важкої будівельної техніки з 1992 року.
          </p>

          <p>
            Ми спеціалізуємося на комплексних послугах 
            <strong> бульдозери, екскаватори та навантажувачі</strong>, продажу
            <strong> частини для будівельних машин</strong>. 
            Також продаємо 
            <strong> вживані машини</strong>. 
            Основна торгово-виробнича база знаходиться в Ольштині, де i знаходиться
            склад запчастин до бульдозерів та екскаваторів таких марок як JCB, KOMATSU, CAT та VOLVO,
            LIEBHERR, CASE, DOOSAN та інші.
          </p>

          <p>
            У нас є група досвідчених співробітників, які забезпечують:
            <strong>професійне технічне обслуговування</strong>.
            Наші знання логістики дозволяють швидко обробляти замовлення
            пряма поставка замовнику Виготовляємо втулки та цапфи для екскаваторів на замовлення.
            Знайомимо
            інноваційні рішення, такі як ковші ALLU.
            Частини розподілені
            також через мережу наших відділень у Битомі.
          </p>
        </div>
      }

      {lang === 'en' &&
        <div className={styles.wrapper_left}>
          <p>
            The <strong>RENOX</strong> company has been operating on the heavy construction machinery market since 1992.
          </p>

          <p>
            We specialize in comprehensive services
            <strong>dozers, excavators and loaders</strong>, sales
            <strong> parts for construction machines</strong>.
            We also sell
            <strong>used machines</strong>.
            The main commercial and production base is located in Olsztyn, where it is located
            warehouse of parts for bulldozers and excavators of brands such as JCB, KOMATSU, CAT and VOLVO,
            LIEBHERR, CASE, DOOSAN and others.
          </p>

          <p>
            We have a group of experienced employees ensuring:
            <strong>professional technical service</strong>.
            Our knowledge of logistics allows us to quickly process orders
            direct delivery to the customer. We make bushings and pins for excavators to order.
            We introduce
            innovative solutions such as ALLU screening buckets.
            Parts are distributed
            also through the network of our branches in Bytom.
          </p>
        </div>
      }

      <div className={styles.wrapper_right}>
        <img 
          src={process.env.PUBLIC_URL + '/website/logo/renox_logo.jpg'} 
          alt="Renox logo" 
        />
      </div>
    </div>
  );
}

export default MainPageDecription;