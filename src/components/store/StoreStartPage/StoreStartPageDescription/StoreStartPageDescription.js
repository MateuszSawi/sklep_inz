import React, { useState, useEffect } from 'react';
import styles from './StoreStartPageDescription.module.scss'

function StoreStartPageDescription() {
  return (
    <div className={styles.wrapper}>
      <h1>Sklep Internetowy</h1>

      <p>
        RENOX to firma specjalizująca się w obsłudze ciężkich maszyn budowlanych od 1992 roku. 
        Oferujemy kompleksową obsługę, dostarczając wysokiej jakości części, 
        sprzedając maszyny używane i świadcząc fachową obsługę techniczną. 
        Nasza główna baza w Olsztynie to magazyn części do renomowanych marek, a sieć placówek w Bytomiu ułatwia dostępność. 
        Jesteśmy liderem w wprowadzaniu innowacyjnych rozwiązań, takich jak łyżki przesiewające ALLU, 
        i produkujemy tuleje i sworznie do koparek na zamówienie. Dzięki doświadczonemu personelowi logistycznemu szybko realizujemy zamówienia, 
        dostarczając je bezpośrednio do klienta. W RENOX
        dbamy o efektywną obsługę branży budowlanej, dostarczając niezbędne narzędzia i wsparcie.
      </p>
    </div>
  );
}

export default StoreStartPageDescription;