import React, { useState, useEffect } from 'react';
import styles from './MainPageDecription.module.scss';

function MainPageDecription() {
  return (
    <div className={styles.container}>
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